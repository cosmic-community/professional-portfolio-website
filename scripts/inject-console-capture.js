const fs = require('fs');
const path = require('path');

console.log('🚀 Starting console capture injection...');

// Console capture script content
const consoleScript = `
<script>
  (function () {
    if (window.self === window.top) return;

    const logs = [];
    const MAX_LOGS = 500;

    const originalConsole = {
      log: console.log,
      warn: console.warn,
      error: console.error,
      info: console.info,
      debug: console.debug
    };

    function captureLog(level, args) {
      const timestamp = new Date().toISOString();
      const message = args.map(arg => {
        if (typeof arg === 'object' && arg !== null) {
          try {
            return JSON.stringify(arg, (key, value) => {
              if (typeof value === 'function') return '[Function]';
              if (value instanceof Error) return value.toString();
              return value;
            }, 2);
          } catch (e) {
            return '[Object]';
          }
        }
        return String(arg);
      }).join(' ');

      const logEntry = {
        timestamp,
        level,
        message,
        url: window.location.href
      };

      logs.push(logEntry);
      if (logs.length > MAX_LOGS) {
        logs.shift();
      }

      try {
        window.parent.postMessage({
          type: 'console-log',
          log: logEntry
        }, '*');
      } catch (e) { }
    }

    // Override console methods
    console.log = function(...args) {
      originalConsole.log.apply(console, args);
      captureLog('log', args);
    };

    console.warn = function(...args) {
      originalConsole.warn.apply(console, args);
      captureLog('warn', args);
    };

    console.error = function(...args) {
      originalConsole.error.apply(console, args);
      captureLog('error', args);
    };

    console.info = function(...args) {
      originalConsole.info.apply(console, args);
      captureLog('info', args);
    };

    console.debug = function(...args) {
      originalConsole.debug.apply(console, args);
      captureLog('debug', args);
    };

    // Capture unhandled errors
    window.addEventListener('error', function(event) {
      captureLog('error', ['Unhandled Error:', event.error?.message || event.message, 'at', event.filename + ':' + event.lineno + ':' + event.colno]);
    });

    // Capture unhandled promise rejections
    window.addEventListener('unhandledrejection', function(event) {
      captureLog('error', ['Unhandled Promise Rejection:', event.reason]);
    });

    function sendReady() {
      try {
        window.parent.postMessage({
          type: 'console-capture-ready',
          url: window.location.href,
          timestamp: new Date().toISOString()
        }, '*');
      } catch (e) { }
    }

    function sendRouteChange() {
      try {
        window.parent.postMessage({
          type: 'route-change',
          route: {
            pathname: window.location.pathname,
            search: window.location.search,
            hash: window.location.hash,
            href: window.location.href
          },
          timestamp: new Date().toISOString()
        }, '*');
      } catch (e) { }
    }

    // Send ready message
    if (document.readyState === 'complete') {
      sendReady();
      sendRouteChange();
    } else {
      window.addEventListener('load', function() {
        sendReady();
        sendRouteChange();
      });
    }

    // Monitor route changes for SPAs
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      setTimeout(sendRouteChange, 0);
    };

    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args);
      setTimeout(sendRouteChange, 0);
    };

    window.addEventListener('popstate', sendRouteChange);
    window.addEventListener('hashchange', sendRouteChange);
  })();
</script>
`;

// Function to recursively find HTML files
function findHtmlFiles(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir, { withFileTypes: true });
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item.name);
        
        if (item.isDirectory()) {
          // Skip node_modules and other common directories we don't need
          if (!['node_modules', '.git', '.next'].includes(item.name)) {
            searchDirectory(fullPath);
          }
        } else if (item.isFile() && item.name.endsWith('.html')) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      console.warn(`⚠️  Could not read directory ${currentDir}:`, error.message);
    }
  }
  
  searchDirectory(dir);
  return files;
}

function injectConsoleCapture(targetDir) {
  console.log(`🔍 Searching for HTML files in: ${targetDir}`);
  
  const files = findHtmlFiles(targetDir);
  
  if (files.length === 0) {
    console.log('ℹ️  No HTML files found to inject console capture script');
    return;
  }

  console.log(`📄 Found ${files.length} HTML file(s) to process`);

  let injectedCount = 0;
  let skippedCount = 0;

  files.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check if script is already injected
      if (content.includes('console-capture-ready')) {
        console.log(`⏭️  Skipping ${file} (already injected)`);
        skippedCount++;
        return;
      }
      
      // Inject script before closing head tag or at beginning of body
      let updatedContent;
      if (content.includes('</head>')) {
        updatedContent = content.replace('</head>', `${consoleScript}\n</head>`);
      } else if (content.includes('<body>')) {
        updatedContent = content.replace('<body>', `<body>${consoleScript}`);
      } else {
        // Fallback: add at the beginning of the file
        updatedContent = consoleScript + '\n' + content;
      }
      
      fs.writeFileSync(file, updatedContent, 'utf8');
      console.log(`✅ Injected console capture into: ${file}`);
      injectedCount++;
      
    } catch (error) {
      console.error(`❌ Error processing file ${file}:`, error.message);
    }
  });

  console.log(`\n🎉 Console capture injection completed!`);
  console.log(`   📊 Files processed: ${files.length}`);
  console.log(`   ✅ Successfully injected: ${injectedCount}`);
  console.log(`   ⏭️  Skipped (already injected): ${skippedCount}`);
}

// Main execution
try {
  // Look for common build output directories
  const possibleDirs = ['.next/static', '.next', 'out', 'dist', 'build'];
  let targetDir = null;

  for (const dir of possibleDirs) {
    if (fs.existsSync(dir)) {
      targetDir = dir;
      console.log(`📁 Found ${dir === '.next' ? 'Next.js' : 'static'} build directory`);
      break;
    }
  }

  if (!targetDir) {
    console.log('⚠️  No build directory found. Console capture injection skipped.');
    console.log('   Expected directories: .next, out, dist, build');
    process.exit(0);
  }

  injectConsoleCapture(targetDir);
  
} catch (error) {
  console.error('❌ Fatal error during console capture injection:', error.message);
  // Don't fail the build for console capture issues
  console.log('⚠️  Console capture injection failed, but build will continue...');
  process.exit(0);
}