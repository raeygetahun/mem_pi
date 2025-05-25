import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/fade-in-section"
import CustomCursor from "@/components/custom-cursor"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <CustomCursor />

      {/* Header */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-black z-0" />
        <div className="container relative z-10 px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Contact Us</h1>
              <p className="text-cream/80 text-lg max-w-2xl mx-auto">
                Ready to discuss your project? Get in touch with our team to schedule a consultation or request more
                information.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeInSection>
              <div>
                <h2 className="font-serif text-3xl text-white mb-8">Get In Touch</h2>
                <ContactForm />
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="lg:pl-12">
                <h2 className="font-serif text-3xl text-white mb-8">Studio Information</h2>

                <div className="grid gap-8">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-gold mr-4 mt-1 shrink-0" />
                    <div>
                      <h3 className="text-white text-lg mb-2">Visit Our Studio</h3>
                      <p className="text-cream/80 mb-1">4409 EMDEN Street</p>
                      <p className="text-cream/80">Silver Spring, MD, 20906</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-gold mr-4 mt-1 shrink-0" />
                    <div>
                      <h3 className="text-white text-lg mb-2">Call Us</h3>
                      <p className="text-cream/80 mb-1">+1 (212) 555-7890</p>
                      <p className="text-cream/80 text-sm">Monday-Friday: 9am-6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-gold mr-4 mt-1 shrink-0" />
                    <div>
                      <h3 className="text-white text-lg mb-2">Email Us</h3>
                      <p className="text-cream/80 mb-1">info@memorypicture.com</p>
                      <p className="text-cream/80 text-sm">We respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-white text-lg mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <Link href="https://instagram.com" className="text-cream/80 hover:text-gold transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="https://twitter.com" className="text-cream/80 hover:text-gold transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="https://linkedin.com" className="text-cream/80 hover:text-gold transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="https://pinterest.com" className="text-cream/80 hover:text-gold transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <path d="M19 12H5"></path>
                      </svg>
                      <span className="sr-only">Pinterest</span>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Map */}
      {/* <section className="py-12 md:py-24 bg-charcoal">
        <div className="container px-4 md:px-6">
          <FadeInSection>
            <h2 className="font-serif text-3xl text-white text-center mb-12">Visit Our Studio</h2>
          </FadeInSection>

          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image src="/images/studio-map.jpg" alt="Studio location map" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                asChild
                className="bg-gold text-black hover:bg-gold/90 rounded-none px-6 py-5 text-sm tracking-widest"
              >
                <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="group">
                  GET DIRECTIONS
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-cream/80">
                Have questions about working with us? Find answers to common inquiries below.
              </p>
            </div>
          </FadeInSection>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <FadeInSection key={faq.id} delay={index * 0.1}>
                  <div className="bg-charcoal/50 p-6">
                    <h3 className="font-serif text-xl text-white mb-3">{faq.question}</h3>
                    <p className="text-cream/70">{faq.answer}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* <Image src="/images/pattern.jpg" alt="Background pattern" fill className="object-cover" /> */}
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Let's Create Something Beautiful</h2>
              <p className="text-cream/80 mb-8">
                We're excited to hear about your project and explore how we can bring your vision to life.
              </p>
              <Button
                asChild
                className="bg-gold text-black hover:bg-gold/90 rounded-none px-8 py-6 text-sm tracking-widest"
              >
                <Link href="/portfolio" className="group">
                  EXPLORE OUR WORK
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  )
}

// Sample data
const faqs = [
  {
    id: 1,
    question: "What should I expect during a consultation?",
    answer:
      "During your consultation, we'll discuss your vision, requirements, and goals. We'll explore creative directions, logistics, and provide pricing information. This is also an opportunity to ask questions and determine if we're the right fit for your project.",
  },
  {
    id: 2,
    question: "How do I prepare for my photoshoot?",
    answer:
      "After booking, we'll provide detailed preparation guidelines specific to your shoot type. Generally, we recommend selecting outfits in advance, getting proper rest, and arriving with any requested items. For commercial shoots, we'll provide a comprehensive pre-production checklist.",
  },
  {
    id: 3,
    question: "Can I request specific editing styles?",
    answer:
      "Absolutely. During your consultation, we'll discuss your aesthetic preferences and can review examples of editing styles. While we have our signature look, we're happy to accommodate specific requests that align with your vision.",
  },
  {
    id: 4,
    question: "Do you offer rush delivery options?",
    answer:
      "Yes, we offer expedited delivery for an additional fee. Rush options include 72-hour, 48-hour, and 24-hour turnarounds, depending on project scope and our current schedule. Please inquire about availability and pricing.",
  },
]
