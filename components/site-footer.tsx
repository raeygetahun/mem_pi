import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl text-white tracking-wider">MemoryPicture</span>
            </Link>
            <p className="text-cream/70 text-sm max-w-xs">
              Premium photography services for discerning clients. Crafting visual narratives that inspire
              and endure.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4 tracking-wider">EXPLORE</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/70 text-sm hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4 tracking-wider">SERVICES</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/70 text-sm hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4 tracking-wider">CONNECT</h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/70 text-sm hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h3 className="text-white font-medium mb-4 tracking-wider">FOLLOW US</h3>
              <div className="flex gap-4">
                <Link href="https://instagram.com" className="text-cream/70 hover:text-gold transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
                <Link href="https://twitter.com" className="text-cream/70 hover:text-gold transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
                <Link href="https://linkedin.com" className="text-cream/70 hover:text-gold transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
                <Link href="https://pinterest.com" className="text-cream/70 hover:text-gold transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-cream text-base">
            &copy; {new Date().getFullYear()} MemoryPicture. All rights reserved.
          </p>
          <p className="text-cream/80 text-lg mt-2">
            Built by{" "}
            <a
              href="https://algonixtechnologies.com/"
              target="_blank"
              className="text-gold font-bold hover:text-white transition-colors"
            >
              Algonix Technologies
            </a>
          </p>
        </div>


        {/* <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream/50 text-xs">
            &copy; {new Date().getFullYear()} MemoryPictures. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-cream/50 text-xs hover:text-cream transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-cream/50 text-xs hover:text-cream transition-colors">
              Terms of Service
            </Link>
          </div>
        </div> */}
      </div>
    </footer>
  )
}

const footerLinks = {
  explore: [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Portrait Photography", href: "/services#portrait-photography" },
    { label: "Commercial Photography", href: "/services#commercial-photography" },
    { label: "Editorial Photography", href: "/services#editorial-photography" },
    { label: "Event Coverage", href: "/services#event-coverage" },
    { label: "Fine Art Prints", href: "/services#fine-art-prints" },
  ],
  connect: [
    { label: "Book a Session", href: "/contact" },
    { label: "Studio Location", href: "/contact#location" },
    { label: "Careers", href: "/careers" },
    { label: "FAQ", href: "/contact#faq" },
  ],
}
