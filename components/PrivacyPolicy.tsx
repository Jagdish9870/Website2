import { ArrowLeft } from "lucide-react";

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
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
          <h1 className="text-3xl md:text-4xl text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: December 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto prose prose-gray">
          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              KarmaKreate ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our marketing services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl text-gray-900 mb-3">Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Contact us through our website forms</li>
              <li>Subscribe to our newsletter</li>
              <li>Request a consultation</li>
              <li>Engage our marketing services</li>
            </ul>
            
            <h3 className="text-xl text-gray-900 mb-3">Information Collected Automatically</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you visit our website, we may automatically collect certain information about your device and usage patterns, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website addresses</li>
              <li>Device information and operating system</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for legitimate business purposes, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Providing and improving our marketing services</li>
              <li>Responding to your inquiries and communications</li>
              <li>Sending you relevant marketing materials (with your consent)</li>
              <li>Analyzing website usage to improve user experience</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Service providers who assist us in operating our business</li>
              <li>Legal compliance when required by law</li>
              <li>Protection of rights, property, or safety</li>
              <li>Business transfers (mergers, acquisitions)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Objection to processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> karmakreate@gmail.com</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 98765 43210</p>
              <p className="text-gray-700"><strong>Address:</strong> 123 Business Park, Noida, Uttar Pradesh 202137</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website with an updated "Last updated" date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}