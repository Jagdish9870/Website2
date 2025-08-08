import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface HeaderProps {
  onGetStarted?: () => void;
  onPricingClick?: () => void;
}

export default function Header({ onGetStarted, onPricingClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">K</span>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">KarmaKreate</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">
              Services
            </a>
            <button 
              onClick={onPricingClick}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <a href="#clients" className="text-gray-700 hover:text-primary transition-colors">
              Clients
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </a>
            <Button onClick={onGetStarted}>Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <button
                onClick={() => {
                  onPricingClick?.();
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-primary transition-colors"
              >
                Pricing
              </button>
              <a
                href="#clients"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Clients
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <Button className="w-full" onClick={onGetStarted}>Get Started</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}