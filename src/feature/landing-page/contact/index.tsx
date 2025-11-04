"use client";

import PageMaxWidth from "@/components/page-max-width";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import type React from "react";

import { useState } from "react";

export default function GetFreeQuote() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    homeAddress: "",
    energyNeeds: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      homeAddress: "",
      energyNeeds: "",
    });
  };

    return (
      <PageMaxWidth>
        <section className="py-16 lg:py-24">
          {/* Top Section - Quote Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-[40px]  text-green-600 mb-4 instrument-serif-regular">
              Get Your Free Solar Quote
            </h2>
            <p className="text-base lg:text-[20px] text-muted-foreground max-w-2xl mx-auto font-light">
              Ready to start saving with subsidized solar? Contact us today for
              a free consultation and personalized quote.
            </p>
          </div>

          {/* Main Content - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 min-h-[700px]">
            {/* Left Side - Contact Info */}
            <div className="flex flex-col justify-center bg-[white]  p-5 rounded-2xl ">
              {/* Illustration Placeholder */}
              <div className="mb-4  hidden lg:block  ">
                <Image
                  src="https://res.cloudinary.com/dk5mfu099/image/upload/v1762238153/jelly-message-sent-the-monster-08c3f0ad_1_xquf1p.jpg"
                  alt="jelly-mail-man"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl lg:text-[48px] font-bold text-foreground mb-3">
                Get in Touch with Us
              </h3>
              <p className="text-base text-muted-foreground mb-8 md:text-[24px]">
                Have questions, feedback, or partnership ideas? We're here to
                listen and help.
              </p>

              {/* Contact Items */}
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-4 ">
                  <div className="shrink-0">
                    <Image
                      src="/assets/mail.svg"
                      alt="mail-icon-svg"
                      width={50}
                      height={50}
                      className="object-cover w-12 h-12"
                    />
                  </div>
                  <div className="flex items-center gap-3 ">
                    <p className="text-[#34C759] text-sm font-bold md:text-[25px]  underline">
                      Email:
                    </p>
                    <a
                      href="mailto:subsidizedenergylimited@gmail.com"
                      className="text-[#34C759] text-sm md:text-[20px] underline"
                    >
                      subsidizedenergylimited@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <Image
                      src="/assets/phone.svg"
                      alt="phone-icon-svg"
                      width={50}
                      height={50}
                      className="object-cover w-12 h-12"
                    />
                  </div>
                  <div className="flex items-center gap-3 ">
                    <p className="text-[#34C759] text-sm font-bold md:text-[25px] underline">
                      Tel:
                    </p>
                    <a
                      href="tel:+234901886452"
                      className="text-[#34C759] text-sm md:text-[20px] underline"
                    >
                      +234 901 886 4512
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl p-7">
              <form onSubmit={handleSubmit} className="space-y-6 ">
                {/* Full Name and Phone - Side by side on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-[#101928] mb-2 inter"
                    >
                      Full Name
                    </Label>
                    <Input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name..."
                      className="w-full  p-4 border border-gray-300 rounded-[6px] focus:outline-none focus:ring-2 inter font-light text-sm  text-[#6D6D6D] transition-all h-14"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-[#101928] mb-2 inter"
                    >
                      Phone number:
                    </Label>
                    <Input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Enter your phone number..."
                      className="w-full  p-4 border border-gray-300 rounded-[6px] focus:outline-none focus:ring-2 inter font-light text-sm  text-[#6D6D6D] transition-all h-14"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <Label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#101928] mb-2 inter"
                  >
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address..."
                    className="w-full  p-4 border border-gray-300 rounded-[6px] focus:outline-none focus:ring-2 inter font-light text-sm  text-[#6D6D6D] transition-all h-14"
                  />
                </div>

                {/* Home Address */}
                <div>
                  <Label
                    htmlFor="homeAddress"
                    className="block text-sm font-medium text-[#101928] mb-2 inter"
                  >
                    Home Address
                  </Label>
                  <Input
                    type="text"
                    id="homeAddress"
                    name="homeAddress"
                    value={formData.homeAddress}
                    onChange={handleChange}
                    placeholder="Enter your home address..."
                    className="w-full  p-4 border border-gray-300 rounded-[6px] focus:outline-none focus:ring-2 inter font-light text-sm  text-[#6D6D6D] transition-all h-14"
                  />
                </div>

                {/* Energy Needs */}
                <div>
                  <Label
                    htmlFor="energyNeeds"
                    className="block text-sm font-medium text-[#101928] mb-2 inter"
                  >
                    Tell us about your energy needs:
                  </Label>
                  <Textarea
                    id="energyNeeds"
                    name="energyNeeds"
                    value={formData.energyNeeds}
                    onChange={handleChange}
                    placeholder="What do you want to talk about?"
                    className="w-full  p-4 border border-gray-300 rounded-[6px] focus:outline-none focus:ring-2 inter font-light text-sm  text-[#6D6D6D] transition-all h-[200px]"
                  ></Textarea>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#15A73A] hover:bg-[#15A73A]/70 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg h-[55px] inter  text-[16px] cursor-pointer"
                >
                  Get My Free Quotes
                </Button>
              </form>
            </div>
          </div>
        </section>
      </PageMaxWidth>
    );
}
