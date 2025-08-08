import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

interface FooterProps {
  onPrivacyPolicyClick?: () => void;
  onTermsOfServiceClick?: () => void;
}

export default function Footer({ onPrivacyPolicyClick, onTermsOfServiceClick }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold">K</span>
              </div>
              <span className="ml-2 text-xl font-bold">KarmaKreate</span>
            </div>
            <p className="text-gray-400 mb-6">
              We help businesses grow through strategic marketing solutions that drive real results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Content Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PPC Advertising</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Email Marketing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-gray-500" />
                karmakreate@gmail.com
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-gray-500" />
                +91 98765 43210
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-gray-500 mt-0.5" />
                123 Business Park<br />Noida, Uttar Pradesh 202137
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 KarmaKreate. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <button 
              onClick={onPrivacyPolicyClick}
              className="hover:text-white transition-colors text-left"
            >
              Privacy Policy
            </button>
            <button 
              onClick={onTermsOfServiceClick}
              className="hover:text-white transition-colors text-left"
            >
              Terms of Service
            </button>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}