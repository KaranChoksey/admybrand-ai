import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Description */}
        <div>
          <h3 className="text-2xl font-bold mb-3">ADmyBRAND AI Suite</h3>
          <p className="text-gray-400 text-sm mb-4">
            AI-powered marketing automation & analytics to grow your business.
          </p>
          <div className="flex gap-4">
            <Link href="https://twitter.com" aria-label="Twitter">
              <Image
                src="/icons/twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
                className="invert hover:opacity-70 transition"
              />
            </Link>
            
            <Link href="https://facebook.com" aria-label="Facebook">
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
                className="invert hover:opacity-70 transition"
              />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="#features" className="hover:text-white transition">
                Features
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:text-white transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="hover:text-white transition">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-gray-400 text-sm mb-2">
            Email: support@admybrand.com
          </p>
          <p className="text-gray-400 text-sm">Phone: +1 (234) 567-890</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} ADmyBRAND AI Suite. All rights reserved.
      </div>
    </footer>
  );
}
