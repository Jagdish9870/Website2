import { forwardRef } from "react";
import { 
  Search, 
  PenTool, 
  TrendingUp, 
  Mail, 
  Smartphone, 
  BarChart3,
  Megaphone,
  Globe,
  Code,
  Camera,
  Video,
  Palette,
  Phone
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your search rankings with our proven SEO strategies and technical optimization.",
    color: "bg-blue-500",
    features: ["Keyword Research", "On-page SEO", "Link Building", "Technical Audit"]
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "Engaging content that tells your story and converts visitors into customers.",
    color: "bg-purple-500",
    features: ["Blog Writing", "Video Content", "Infographics", "Social Media"]
  },
  {
    icon: TrendingUp,
    title: "PPC Advertising",
    description: "Maximize ROI with targeted pay-per-click campaigns across all platforms.",
    color: "bg-green-500",
    features: ["Google Ads", "Facebook Ads", "Campaign Optimization", "A/B Testing"]
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Build relationships and drive sales with personalized email campaigns.",
    color: "bg-red-500",
    features: ["Automation", "Segmentation", "Design", "Analytics"]
  },
  {
    icon: Smartphone,
    title: "Social Media",
    description: "Build your brand presence and engage with your audience on social platforms.",
    color: "bg-pink-500",
    features: ["Strategy", "Content Creation", "Community Management", "Advertising"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Data-driven insights to measure success and optimize your marketing efforts.",
    color: "bg-indigo-500",
    features: ["Performance Tracking", "Custom Dashboards", "ROI Analysis", "Insights"]
  },
  {
    icon: Megaphone,
    title: "Brand Strategy",
    description: "Develop a compelling brand identity that resonates with your target audience.",
    color: "bg-orange-500",
    features: ["Brand Identity", "Positioning", "Messaging", "Guidelines"]
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Create high-converting websites optimized for user experience and performance.",
    color: "bg-teal-500",
    features: ["Responsive Design", "Speed Optimization", "UX/UI Design", "CRO"]
  },
  {
    icon: Code,
    title: "App Development",
    description: "Build custom mobile and web applications that engage users and drive business growth.",
    color: "bg-cyan-500",
    features: ["iOS & Android", "Cross-Platform", "UI/UX Design", "App Store Optimization"]
  },
  {
    icon: Camera,
    title: "Photo Editing",
    description: "Professional photo editing and retouching services to make your visuals stand out.",
    color: "bg-rose-500",
    features: ["Photo Retouching", "Color Correction", "Background Removal", "Product Photography"]
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Create compelling video content with professional editing and post-production services.",
    color: "bg-amber-500",
    features: ["Video Production", "Motion Graphics", "Color Grading", "Audio Enhancement"]
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Creative graphic design solutions including logos, t-shirts, and brand materials.",
    color: "bg-emerald-500",
    features: ["Logo Design", "T-shirt Design", "Print Materials", "Digital Graphics"]
  },
  {
    icon: Phone,
    title: "Custom Solutions",
    description: "Have a unique project or specific requirements? Call us to discuss your custom needs.",
    color: "bg-violet-500",
    features: ["Custom Projects", "Consultation", "Tailored Solutions", "Expert Guidance"]
  }
];

interface ServicesSectionProps {
  onServiceClick: (service: { title: string; description: string; color: string; features: string[] }) => void;
}

const ServicesSection = forwardRef<HTMLElement, ServicesSectionProps>(
  ({ onServiceClick }, ref) => {
  return (
    <section ref={ref} id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
            Comprehensive Marketing & Creative Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From strategy to execution, we provide end-to-end marketing services, 
            creative design, and content editing that drive measurable results for your business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-100 cursor-pointer"
                onClick={() => onServiceClick({
                  title: service.title,
                  description: service.description,
                  color: service.color,
                  features: service.features
                })}
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Title and Description */}
                  <h3 className="text-xl mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Click to view indicator */}
                  <div className="text-center pt-2 border-t border-gray-100">
                    <span className="text-xs text-primary font-medium group-hover:underline">
                      Click to view showcase →
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to take your marketing to the next level?
          </p>
          <button 
            onClick={() => window.open('tel:+919876543210', '_self')}
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Us for Details
          </button>
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;