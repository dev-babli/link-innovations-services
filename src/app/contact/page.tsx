"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Users,
  Globe,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a message anytime",
      value: "hello@linkinnovations.dev",
      href: "mailto:hello@linkinnovations.dev",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri from 9am to 6pm",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Remote-first company",
      value: "Global • Remote",
      href: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "We're quick to respond",
      value: "< 24 hours",
      href: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "Data Analytics",
    "UI/UX Design",
    "Consulting"
  ];

  const budgetRanges = [
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Not sure yet"
  ];

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Message Sent!
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Thank you for reaching out! We've received your message and will get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setIsSubmitted(false)} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Send Another Message
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Let's Build Something Amazing</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? We're here to help you build exceptional digital experiences.
            Tell us about your project and let's create something extraordinary together.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{info.description}</p>
                <a
                  href={info.href}
                  className="text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors duration-200"
                >
                  {info.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                  Send us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="border-gray-200 focus:border-purple-500 focus:ring-purple-500/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        required
                        className="border-gray-200 focus:border-purple-500 focus:ring-purple-500/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-700">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        className="border-gray-200 focus:border-purple-500 focus:ring-purple-500/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="border-gray-200 focus:border-purple-500 focus:ring-purple-500/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-gray-700">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-medium text-gray-700">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      required
                      rows={6}
                      className="border-gray-200 focus:border-purple-500 focus:ring-purple-500/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-600" />
                  Why Choose Us?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Team</h4>
                    <p className="text-sm text-gray-600">Experienced developers and designers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fast Delivery</h4>
                    <p className="text-sm text-gray-600">Agile development process</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                    <p className="text-sm text-gray-600">Round-the-clock assistance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Guarantee</h4>
                    <p className="text-sm text-gray-600">100% satisfaction promise</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <Globe className="w-5 h-5 text-purple-600" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/quote">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Request a Quote
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/services">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    View Services
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/portfolio">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    See Our Work
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/solutions">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Our Solutions
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/about">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    About Us
                  </Link>
                </Button>
                <Button className="w-full justify-start bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" asChild>
                  <Link href="/get-started">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Get Started
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="border-0 bg-gradient-to-br from-purple-50 to-blue-50 shadow-xl">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-sm text-gray-600">
                  We typically respond to all inquiries within 24 hours, often much sooner.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}