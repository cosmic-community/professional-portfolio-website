import { getTestimonials } from '@/lib/cosmic';

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  if (!testimonials || testimonials.length === 0) {
    return (
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container section-padding">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Clients Say
            </h2>
            <p className="text-gray-600">No testimonials available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Feedback from clients and colleagues I've had the pleasure to work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white p-6 rounded-lg shadow-lg animate-slide-up animation-delay-${index * 200}`}
            >
              <div className="flex items-center mb-4">
                {testimonial.metadata?.profile_photo && (
                  <img
                    src={`${testimonial.metadata.profile_photo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                    alt={testimonial.metadata?.client_name || 'Client'}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                )}
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.metadata?.client_name || 'Anonymous'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.metadata?.role && testimonial.metadata?.company
                      ? `${testimonial.metadata.role} at ${testimonial.metadata.company}`
                      : testimonial.metadata?.role || testimonial.metadata?.company || ''}
                  </p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "{testimonial.metadata?.testimonial_text || testimonial.content || ''}"
              </blockquote>
              {testimonial.metadata?.rating && (
                <div className="mt-4 flex">
                  {Array.from({ length: parseInt(testimonial.metadata.rating.key) || 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}