import Link from "next/link"
import { Linkedin, Twitter, Instagram, Github } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Nexus</h3>
            <p className="text-primary-foreground/70">Global digital agency creating transformative experiences.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  Brand Strategy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  Digital Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Github size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-primary-foreground/60 text-sm">
          <p>&copy; {currentYear} Nexus. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
