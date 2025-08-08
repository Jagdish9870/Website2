import { ArrowLeft } from "lucide-react";

interface TermsOfServiceProps {
  onBack: () => void;
}

export default function TermsOfService({ onBack }: TermsOfServiceProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
          <h1 className="text-3xl md:text-4xl text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-600">Last updated: December 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto prose prose-gray">
          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your use of KarmaKreate's website and marketing services. By accessing our website or engaging our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you do not agree with any part of these Terms, you must not use our website or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Services Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              KarmaKreate provides comprehensive digital marketing services including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Search Engine Optimization (SEO)</li>
              <li>Content Marketing and Creation</li>
              <li>Pay-Per-Click (PPC) Advertising</li>
              <li>Social Media Marketing</li>
              <li>Email Marketing Campaigns</li>
              <li>Web and App Development</li>
              <li>Graphic Design and Branding</li>
              <li>Custom Marketing Solutions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Service Agreements</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Specific terms for marketing services will be outlined in separate service agreements. These Terms serve as the general framework for all interactions with KarmaKreate.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Service agreements will specify deliverables, timelines, payment terms, and performance metrics specific to your project.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Payment Terms</h2>
            <h3 className="text-xl text-gray-900 mb-3">Pricing and Billing</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>All prices are quoted in Indian Rupees (₹) unless otherwise specified</li>
              <li>Payment schedules will be defined in individual service agreements</li>
              <li>Late payments may incur additional fees as specified in your agreement</li>
              <li>Refunds are subject to the terms outlined in your service agreement</li>
            </ul>
            
            <h3 className="text-xl text-gray-900 mb-3">Accepted Payment Methods</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We accept bank transfers, UPI payments, and other payment methods as mutually agreed upon.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Client Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To ensure successful service delivery, clients must:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Provide accurate and complete information</li>
              <li>Grant necessary access to platforms and accounts</li>
              <li>Respond to requests for feedback in a timely manner</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unless otherwise specified in writing:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>KarmaKreate retains rights to our methodologies and proprietary processes</li>
              <li>Clients retain ownership of their existing brand assets and content</li>
              <li>Ownership of created content will be specified in individual agreements</li>
              <li>Both parties respect each other's intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Confidentiality</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We maintain strict confidentiality regarding client information and business data. Both parties agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Protect confidential information disclosed during our business relationship</li>
              <li>Use confidential information solely for the purpose of service delivery</li>
              <li>Not disclose confidential information to third parties without consent</li>
              <li>Return or destroy confidential information upon request</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              KarmaKreate's liability is limited to the extent permitted by law. We are not liable for:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Third-party actions or platform changes beyond our control</li>
              <li>Results that depend on factors outside our direct influence</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Either party may terminate services under the conditions specified in individual service agreements. Upon termination:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>All outstanding payments become due</li>
              <li>Both parties will fulfill any remaining obligations</li>
              <li>Confidentiality obligations continue to apply</li>
              <li>Access to platforms and materials will be transferred as appropriate</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms are governed by the laws of India. Any disputes will be resolved through the courts of Noida, Uttar Pradesh, India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> karmakreate@gmail.com</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 98765 43210</p>
              <p className="text-gray-700"><strong>Address:</strong> 123 Business Park, Noida, Uttar Pradesh 202137</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update these Terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the new Terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}