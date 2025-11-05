"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type React from "react"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubmitted(true)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="bg-gray-100 py-12 lg:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl lg:text-[32px] font-bold text-foreground mb-3 font-trap">
          Newsletter
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-8 inter md:text-2xl md:max-w-[80%]">
          Subscribe to our amazing newsletter to receive all the latest news &
          updates.
        </p>

        {/* Email Input with Subscribe Button */}
        <form
          onSubmit={handleSubmit}
          className="flex  w-full md:w-[750px] mx-auto  h-20 relative overflow-hidden px-2"
        >
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className=" px-6 py-3 h-full w-full  rounded-full border-2 border-teal-400 focus:outline-none focus:ring-0 placeholder:text-gray-400 font-trap placeholder:font-bold placeholder:text-[25px] flex items-center text-[25px] "
          />
          <Button
            type="submit"
            className="px-[30px] text-sm md:text-[18px] py-3 top-3 right-4 bottom-4 h-[50px] absolute bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors duration-200 cursor-pointer"
          >
            Subscribe
          </Button>
        </form>

        {/* Success Message */}
        {isSubmitted && (
          <p className="text-green-600 mt-4 text-sm font-medium">
            Thank you for subscribing!
          </p>
        )}
      </div>
    </section>
  );
}
