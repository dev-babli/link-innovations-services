"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    companySize: "",
    demoCall: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
  };

  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "500+ employees"
  ];

  return (
    <main className="min-h-screen bg-[#0A0E27] relative overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0">
        {/* Glowing curved lines */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Star-like speckles */}
        <div className="absolute top-32 left-1/3 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-blue-400/80 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-40 left-1/2 w-1.5 h-1.5 bg-cyan-400/80 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-80 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping delay-1500"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-[#60A5FA] uppercase tracking-wider mb-4">
              CONTACTS
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get in Touch with Us
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Please fill out the form below to share your feedback or request information about our services
            </p>
          </div>

          {/* Contact Form */}
          <Card className="bg-[#1A1F3A] border-[#2D3748] shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      First name
                    </label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      className="bg-[#2D3748] border-[#4A5568] text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Last name
                    </label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      className="bg-[#2D3748] border-[#4A5568] text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                {/* Email and Company Size */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Work email
                    </label>
                    <Input
                      name="workEmail"
                      type="email"
                      value={formData.workEmail}
                      onChange={handleInputChange}
                      placeholder="Enter your work email"
                      className="bg-[#2D3748] border-[#4A5568] text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Company size
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full h-10 px-3 py-2 bg-[#2D3748] border border-[#4A5568] rounded-md text-white focus:border-blue-500 focus:ring-blue-500/20"
                    >
                      <option value="" className="bg-[#2D3748] text-white">Select company size</option>
                      {companySizes.map((size) => (
                        <option key={size} value={size} className="bg-[#2D3748] text-white">
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Demo Call Section */}
                <div className="bg-[#2D3748] rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Schedule a Demo Call
                      </h3>
                      <p className="text-sm text-white/70">
                        Our manager will contact you shortly to help with all your questions.
                      </p>
                    </div>
                    <Switch
                      name="demoCall"
                      checked={formData.demoCall}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, demoCall: checked }))}
                      className="data-[state=checked]:bg-blue-500"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg rounded-lg transition-colors"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>

                {/* Terms */}
                <p className="text-xs text-white/60 text-center">
                  By contacting with us you agree to our Terms and Privacy Policy
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}