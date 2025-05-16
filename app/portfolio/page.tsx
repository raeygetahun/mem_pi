import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/fade-in-section"
import CustomCursor from "@/components/custom-cursor"
import GalleryGrid from "@/components/gallery-grid"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black">
      <CustomCursor />

      {/* Header */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-black z-0" />
        <div className="container relative z-10 px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Our Portfolio</h1>
              <p className="text-cream/80 text-lg max-w-2xl mx-auto">
                Explore our diverse collections of luxury photography, each telling a unique story through our
                distinctive visual language.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Collections */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-24">
            {collections.map((collection, index) => (
              <FadeInSection key={collection.id} delay={0.2}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <h2 className="font-serif text-3xl text-white mb-4">{collection.title}</h2>
                    <p className="text-cream/80 mb-6 leading-relaxed">{collection.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-transparent border-gold text-gold hover:bg-gold/10 rounded-none px-6 py-5 text-sm tracking-widest"
                    >
                      <Link href={`/portfolio/${collection.slug}`} className="group">
                        VIEW COLLECTION
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={collection.coverImage || "/placeholder.svg"}
                      alt={collection.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-24 bg-charcoal">
        <div className="container px-4 md:px-6">
          <FadeInSection>
            <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-16">Featured Works</h2>
          </FadeInSection>

          <GalleryGrid images={featuredImages} />
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 bg-black">
        <div className="container px-4 md:px-6">
          <FadeInSection>
            <h2 className="font-serif text-2xl text-white text-center mb-16">Trusted By</h2>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="flex items-center justify-center">
                  <Image
                    src={logo.image || "/placeholder.svg"}
                    alt={logo.name}
                    width={120}
                    height={60}
                    className="opacity-60 hover:opacity-100 transition-opacity duration-300 max-h-12 w-auto"
                  />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-b from-black to-charcoal">
        <div className="container px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Let's Create Together</h2>
              <p className="text-cream/80 mb-8">
                Have a project in mind? We'd love to discuss how our photography services can bring your vision to life.
              </p>
              <Button
                asChild
                className="bg-gold text-black hover:bg-gold/90 rounded-none px-8 py-6 text-sm tracking-widest"
              >
                <Link href="/contact" className="group">
                  START A PROJECT
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
const collections = [
  {
    id: 1,
    title: "Ethereal Portraits",
    description:
      "Our portrait collection explores the depth of human emotion and character through carefully crafted lighting and composition. Each portrait tells a story, capturing not just appearances but the essence of the individual. We use a combination of natural and studio lighting to create images that feel both timeless and contemporary.",
    coverImage: "/images/portrait.jpg",
    slug: "ethereal-portraits",
  },
  {
    id: 2,
    title: "Architectural Elegance",
    description:
      "Architecture is frozen music, and our architectural photography aims to capture the rhythm and harmony of designed spaces. From historic landmarks to contemporary masterpieces, we document the interplay of light, form, and function that makes exceptional architecture so powerful. Our approach emphasizes both the grand vision and the intimate details.",
    coverImage: "/images/architecture.jpg",
    slug: "architectural-elegance",
  },
  {
    id: 3,
    title: "Fashion Forward",
    description:
      "Our fashion photography pushes boundaries while honoring the craftsmanship of designers. Working with leading brands and publications, we create editorial and campaign imagery that elevates fashion to art. Our distinctive visual approach combines dramatic lighting with dynamic composition to create images that command attention.",
    coverImage: "/images/fashion.jpg",
    slug: "fashion-forward",
  },
  {
    id: 4,
    title: "Luxury Products",
    description:
      "Exceptional products deserve exceptional photography. Our product photography uses precision lighting and meticulous attention to detail to showcase luxury items at their finest. Whether for advertising campaigns or e-commerce, we create images that highlight craftsmanship and inspire desire.",
    coverImage: "/images/product.jpg",
    slug: "luxury-products",
  },
]

const featuredImages = [
  { id: 1, src: "/images/gallery1.jpg", alt: "Gallery image 1", width: 1, height: 1 },
  { id: 2, src: "/images/gallery2.jpg", alt: "Gallery image 2", width: 1, height: 2 },
  { id: 3, src: "/images/gallery3.jpg", alt: "Gallery image 3", width: 1, height: 1 },
  { id: 4, src: "/images/gallery4.jpg", alt: "Gallery image 4", width: 2, height: 1 },
  { id: 5, src: "/images/gallery5.jpg", alt: "Gallery image 5", width: 1, height: 1 },
  { id: 6, src: "/images/gallery6.jpg", alt: "Gallery image 6", width: 1, height: 1 },
]

const clientLogos = [
  { name: "Vogue", image: "/images/logo1.png" },
  { name: "Elle", image: "/images/logo2.png" },
  { name: "GQ", image: "/images/logo3.png" },
  { name: "Architectural Digest", image: "/images/logo4.png" },
  { name: "Chanel", image: "/images/logo5.png" },
  { name: "Dior", image: "/images/logo6.png" },
]
