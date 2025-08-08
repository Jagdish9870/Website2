import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onGetStarted?: () => void;
}

export default function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section id="home" className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              #1 Marketing Agency
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight">
              Grow Your Business with 
              <span className="text-primary block">Strategic Marketing</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              We help businesses scale through data-driven marketing strategies, 
              creative campaigns, and measurable results that drive real growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group" onClick={onGetStarted}>
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">3x</div>
                <div className="text-sm text-gray-600">Average ROI</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative lg:pl-8">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop&crop=center"
                alt="Marketing team collaboration"
                className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="text-2xl mb-1">📈</div>
                <div className="text-sm font-semibold text-gray-900">Growth</div>
                <div className="text-xs text-gray-600">+127%</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="text-2xl mb-1">🎯</div>
                <div className="text-sm font-semibold text-gray-900">Conversion</div>
                <div className="text-xs text-gray-600">85.3%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}