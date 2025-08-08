import { forwardRef } from "react";
import { Check, Phone, MessageSquare, Star, Zap, Crown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const pricingPlans = [
  {
    name: "Starter",
    price: "₹24,999",
    period: "/project",
    description: "Perfect for small businesses getting started with digital marketing",
    icon: Zap,
    color: "bg-blue-500",
    features: [
      "Basic website or landing page",
      "Social media setup (2 platforms)",
      "Basic SEO optimization",
      "Content creation (5 posts)",
      "Email support",
      "1 month support included"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "₹49,999",
    period: "/project",
    description: "Comprehensive marketing solution for growing businesses",
    icon: Star,
    color: "bg-green-500",
    features: [
      "Everything in Starter",
      "Advanced website with CMS",
      "SEO & PPC campaign setup",
      "Social media management (4 platforms)",
      "Content marketing strategy",
      "Email marketing automation",
      "Analytics & reporting",
      "3 months support included",
      "Priority support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "₹99,999",
    period: "/project",
    description: "Complete digital transformation for established businesses",
    icon: Crown,
    color: "bg-purple-500",
    features: [
      "Everything in Professional",
      "Custom web/app development",
      "Advanced automation setup",
      "Multi-channel campaigns",
      "Brand strategy & guidelines",
      "Video & photo editing",
      "Dedicated account manager",
      "6 months support included",
      "24/7 priority support",
      "Monthly strategy sessions"
    ],
    popular: false
  }
];

const PricingSection = forwardRef<HTMLElement>((_, ref) => {
  const handleWhatsAppClick = (planName: string) => {
    const message = `Hi! I'm interested in the ${planName} package. Can you provide more details about pricing and what's included?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+919876543210', '_self');
  };

  const handleCustomProjectClick = () => {
    const message = `Hi! I have a custom project requirement. Can we schedule a consultation to discuss my specific needs?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');
  };

  return (
    <section ref={ref} id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
            Transparent Pricing
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your business needs. All packages include our commitment to quality and results-driven approach.
          </p>
        </div>

        {/* Fixed Pricing Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'ring-2 ring-primary border-primary shadow-xl scale-105' : 'hover:shadow-lg'} transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {plan.price}
                    <span className="text-sm font-normal text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3">
                    <Button 
                      onClick={() => handleWhatsAppClick(plan.name)}
                      className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Get {plan.name} Package
                    </Button>
                    
                    <Button 
                      onClick={handleCallClick}
                      variant="ghost" 
                      size="sm"
                      className="w-full text-gray-600 hover:text-gray-900"
                    >
                      <Phone className="w-3 h-3 mr-2" />
                      Call to Discuss
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Custom Solutions Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have unique requirements or a specific vision? We create tailor-made solutions that perfectly match your business needs and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Perfect for:</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 text-violet-500 mr-3" />
                  Large-scale enterprise projects
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 text-violet-500 mr-3" />
                  Industry-specific requirements
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 text-violet-500 mr-3" />
                  Complex integrations & workflows
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 text-violet-500 mr-3" />
                  Multi-platform campaigns
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 text-violet-500 mr-3" />
                  Long-term partnerships
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 text-violet-500 mr-3" />
                  Free consultation & project scoping
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 text-violet-500 mr-3" />
                  Detailed proposal with timeline
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 text-violet-500 mr-3" />
                  Dedicated project manager
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 text-violet-500 mr-3" />
                  Flexible payment terms
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 text-violet-500 mr-3" />
                  Ongoing support & maintenance
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-violet-50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center text-violet-600">
                <div className="w-2 h-2 bg-violet-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium">Free consultation available</span>
              </div>
            </div>
            <p className="text-center text-violet-700 text-sm">
              No commitment required. We'll analyze your needs and provide a detailed proposal with transparent pricing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleCustomProjectClick}
              size="lg"
              className="bg-violet-500 hover:bg-violet-600 text-white px-8"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Discuss Custom Project
            </Button>
            
            <Button 
              onClick={handleCallClick}
              variant="outline" 
              size="lg"
              className="border-violet-500 text-violet-600 hover:bg-violet-50 px-8"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 pt-8 border-t">
          <p className="text-gray-600 mb-4">
            All packages include a satisfaction guarantee and transparent communication throughout the project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-500">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              +91 98765 43210
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-1" />
              Available 24/7 on WhatsApp
            </div>
            <div className="hidden sm:block">•</div>
            <div>Free consultation for all packages</div>
          </div>
        </div>
      </div>
    </section>
  );
});

PricingSection.displayName = "PricingSection";

export default PricingSection;