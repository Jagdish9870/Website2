import { Target, Users, Award, Lightbulb, Heart, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on measurable outcomes and ROI that directly impact your business growth."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority. We build lasting partnerships based on trust and transparency."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of marketing trends and leverage cutting-edge tools and strategies."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about helping businesses thrive in the digital landscape."
  }
];

const teamMembers = [
  {
    name: "Rajesh Sharma",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "15+ years in digital marketing with experience scaling Indian startups and enterprises across diverse industries."
  },
  {
    name: "Priya Mehta",
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    bio: "Former Google India marketing executive specializing in data-driven growth strategies for the Indian market."
  },
  {
    name: "Arjun Patel",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Award-winning creative professional with expertise in brand identity that resonates with Indian audiences."
  },
  {
    name: "Kavya Singh",
    role: "Head of Analytics",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: "IIT graduate and data scientist turned marketer, passionate about turning insights into actionable strategies."
  }
];

const stats = [
  { number: "8+", label: "Years in Business" },
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Team Members" },
  { number: "25+", label: "Industry Awards" }
];

interface AboutSectionProps {
  onStartJourney?: () => void;
}

export default function AboutSection({ onStartJourney }: AboutSectionProps = {}) {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
            We're More Than Just a Marketing Agency
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded with a mission to help businesses thrive in the digital age, 
            we combine creativity, strategy, and data to deliver exceptional results.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl mb-6 text-gray-900">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                KarmaKreate was born from a simple observation: too many businesses were 
                struggling with fragmented marketing efforts that didn't deliver results. 
                We set out to change that by creating a comprehensive approach that 
                combines strategy, creativity, and measurable outcomes.
              </p>
              <p>
                Since our founding in 2016, we've grown from a small team of passionate 
                marketers to a full-service agency serving clients across industries. 
                Our commitment to transparency, innovation, and client success has 
                remained unchanged.
              </p>
              <p>
                Today, we're proud to have helped over 500 businesses achieve their 
                growth goals through strategic marketing solutions that deliver 
                measurable results.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop&crop=center"
              alt="Team collaboration at KarmaKreate"
              className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-lg"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-2">
                <Award className="w-6 h-6 text-primary mr-2" />
                <span className="font-semibold text-gray-900">Award Winning</span>
              </div>
              <div className="text-sm text-gray-600">
                Recognized as Top Marketing Agency 2023
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl mb-4 text-gray-900">Our Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work with our clients and team members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-900">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl mb-4 text-gray-900">Meet Our Leadership Team</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team brings together diverse expertise in marketing, 
              strategy, and business growth to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-1 text-gray-900">{member.name}</h4>
                  <div className="text-primary text-sm mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl mb-4">Our Mission</h3>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
            "To empower businesses of all sizes to achieve extraordinary growth through 
            innovative marketing strategies, exceptional service, and measurable results 
            that exceed expectations."
          </p>
          <div className="mt-8">
            <button 
              onClick={onStartJourney}
              className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Journey With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}