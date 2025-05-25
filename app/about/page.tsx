import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"
import FadeInSection from "@/components/fade-in-section"
import CustomCursor from "@/components/custom-cursor"
import ParallaxImage from "@/components/parallax-image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <CustomCursor />

      {/* Header */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <ParallaxImage src="/images/studio-wide.jpg" alt="Our studio space" priority />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="container relative z-20 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText text="OUR STORY" className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-wider" />
            <AnimatedText
              text="CRAFTING VISUAL NARRATIVES"
              className="text-lg md:text-xl text-cream font-light tracking-[0.2em]"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Studio Philosophy */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="max-w-xl">
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">Our Philosophy</h2>
                <p className="text-cream/80 mb-6 leading-relaxed">
                  At MemoryPictures, we believe that photography is more than documentation—it's an art form that reveals truth
                  through careful interpretation. Our approach balances technical precision with artistic vision,
                  creating images that resonate on both intellectual and emotional levels.
                </p>
                <p className="text-cream/80 mb-6 leading-relaxed">
                  Founded by Sandra, our studio has evolved into
                  a collective of visual storytellers united by a commitment to excellence and innovation. We've built
                  our reputation on the belief that truly exceptional photography requires both mastery of craft and a
                  distinctive point of view.
                </p>
                <p className="text-cream/80 leading-relaxed">
                  Every project we undertake is approached with meticulous attention to detail and a collaborative
                  spirit. We view our clients as partners in the creative process, working closely together to translate
                  concepts into compelling visual narratives.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="relative aspect-[4/5]">
                <Image src="/images/about-philosophy.jpg" alt="Studio philosophy" fill className="object-cover" />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Studio Space */}
      <section className="py-24 bg-charcoal">
        <div className="container px-4 md:px-6">
          <FadeInSection>
            <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-16">Our Studio Space</h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studioSpaces.map((space, index) => (
              <FadeInSection key={space.id} delay={index * 0.2}>
                <div className="group">
                  <div className="relative aspect-square overflow-hidden mb-4">
                    <Image
                      src={space.image || "/placeholder.svg"}
                      alt={space.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-white mb-2">{space.title}</h3>
                  <p className="text-cream/70">{space.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.6}>
            <div className="mt-16 text-center">
              <p className="text-cream/80 max-w-2xl mx-auto mb-8">
                Our 5,000 square foot studio in the heart of the city features state-of-the-art equipment, versatile
                shooting spaces, and comfortable client areas designed to inspire creativity and collaboration.
              </p>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-gold text-gold hover:bg-gold/10 rounded-none px-8 py-6 text-sm tracking-widest"
              >
                <Link href="/contact" className="group">
                  SCHEDULE A STUDIO TOUR
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-24">
        <div className="container px-4 md:px-6">
          <FadeInSection>
            <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-16">Meet Our Team</h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {teamMembers.map((member, index) => (
              <FadeInSection key={member.id} delay={index * 0.2}>
                <div>
                  <div className="relative aspect-[3/4] overflow-hidden mb-6 group">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-white mb-1">{member.name}</h3>
                  <p className="text-gold text-sm mb-3">{member.role}</p>
                  <p className="text-cream/70">{member.bio}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Awards & Recognition */}
      <section className="py-24 bg-charcoal/50">
        <div className="container px-4 md:px-6">
          <FadeInSection>
            <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-16">Awards & Recognition</h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <FadeInSection key={award.id} delay={index * 0.2}>
                <div className="bg-black/30 p-8 h-full">
                  <p className="text-gold text-sm mb-4">{award.year}</p>
                  <h3 className="font-serif text-xl text-white mb-3">{award.title}</h3>
                  <p className="text-cream/70">{award.description}</p>
                </div>
              </FadeInSection>
            ))}
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
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Work With Us</h2>
              <p className="text-cream/80 mb-8">
                Whether you're looking to commission a project or join our team, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-gold text-black hover:bg-gold/90 rounded-none px-8 py-6 text-sm tracking-widest"
                >
                  <Link href="/contact" className="group">
                    CONTACT US
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-cream text-cream hover:bg-cream/10 rounded-none px-8 py-6 text-sm tracking-widest"
                >
                  <Link href="/careers" className="group">
                    CAREERS
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  )
}

// Sample data
const studioSpaces = [
  {
    id: 1,
    title: "Main Studio",
    description: "A 2,000 sq ft space with 20-foot ceilings and north-facing windows for perfect natural light.",
    image: "/images/studio1.jpg",
  },
  {
    id: 2,
    title: "Black Box",
    description: "A fully controllable lighting environment for precise studio work and dramatic portraits.",
    image: "/images/studio2.jpg",
  },
  {
    id: 3,
    title: "Client Lounge",
    description: "A comfortable space for meetings, presentations, and relaxation during shoots.",
    image: "/images/studio3.jpg",
  },
]

const teamMembers = [
  {
    id: 1,
    name: "Alexandra Dumont",
    role: "Founder & Creative Director",
    bio: "With over 20 years of experience in fashion and portrait photography, Alexandra's work has been featured in Vogue, Harper's Bazaar, and numerous international exhibitions.",
    image: "/images/team1.jpg",
  },
  {
    id: 2,
    name: "James Chen",
    role: "Founder & Technical Director",
    bio: "A master of lighting and composition, James specializes in architectural and product photography, bringing precision and artistry to every project.",
    image: "/images/team2.jpg",
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "Senior Photographer",
    bio: "Sophia's documentary approach to fashion and lifestyle photography has earned her acclaim for capturing authentic moments with editorial polish.",
    image: "/images/team3.jpg",
  },
  {
    id: 4,
    name: "Marcus Williams",
    role: "Art Director",
    bio: "With a background in fine art and design, Marcus brings conceptual depth and visual coherence to our most ambitious projects.",
    image: "/images/team4.jpg",
  },
  {
    id: 5,
    name: "Olivia Kim",
    role: "Digital Artist & Retoucher",
    bio: "Olivia's meticulous post-production work enhances our photography while maintaining authenticity and natural beauty.",
    image: "/images/team5.jpg",
  },
  {
    id: 6,
    name: "David Okafor",
    role: "Production Manager",
    bio: "David's exceptional organizational skills and industry connections ensure that every shoot runs smoothly from concept to completion.",
    image: "/images/team6.jpg",
  },
]

const awards = [
  {
    id: 1,
    year: "2023",
    title: "International Photography Awards",
    description: "Gold in Fine Art Photography and Silver in Commercial Photography",
  },
  {
    id: 2,
    year: "2022",
    title: "Communication Arts Photography Annual",
    description: "Selected for inclusion in the prestigious annual publication",
  },
  {
    id: 3,
    year: "2021",
    title: "Lürzer's Archive",
    description: "Featured in '200 Best Ad Photographers Worldwide'",
  },
  {
    id: 4,
    year: "2020",
    title: "PDN Photo Annual",
    description: "Winner in Advertising Photography category",
  },
  {
    id: 5,
    year: "2019",
    title: "Cannes Lions",
    description: "Silver Lion for contribution to award-winning advertising campaign",
  },
  {
    id: 6,
    year: "2018",
    title: "American Photography",
    description: "Selected for AP34 annual book showcasing the year's best photography",
  },
]
