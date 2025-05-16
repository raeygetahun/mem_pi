import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/fade-in-section"
import CustomCursor from "@/components/custom-cursor"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black">
      <CustomCursor />

      {/* Header */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-black z-0" />
        <div className="container relative z-10 px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Our Services</h1>
              <p className="text-cream/80 text-lg max-w-2xl mx-auto">
                Exceptional photography services tailored to your unique vision and requirements. Each service is
                customized to deliver imagery that exceeds expectations.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <FadeInSection>
            <Tabs defaultValue="portrait" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-charcoal/50 p-1 mb-12">
                <TabsTrigger value="portrait" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                  Portrait
                </TabsTrigger>
                <TabsTrigger value="commercial" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                  Commercial
                </TabsTrigger>
                <TabsTrigger value="event" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                  Event
                </TabsTrigger>
                <TabsTrigger value="editorial" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                  Editorial
                </TabsTrigger>
              </TabsList>

              {services.map((service) => (
                <TabsContent key={service.id} value={service.value} className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="font-serif text-3xl text-white mb-6">{service.title}</h2>
                      <p className="text-cream/80 mb-8 leading-relaxed">{service.description}</p>

                      <h3 className="text-gold text-lg mb-4">What's Included:</h3>
                      <ul className="grid gap-3 mb-8">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="mr-3 h-5 w-5 text-gold shrink-0 mt-0.5" />
                            <span className="text-cream/80">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        asChild
                        className="bg-gold text-black hover:bg-gold/90 rounded-none px-8 py-6 text-sm tracking-widest"
                      >
                        <Link href="/contact" className="group">
                          INQUIRE ABOUT {service.title.toUpperCase()}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </FadeInSection>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-charcoal">
        <div className="container px-4 md:px-6">
          <FadeInSection>
            <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-16">Our Process</h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <FadeInSection key={step.id} delay={index * 0.2}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold text-black font-serif text-2xl mb-6">
                    {step.id}
                  </div>
                  <h3 className="font-serif text-xl text-white mb-4">{step.title}</h3>
                  <p className="text-cream/70">{step.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Investment</h2>
              <p className="text-cream/80">
                Our pricing is tailored to each project's specific requirements. We believe in transparent pricing and
                delivering exceptional value.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FadeInSection key={plan.id} delay={index * 0.2}>
                <div
                  className={`p-8 h-full flex flex-col ${plan.featured ? "bg-gold/10 border border-gold" : "bg-charcoal/50"}`}
                >
                  <h3 className="font-serif text-2xl text-white mb-2">{plan.title}</h3>
                  <p className="text-cream/70 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-serif text-white">{plan.price}</span>
                    {plan.unit && <span className="text-cream/70 ml-1">{plan.unit}</span>}
                  </div>

                  <ul className="grid gap-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-gold shrink-0 mt-0.5" />
                        <span className="text-cream/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant={plan.featured ? "default" : "outline"}
                    className={
                      plan.featured
                        ? "bg-gold text-black hover:bg-gold/90 rounded-none px-6 py-5 text-sm tracking-widest mt-auto"
                        : "bg-transparent border-gold text-gold hover:bg-gold/10 rounded-none px-6 py-5 text-sm tracking-widest mt-auto"
                    }
                  >
                    <Link href="/contact" className="group">
                      {plan.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-charcoal/50">
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
                  <div className="bg-black/30 p-6">
                    <h3 className="font-serif text-xl text-white mb-3">{faq.question}</h3>
                    <p className="text-cream/70">{faq.answer}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/pattern.jpg" alt="Background pattern" fill className="object-cover" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Ready to Discuss Your Project?</h2>
              <p className="text-cream/80 mb-8">
                Contact us today to schedule a consultation and learn how our photography services can bring your vision
                to life.
              </p>
              <Button
                asChild
                className="bg-gold text-black hover:bg-gold/90 rounded-none px-8 py-6 text-sm tracking-widest"
              >
                <Link href="/contact" className="group">
                  GET IN TOUCH
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
const services = [
  {
    id: 1,
    value: "portrait",
    title: "Portrait Photography",
    description:
      "Our portrait photography captures the essence of individuals, couples, and families with a focus on authentic emotion and artistic composition. Whether for personal branding, family heirlooms, or creative expression, our portraits tell your unique story.",
    image: "/images/service-portrait.jpg",
    features: [
      "Pre-shoot consultation to plan concept and styling",
      "Professional hair and makeup services available",
      "Studio or location shooting options",
      "Multiple outfit changes and setups",
      "Professional retouching and color grading",
      "Digital gallery and print options",
    ],
  },
  {
    id: 2,
    value: "commercial",
    title: "Commercial Photography",
    description:
      "Elevate your brand with sophisticated commercial photography that communicates your brand's premium positioning. From product photography to corporate imagery, we create visuals that drive engagement and conversion.",
    image: "/images/service-commercial.jpg",
    features: [
      "Brand strategy consultation",
      "Art direction and styling",
      "Product photography with precision lighting",
      "Location scouting and permits",
      "Post-production and retouching",
      "Licensing options for various media",
    ],
  },
  {
    id: 3,
    value: "event",
    title: "Event Coverage",
    description:
      "Comprehensive documentation of your luxury events, from intimate gatherings to grand galas. Our unobtrusive approach captures both candid moments and key highlights, creating a complete visual narrative of your special occasion.",
    image: "/images/service-event.jpg",
    features: [
      "Pre-event planning and timeline coordination",
      "Multiple photographer options",
      "Candid and directed photography",
      "Same-day preview images available",
      "Complete editing and delivery",
      "Custom albums and print collections",
    ],
  },
  {
    id: 4,
    value: "editorial",
    title: "Editorial Photography",
    description:
      "Tell compelling visual stories with our editorial photography services. Working with leading publications and brands, we create narrative-driven imagery that captivates audiences and communicates complex ideas with visual eloquence.",
    image: "/images/service-editorial.jpg",
    features: [
      "Concept development and storyboarding",
      "Location and talent casting",
      "Full production management",
      "Creative direction and styling",
      "Magazine-quality retouching",
      "Publication-ready deliverables",
    ],
  },
]

const process = [
  {
    id: 1,
    title: "Consultation",
    description:
      "We begin with an in-depth discussion of your vision, goals, and requirements to create a tailored approach.",
  },
  {
    id: 2,
    title: "Planning",
    description: "Our team develops a detailed creative brief, timeline, and production plan for your approval.",
  },
  {
    id: 3,
    title: "Production",
    description: "On shooting day, our experienced team executes the vision with precision and artistic excellence.",
  },
  {
    id: 4,
    title: "Delivery",
    description:
      "Your images undergo careful editing and are delivered in your preferred format with licensing appropriate to your needs.",
  },
]

const pricingPlans = [
  {
    id: 1,
    title: "Essential",
    description: "Perfect for individuals and small projects",
    price: "$1,500",
    unit: "starting at",
    features: [
      "4-hour photography session",
      "One photographer",
      "25 professionally edited images",
      "Digital delivery",
      "Personal use licensing",
    ],
    buttonText: "BOOK ESSENTIAL",
    featured: false,
  },
  {
    id: 2,
    title: "Premium",
    description: "Ideal for brands and comprehensive projects",
    price: "$3,500",
    unit: "starting at",
    features: [
      "8-hour photography session",
      "Lead photographer + assistant",
      "50 professionally edited images",
      "Digital delivery + prints",
      "Commercial licensing",
      "Priority scheduling",
    ],
    buttonText: "BOOK PREMIUM",
    featured: true,
  },
  {
    id: 3,
    title: "Bespoke",
    description: "Custom solutions for complex requirements",
    price: "Custom",
    unit: "",
    features: [
      "Multi-day shooting options",
      "Full creative team",
      "Unlimited edited images",
      "Comprehensive deliverables",
      "Extended licensing options",
      "Dedicated project manager",
    ],
    buttonText: "REQUEST QUOTE",
    featured: false,
  },
]

const faqs = [
  {
    id: 1,
    question: "How far in advance should I book your services?",
    answer:
      "For portrait sessions, we recommend booking 2-4 weeks in advance. For commercial projects, 4-8 weeks is ideal, and for events, 2-6 months depending on scale. Rush bookings may be accommodated based on availability.",
  },
  {
    id: 2,
    question: "What is your payment structure?",
    answer:
      "We require a 50% non-refundable retainer to secure your date, with the remaining balance due prior to the final image delivery. For larger projects, we can arrange a custom payment schedule.",
  },
  {
    id: 3,
    question: "Do you travel for shoots?",
    answer:
      "Yes, we regularly travel domestically and internationally for projects. Travel fees are determined based on location and duration. We're happy to provide a custom quote for your specific needs.",
  },
  {
    id: 4,
    question: "How long until I receive my images?",
    answer:
      "Portrait sessions are typically delivered within 2 weeks. Commercial and editorial projects are delivered within 2-4 weeks, depending on complexity. Rush delivery is available for an additional fee.",
  },
  {
    id: 5,
    question: "What about licensing and usage rights?",
    answer:
      "Each project includes specific licensing terms based on your needs. Personal use is included with portrait sessions, while commercial projects include limited-term usage. Extended and exclusive licensing options are available.",
  },
]
