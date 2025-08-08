import { useState, useRef } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PricingSection from "./components/PricingSection";
import ClientsSection from "./components/ClientsSection";
import Footer from "./components/Footer";
import ServiceShowcase from "./components/ServiceShowcase";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

interface Service {
  title: string;
  description: string;
  color: string;
  features: string[];
}

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "service" | "privacy" | "terms">("home");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);

  const handleGetStarted = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handlePricingClick = () => {
    if (currentView !== "home") {
      // If we're not on the home page, go back to home first
      setCurrentView("home");
      setSelectedService(null);
      // Use setTimeout to ensure the component has rendered before scrolling
      setTimeout(() => {
        if (pricingRef.current) {
          pricingRef.current.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      // If we're already on home, just scroll to pricing
      if (pricingRef.current) {
        pricingRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedService(null);
  };

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setCurrentView("service");
  };

  const handlePrivacyPolicyClick = () => {
    setCurrentView("privacy");
  };

  const handleTermsOfServiceClick = () => {
    setCurrentView("terms");
  };

  if (currentView === "service") {
    return <ServiceShowcase service={selectedService} onBack={handleBackToHome} />;
  }

  if (currentView === "privacy") {
    return <PrivacyPolicy onBack={handleBackToHome} />;
  }

  if (currentView === "terms") {
    return <TermsOfService onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen">
      <Header onGetStarted={handleGetStarted} onPricingClick={handlePricingClick} />
      <main>
        <HeroSection onGetStarted={handleGetStarted} />
        <AboutSection onStartJourney={handleGetStarted} />
        <ServicesSection ref={servicesRef} onServiceClick={handleServiceClick} />
        <PricingSection ref={pricingRef} />
        <ClientsSection />
      </main>
      <Footer 
        onPrivacyPolicyClick={handlePrivacyPolicyClick}
        onTermsOfServiceClick={handleTermsOfServiceClick}
      />
    </div>
  );
}