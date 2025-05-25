"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/animated-text";
import ParallaxImage from "@/components/parallax-image";
import CustomCursor from "@/components/custom-cursor";
import FadeInSection from "@/components/fade-in-section";
import { Typewriter } from "react-simple-typewriter";
import etherealPortraits from "../public/ethereal-portraits.jpg";
import fashionForward from "../public/fashion-forward.jpg";
import architecturalElegance from "../public/architectural-elegance.jpg";
import studio from "../public/studio.jpg";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParallaxImage src="/lake-wide.jpg" alt="Luxury photography" priority />
        <div className="absolute inset-0 bg-black/30 z-10  bg-black/40 backdrop-blur-sm p-6 rounded-md" />
        <div className="container relative z-20 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-4 tracking-wider block">
                <Typewriter
                  words={["Not Just Photos Time, sculpted."]}
                  loop={1}
                  cursor={false}
                  cursorStyle="_"
                  typeSpeed={60}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>
            {/* <AnimatedText
              text="MEMORY PHOTOGRAPHY STUDIO"
              className="text-lg md:text-xl text-cream font-light tracking-[0.3em] mb-8"
              delay={0.5}
            /> */}
            {/* <Button
              asChild
              variant="outline"
              className="mt-8 bg-transparent border-cream text-cream hover:bg-cream/10 rounded-none px-8 py-6 text-sm tracking-widest"
            >
              <Link href="/portfolio" className="group">
                VIEW OUR WORK
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button> */}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-charcoal">
        <div className="container px-4 md:px-6">
          <FadeInSection>
            <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-16">
              Featured Collections
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCollections.map((collection, index) => (
              <FadeInSection key={collection.id} delay={index * 0.2}>
                <div
                  // href='/#'
                  className="group block relative overflow-hidden"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="font-serif text-xl mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-sm text-cream/80">
                      {collection.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-gold text-gold hover:bg-gold/10 rounded-none px-8 py-6 text-sm tracking-widest"
            >
              <Link href="/portfolio" className="group">
                EXPLORE ALL COLLECTIONS
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Studio Teaser */}
      <section className="py-24 bg-cream/5">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="relative aspect-square">
                <Image
                  src={studio}
                  alt="Our luxury studio space"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="max-w-xl">
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                  The Art of Capturing Moments
                </h2>
                <p className="text-cream/80 mb-6 leading-relaxed">
                  At Memory Pictures, we believe in the transformative power of
                  photography. Our studio is a sanctuary where artistry meets
                  technical excellence, creating timeless images that tell your
                  unique story.
                </p>
                {/* <p className="text-cream/80 mb-8 leading-relaxed">
                  Founded by award-winning photographers with over two decades of experience, our approach combines
                  classical techniques with contemporary vision.
                </p> */}
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-gold text-gold hover:bg-gold/10 rounded-none px-8 py-6 text-sm tracking-widest"
                >
                  <Link href="/about" className="group">
                    DISCOVER OUR STORY
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-black">
        <div className="container px-4 md:px-6">
          <FadeInSection>
            <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-16">
              Our Services
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={service.id} delay={index * 0.2}>
                <div className="bg-charcoal p-8 h-full flex flex-col group hover:bg-charcoal/80 transition-colors duration-300">
                  <service.icon className="h-10 w-10 text-gold mb-6" />
                  <h3 className="font-serif text-xl text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-cream/70 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-gold text-sm tracking-wider group-hover:text-cream transition-colors duration-300 flex items-center"
                  >
                    LEARN MORE
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-charcoal/50">
        <div className="container px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gold text-5xl font-serif mb-8">"</p>
              <p className="text-white text-xl md:text-2xl font-serif italic mb-8">
                Working with Memory Pictures was an extraordinary experience.
                Their attention to detail and ability to capture the essence of
                our brand elevated our entire campaign to new heights.
              </p>
              <p className="text-cream/80 text-sm tracking-wider">
                DANIEL, RAM TRUCKING GROUP LLC
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* <Image
            src="/images/pattern.jpg"
            alt="Background pattern"
            fill
            className="object-cover"
          /> */}
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                Ready to Create Something Extraordinary?
              </h2>
              <p className="text-cream/80 mb-8">
                Let's collaborate to bring your vision to life. Our team is
                ready to discuss your project and create a tailored experience.
              </p>
              <Button
                asChild
                className="bg-gold text-black hover:bg-gold/90 rounded-none px-8 py-6 text-sm tracking-widest"
              >
                <Link href="/contact" className="group">
                  BOOK A CONSULTATION
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}

// Sample data
const featuredCollections = [
  {
    id: 1,
    title: "Ethereal Portraits",
    description: "Fine art portrait photography with ethereal lighting",
    image: etherealPortraits,
    slug: "ethereal-portraits",
  },
  {
    id: 2,
    title: "Architectural Elegance",
    description: "Capturing the soul of architectural masterpieces",
    image: fashionForward,
    slug: "architectural-elegance",
  },
  {
    id: 3,
    title: "Fashion Forward",
    description: "Editorial fashion photography",
    image: architecturalElegance,
    slug: "fashion-forward",
  },
];

const services = [
  {
    id: 1,
    title: "Portrait Photography",
    description:
      "Timeless portraits that capture the essence of your personality and style, perfect for personal branding or family heirlooms.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    slug: "portrait-photography",
  },
  {
    id: 2,
    title: "Commercial Photography",
    description:
      "Elevate your brand with commercial photography that communicates your brand's premium positioning.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
    ),
    slug: "commercial-photography",
  },
  {
    id: 3,
    title: "Event Coverage",
    description:
      "Comprehensive documentation of your events, from intimate gatherings to grand galas, with unobtrusive professionalism.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
    slug: "event-coverage",
  },
];
