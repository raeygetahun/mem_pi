"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, Check } from "lucide-react";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    subject: "",
    message: "",
    address: "Sandi",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const response = await fetch("https://192.145.44.140:3050/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          number: "",
          company: "",
          subject: "",
          message: "",
          address: "Sandi",
        });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    }
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  if (formStatus === "success") {
    return (
      <div className="bg-charcoal/30 p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 text-gold mb-6">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="font-serif text-2xl text-white mb-4">
          Message Sent Successfully
        </h3>
        <p className="text-cream/80 mb-6">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <Button
          onClick={() => setFormStatus("idle")}
          variant="outline"
          className="bg-transparent border-gold text-gold hover:bg-gold/10 rounded-none px-6 py-5 text-sm tracking-widest"
        >
          SEND ANOTHER MESSAGE
        </Button>
      </div>
    );
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
          id="number"
          name="number"
          type="tel"
          value={formData.number}
          onChange={handleChange}
          placeholder="Your phone number"
          className="bg-charcoal/30 border-white/20 focus-visible:ring-gold"
        />
      </div>

      {/* <div className="space-y-4">
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
      </div> */}

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium"
        >
          Subject *
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="bg-charcoal/30 border-white/20 focus-visible:ring-gold"
          placeholder="How can we help you?"
        />
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
        disabled={formStatus === "submitting"}
        className="bg-gold text-black hover:bg-gold/90 rounded-none px-8 py-6 text-sm tracking-widest w-full md:w-auto"
      >
        {formStatus === "submitting" ? (
          "SENDING..."
        ) : (
          <>
            SEND MESSAGE
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      {formStatus === "error" && (
        <p className="text-red-500 text-sm">
          There was an error sending your message. Please try again.
        </p>
      )}
    </form>
  );
}
