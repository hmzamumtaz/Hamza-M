import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              Hamza M<span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">.</span>
            </Link>
            <p className="text-gray-500 text-sm mt-4 max-w-xs leading-relaxed">
              Crafting digital experiences at the intersection of design and technology.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#" className="text-gray-500 text-sm hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-500 text-sm hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#work" className="text-gray-500 text-sm hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-500 text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://linkedin.com/in/m-hamza-mumtaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 text-sm hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/hamzamumtaz6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 text-sm hover:text-white transition-colors"
                >
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="mailto:hamza.mumtaz1@gmail.com"
                  className="text-gray-500 text-sm hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Hamza M. All rights reserved.
          </p>
          <Link href="/#" className="text-gray-500 text-sm hover:text-white transition-colors">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
