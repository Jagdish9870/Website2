import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const clientLogos = [
  { name: "TechMahindra", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop&crop=center" },
  { name: "InfoTech Solutions", logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=200&h=100&fit=crop&crop=center" },
  { name: "Desi Brands", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center" },
  { name: "Mumbai Innovations", logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=100&fit=crop&crop=center" },
  { name: "Delhi Digital", logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=100&fit=crop&crop=center" },
  { name: "Bangalore Tech", logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=100&fit=crop&crop=center" },
];

const testimonials = [
  {
    name: "Anita Sharma",
    title: "CEO, TechMahindra",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "KarmaKreate transformed our digital presence across India. Our lead generation increased by 300% in just 6 months. Their understanding of the Indian market is unmatched.",
    rating: 5,
    metrics: { metric: "Lead Generation", value: "+300%" }
  },
  {
    name: "Vikash Gupta",
    title: "Marketing Director, InfoTech Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "The ROI we've achieved with KarmaKreate has exceeded all expectations. Their data-driven approach helped us optimize our marketing spend across tier-1 and tier-2 cities.",
    rating: 5,
    metrics: { metric: "ROI Increase", value: "+450%" }
  },
  {
    name: "Deepika Reddy",
    title: "Founder, Desi Brands",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Working with KarmaKreate was a game-changer for our brand. They helped us build authentic connections with Indian consumers and created campaigns that truly convert.",
    rating: 5,
    metrics: { metric: "Conversion Rate", value: "+180%" }
  }
];

const successMetrics = [
  { label: "Average Revenue Growth", value: "240%", icon: "📈" },
  { label: "Client Retention Rate", value: "98%", icon: "🤝" },
  { label: "Campaign Success Rate", value: "94%", icon: "🎯" },
  { label: "Average Time to Results", value: "90 days", icon: "⚡" }
];

export default function ClientsSection() {
  return (
    <section id="clients" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
            Our Clients
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've helped hundreds of businesses achieve remarkable growth through 
            strategic marketing solutions and proven methodologies.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-20">
          <h3 className="text-center text-gray-500 mb-8">Proud to work with</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                <ImageWithFallback
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {successMetrics.map((metric, index) => (
            <Card key={index} className="text-center border-gray-200">
              <CardContent className="p-6">
                <div className="text-3xl mb-2">{metric.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl text-center mb-12 text-gray-900">
            What Our Clients Say
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Metrics */}
                  <div className="bg-primary/5 rounded-lg p-3 mb-4">
                    <div className="text-sm text-gray-600">{testimonial.metrics.metric}</div>
                    <div className="text-xl font-bold text-primary">{testimonial.metrics.value}</div>
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h3 className="text-2xl md:text-3xl mb-4 text-gray-900">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve similar results 
            with a customized marketing strategy tailored to your goals.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => {
                const message = "Hi! I'd like to schedule a consultation to discuss how KarmaKreate can help grow my business. When would be a good time to talk?";
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');
              }}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}