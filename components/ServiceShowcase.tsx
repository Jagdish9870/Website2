import { ArrowLeft, Phone, MessageSquare, Check, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ServiceShowcaseProps {
  service: {
    title: string;
    description: string;
    color: string;
    features: string[];
  } | null;
  onBack: () => void;
}

export default function ServiceShowcase({ service, onBack }: ServiceShowcaseProps) {
  if (!service) return null;

  // Get service-specific content
  const getServiceContent = (serviceTitle: string) => {
    const services: { [key: string]: any } = {
      'SEO Optimization': {
        description: 'Our comprehensive SEO service helps businesses improve their organic search visibility through technical optimization, content strategy, and authority building. We focus on sustainable, white-hat techniques that drive long-term growth in search rankings.',
        detailedDescription: 'We analyze your website\'s current performance, identify optimization opportunities, and implement strategic improvements that enhance your search engine visibility. Our approach combines technical SEO, content optimization, and off-page strategies.',
        tools: ['Google Search Console', 'SEMrush', 'Ahrefs', 'Screaming Frog', 'Google Analytics', 'PageSpeed Insights', 'Yoast SEO', 'Schema Markup'],
        process: [
          { title: 'SEO Audit & Analysis', desc: 'Comprehensive analysis of your website\'s current SEO performance, technical issues, and competitor landscape.' },
          { title: 'Keyword Strategy', desc: 'Research and selection of high-value keywords that align with your business goals and target audience.' },
          { title: 'On-Page Optimization', desc: 'Optimize content, meta tags, headers, and technical elements for better search engine understanding.' },
          { title: 'Monitor & Improve', desc: 'Track rankings, traffic, and conversions while continuously refining strategies for sustained growth.' }
        ]
      },
      'Content Marketing': {
        description: 'Our content marketing service creates compelling, valuable content that engages your audience and drives business results. We develop comprehensive content strategies that build brand authority and nurture customer relationships.',
        detailedDescription: 'From blog posts and videos to infographics and social media content, we create diverse content formats that resonate with your target audience and support your business objectives across all marketing channels.',
        tools: ['WordPress', 'Canva Pro', 'Adobe Creative Suite', 'Grammarly', 'BuzzSumo', 'CoSchedule', 'Loom', 'Figma'],
        process: [
          { title: 'Content Strategy', desc: 'Develop a comprehensive content plan aligned with your brand voice, audience needs, and business goals.' },
          { title: 'Content Creation', desc: 'Produce high-quality content across multiple formats including blogs, videos, graphics, and social media posts.' },
          { title: 'Content Distribution', desc: 'Strategically publish and promote content across relevant channels to maximize reach and engagement.' },
          { title: 'Performance Analysis', desc: 'Monitor content performance metrics and optimize future content based on audience engagement and conversion data.' }
        ]
      },
      'PPC Advertising': {
        description: 'Our PPC advertising service maximizes your return on investment through strategic campaign management across Google Ads, Facebook, and other platforms. We focus on data-driven optimization to reduce costs and increase conversions.',
        detailedDescription: 'We create and manage targeted advertising campaigns that reach your ideal customers at the right moment. Our approach combines audience research, compelling ad creative, and continuous optimization to drive qualified traffic and conversions.',
        tools: ['Google Ads', 'Facebook Ads Manager', 'Microsoft Advertising', 'Google Analytics', 'Google Tag Manager', 'Unbounce', 'Optmyzr', 'WordStream'],
        process: [
          { title: 'Campaign Strategy', desc: 'Analyze your business goals and target audience to develop effective advertising strategies across platforms.' },
          { title: 'Ad Creation & Setup', desc: 'Create compelling ad copy, visuals, and landing pages while setting up precise targeting parameters.' },
          { title: 'Campaign Launch', desc: 'Deploy campaigns with proper tracking and monitoring systems to ensure optimal performance from day one.' },
          { title: 'Optimize & Scale', desc: 'Continuously test, analyze, and optimize campaigns to improve performance and scale successful strategies.' }
        ]
      },
      'Email Marketing': {
        description: 'Our email marketing service builds lasting customer relationships through personalized, automated email campaigns. We create email strategies that nurture leads, retain customers, and drive repeat business.',
        detailedDescription: 'From welcome sequences to promotional campaigns, we design email marketing strategies that deliver the right message to the right person at the right time, resulting in higher engagement and conversion rates.',
        tools: ['Mailchimp', 'Klaviyo', 'ConvertKit', 'ActiveCampaign', 'Mailjet', 'Canva', 'Litmus', 'Campaign Monitor'],
        process: [
          { title: 'Email Strategy & Setup', desc: 'Develop email marketing strategy, set up automation workflows, and segment your audience for targeted messaging.' },
          { title: 'Design & Content', desc: 'Create visually appealing email templates and write compelling copy that drives action and engagement.' },
          { title: 'Campaign Deployment', desc: 'Launch email campaigns with proper testing and delivery optimization to ensure maximum inbox placement.' },
          { title: 'Analyze & Optimize', desc: 'Track open rates, click-through rates, and conversions to continuously improve email performance.' }
        ]
      },
      'Social Media': {
        description: 'Our social media service builds your brand presence and engages your audience across all major platforms. We create content strategies that drive engagement, build community, and generate leads.',
        detailedDescription: 'We manage your social media presence with strategic content planning, community engagement, and targeted advertising to build brand awareness and drive business results across platforms.',
        tools: ['Hootsuite', 'Buffer', 'Sprout Social', 'Canva', 'Adobe Creative Suite', 'Later', 'Socialbakers', 'Facebook Creator Studio'],
        process: [
          { title: 'Social Strategy', desc: 'Develop platform-specific strategies based on your audience behavior and business objectives.' },
          { title: 'Content Planning', desc: 'Create content calendars with engaging posts, stories, and multimedia content tailored to each platform.' },
          { title: 'Community Management', desc: 'Actively engage with your audience, respond to comments, and build meaningful relationships with followers.' },
          { title: 'Performance Tracking', desc: 'Monitor engagement metrics, follower growth, and conversion data to optimize social media performance.' }
        ]
      },
      'Analytics & Reporting': {
        description: 'Our analytics and reporting service provides comprehensive insights into your marketing performance. We create custom dashboards and reports that help you make data-driven decisions for business growth.',
        detailedDescription: 'We implement advanced tracking systems and create meaningful reports that translate complex data into actionable insights, helping you understand what works and optimize for better results.',
        tools: ['Google Analytics 4', 'Google Data Studio', 'Tableau', 'Power BI', 'Google Tag Manager', 'Hotjar', 'Mixpanel', 'Segment'],
        process: [
          { title: 'Tracking Setup', desc: 'Implement comprehensive tracking systems to capture all relevant marketing and business performance data.' },
          { title: 'Dashboard Creation', desc: 'Build custom dashboards that present key metrics and KPIs in an easy-to-understand visual format.' },
          { title: 'Report Generation', desc: 'Create detailed reports that analyze performance trends and provide actionable insights for improvement.' },
          { title: 'Strategic Recommendations', desc: 'Provide data-driven recommendations and strategies based on performance analysis and market insights.' }
        ]
      },
      'Brand Strategy': {
        description: 'Our brand strategy service develops comprehensive brand identities that resonate with your target audience. We create brand guidelines, messaging frameworks, and positioning strategies that differentiate your business.',
        detailedDescription: 'We work with you to define your brand\'s unique value proposition, create compelling brand messaging, and develop visual identity systems that consistently communicate your brand across all touchpoints.',
        tools: ['Adobe Illustrator', 'Figma', 'Sketch', 'Brand24', 'Mention', 'Canva Pro', 'Adobe InDesign', 'Pantone Connect'],
        process: [
          { title: 'Brand Discovery', desc: 'Research your market, competitors, and target audience to understand brand positioning opportunities.' },
          { title: 'Brand Development', desc: 'Create brand identity, messaging framework, and visual guidelines that reflect your unique value proposition.' },
          { title: 'Brand Guidelines', desc: 'Develop comprehensive brand guidelines that ensure consistent application across all marketing materials.' },
          { title: 'Brand Implementation', desc: 'Support the rollout of your new brand identity across all customer touchpoints and marketing channels.' }
        ]
      },
      'Web Development': {
        description: 'Our web development service creates high-performance, responsive websites that deliver exceptional user experiences. We build websites optimized for speed, SEO, and conversion to help grow your business.',
        detailedDescription: 'From custom website design to e-commerce development, we create web solutions that not only look great but also perform exceptionally, driving user engagement and business results.',
        tools: ['React', 'Next.js', 'WordPress', 'Shopify', 'Figma', 'GitHub', 'Netlify', 'Vercel'],
        process: [
          { title: 'Planning & Design', desc: 'Analyze requirements, create wireframes, and design user interfaces that align with your brand and goals.' },
          { title: 'Development', desc: 'Build responsive, fast-loading websites using modern technologies and best practices for optimal performance.' },
          { title: 'Testing & Launch', desc: 'Thoroughly test website functionality, performance, and compatibility before launching to ensure smooth operation.' },
          { title: 'Maintenance & Support', desc: 'Provide ongoing maintenance, updates, and support to keep your website secure and performing optimally.' }
        ]
      },
      'App Development': {
        description: 'Our app development service creates custom mobile and web applications that engage users and drive business growth. We build scalable, user-friendly apps for iOS, Android, and web platforms.',
        detailedDescription: 'We develop custom applications that solve specific business challenges, improve user engagement, and create new revenue opportunities through innovative mobile and web solutions.',
        tools: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'MongoDB', 'AWS', 'App Store Connect'],
        process: [
          { title: 'App Strategy & Design', desc: 'Define app requirements, user flows, and create intuitive designs that provide exceptional user experiences.' },
          { title: 'Development & Testing', desc: 'Build the application using modern frameworks while conducting thorough testing for functionality and performance.' },
          { title: 'App Store Optimization', desc: 'Optimize app store listings with compelling descriptions, screenshots, and keywords for maximum visibility.' },
          { title: 'Launch & Support', desc: 'Deploy the app and provide ongoing maintenance, updates, and technical support for optimal performance.' }
        ]
      },
      'Photo Editing': {
        description: 'Our photo editing service provides professional retouching and enhancement to make your visual content stand out. We specialize in product photography, portrait retouching, and commercial photo editing.',
        detailedDescription: 'From basic color correction to advanced photo manipulation, we enhance your images to meet professional standards and create visual content that captures attention and drives engagement.',
        tools: ['Adobe Photoshop', 'Adobe Lightroom', 'Capture One', 'Luminar', 'GIMP', 'Canva', 'Figma', 'Photopea'],
        process: [
          { title: 'Image Assessment', desc: 'Analyze your photos to understand the editing requirements and desired final output quality.' },
          { title: 'Professional Editing', desc: 'Apply color correction, retouching, and enhancement techniques to achieve the desired visual impact.' },
          { title: 'Quality Review', desc: 'Conduct thorough quality checks to ensure edited images meet professional standards and client expectations.' },
          { title: 'Final Delivery', desc: 'Deliver high-resolution edited images in the required formats for your specific use cases and platforms.' }
        ]
      },
      'Video Editing': {
        description: 'Our video editing service creates compelling video content with professional editing and post-production. We specialize in promotional videos, social media content, and commercial video production.',
        detailedDescription: 'From raw footage to polished final videos, we create engaging video content that tells your story effectively and drives audience engagement across all platforms.',
        tools: ['Adobe Premiere Pro', 'Final Cut Pro', 'DaVinci Resolve', 'After Effects', 'Loom', 'ScreenFlow', 'Audacity', 'Canva'],
        process: [
          { title: 'Video Planning', desc: 'Review footage and plan the editing approach to create engaging videos that align with your objectives.' },
          { title: 'Editing & Production', desc: 'Cut, arrange, and enhance video content with professional transitions, effects, and audio optimization.' },
          { title: 'Post-Production', desc: 'Add motion graphics, color grading, and audio enhancement to create polished, professional video content.' },
          { title: 'Format & Delivery', desc: 'Export videos in appropriate formats and resolutions optimized for your intended platforms and use cases.' }
        ]
      },
      'Graphic Design': {
        description: 'Our graphic design service creates visually stunning designs for all your marketing needs. From logos and brand materials to t-shirts and digital graphics, we bring your creative vision to life.',
        detailedDescription: 'We create professional graphic designs that communicate your brand message effectively and capture audience attention across print and digital media.',
        tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Figma', 'Canva Pro', 'Sketch', 'Procreate', 'CorelDRAW'],
        process: [
          { title: 'Design Brief', desc: 'Understand your design requirements, brand guidelines, and creative objectives for the project.' },
          { title: 'Concept Development', desc: 'Create initial design concepts and mockups that align with your brand and communication goals.' },
          { title: 'Design Refinement', desc: 'Refine selected concepts based on feedback and ensure designs meet all specifications and requirements.' },
          { title: 'Final Delivery', desc: 'Deliver final designs in all required formats and provide source files for future use and modifications.' }
        ]
      },
      'Custom Solutions': {
        description: 'Our custom solutions service addresses unique business challenges with tailored strategies and implementations. We work closely with you to understand your specific needs and create bespoke solutions.',
        detailedDescription: 'Every business is unique, and sometimes you need solutions that go beyond standard services. We provide custom consulting and implementation services tailored to your specific requirements.',
        tools: ['Varies by Project', 'Custom Integrations', 'API Development', 'Automation Tools', 'Analytics Platforms', 'CRM Systems', 'Project Management', 'Consultation'],
        process: [
          { title: 'Requirement Analysis', desc: 'Conduct thorough analysis of your unique business challenges and specific project requirements.' },
          { title: 'Solution Design', desc: 'Design custom solutions that address your specific needs while integrating with your existing systems.' },
          { title: 'Custom Implementation', desc: 'Implement the tailored solution with careful attention to your business processes and requirements.' },
          { title: 'Support & Optimization', desc: 'Provide ongoing support and optimization to ensure the custom solution continues to meet your evolving needs.' }
        ]
      }
    };

    return services[serviceTitle] || services['Custom Solutions'];
  };

  const serviceContent = getServiceContent(service.title);



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </button>
            
            <div className="flex items-center">
              <div className={`w-8 h-8 ${service.color} rounded-lg flex items-center justify-center mr-3`}>
                <span className="text-white text-sm font-bold">{service.title.charAt(0)}</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">{service.title}</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* Section 1: Service Details */}
        <section className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mr-4`}>
                  <span className="text-white text-xl font-bold">{service.title.charAt(0)}</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h2>
                  <Badge variant="secondary" className="text-sm">Professional Service</Badge>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center text-sm text-gray-500">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-sm font-medium text-gray-900 mr-2">4.9/5</span>
                <span>(127 reviews)</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Why Choose Our {service.title}?</h3>
                  <p className="text-gray-600">
                    We deliver exceptional results with our proven methodology and expert team.
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">150+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">98%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">24h</div>
                    <div className="text-sm text-gray-600">Response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Service Description */}
        <section className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Service Overview & Methodology</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Service Description */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Deliver</h3>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {serviceContent.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {serviceContent.detailedDescription}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Process</h3>
                <div className="space-y-4">
                  {serviceContent.process.map((step: any, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-primary font-semibold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-gray-600 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Benefits & Tools */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                    <div className="flex items-center mb-2">
                      <Check className="w-5 h-5 text-green-600 mr-2" />
                      <h4 className="font-medium text-green-900">Proven ROI</h4>
                    </div>
                    <p className="text-green-700 text-sm">Our clients typically see 200-400% return on investment within the first 6 months of implementation.</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <div className="flex items-center mb-2">
                      <Check className="w-5 h-5 text-blue-600 mr-2" />
                      <h4 className="font-medium text-blue-900">Expert Team</h4>
                    </div>
                    <p className="text-blue-700 text-sm">Work with certified professionals who understand the nuances of the Indian market and global best practices.</p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                    <div className="flex items-center mb-2">
                      <Check className="w-5 h-5 text-purple-600 mr-2" />
                      <h4 className="font-medium text-purple-900">24/7 Support</h4>
                    </div>
                    <p className="text-purple-700 text-sm">Round-the-clock support ensures your campaigns run smoothly and issues are resolved immediately.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {serviceContent.tools.map((tool: string, index: number) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                      {tool}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  We leverage industry-leading tools and platforms specifically chosen for {service.title} to ensure your projects are built on the most reliable and effective foundation.
                </p>
              </div>


            </div>
          </div>
        </section>


      </div>
    </div>
  );
}