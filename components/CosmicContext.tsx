interface CosmicContextProps {
  objectId: string
  objectType: string
}

/**
 * Renders a <meta> tag for Cosmic Insights object view attribution.
 * When placed on a page that represents a Cosmic object, pageviews
 * are attributed to that object on the Cosmic Insights Content tab.
 */
export default function CosmicContext({ objectId, objectType }: CosmicContextProps) {
  return (
    <meta
      name="cosmic-context"
      content={JSON.stringify({ object_id: objectId, object_type: objectType })}
    />
  )
}