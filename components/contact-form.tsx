"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowRight, Check } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "portrait",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setFormState("success")
      // Reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "portrait",
        message: "",
      })
    } catch (error) {
      setFormState("error")
    }
  }

  if (formState === "success") {
    return (
      <div className="bg-charcoal/30 p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 text-gold mb-6">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="font-serif text-2xl text-white mb-4">Message Sent Successfully</h3>
        <p className="text-cream/80 mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
        <Button
          onClick={() => setFormState("idle")}
          variant="outline"
          className="bg-transparent border-gold text-gold hover:bg-gold/10 rounded-none px-6 py-5 text-sm tracking-widest"
        >
          SEND ANOTHER MESSAGE
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="bg-charcoal/30 border-white/20 focus-visible:ring-gold"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className="bg-charcoal/30 border-white/20 focus-visible:ring-gold"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-white">
          Phone Number
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your phone number"
          className="bg-charcoal/30 border-white/20 focus-visible:ring-gold"
        />
      </div>

      <div className="space-y-4">
        <Label className="text-white">Service of Interest</Label>
        <RadioGroup
          value={formData.service}
          onValueChange={handleServiceChange}
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="portrait" value="portrait" className="text-gold" />
            <Label htmlFor="portrait" className="text-cream">
              Portrait Photography
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="commercial" value="commercial" className="text-gold" />
            <Label htmlFor="commercial" className="text-cream">
              Commercial Photography
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="event" value="event" className="text-gold" />
            <Label htmlFor="event" className="text-cream">
              Event Coverage
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="editorial" value="editorial" className="text-gold" />
            <Label htmlFor="editorial" className="text-cream">
              Editorial Photography
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-white">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          required
          className="min-h-[150px] bg-charcoal/30 border-white/20 focus-visible:ring-gold"
        />
      </div>

      <Button
        type="submit"
        disabled={formState === "submitting"}
        className="bg-gold text-black hover:bg-gold/90 rounded-none px-8 py-6 text-sm tracking-widest w-full md:w-auto"
      >
        {formState === "submitting" ? (
          "SENDING..."
        ) : (
          <>
            SEND MESSAGE
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      {formState === "error" && (
        <p className="text-red-500 text-sm">There was an error sending your message. Please try again.</p>
      )}
    </form>
  )
}
