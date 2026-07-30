import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="flex items-center justify-center w-8 h-8 rounded-md bg-[#0d7377] text-white text-xs font-bold">
                HM
              </span>
              <span className="text-sm font-medium text-gray-900">
                Hamza M.
              </span>
            </Link>
            <p className="text-gray-400 text-sm mt-3 max-w-xs leading-relaxed">
              Crafting digital experiences at the intersection of design and technology.
              Based in Lahore, Pakistan.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold text-xs mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "/#about" },
                { label: "Work", href: "/#work" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#0d7377] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold text-xs mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://linkedin.com/in/m-hamza-mumtaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-[#0d7377] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/hamzamumtaz6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-[#0d7377] transition-colors"
                >
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="mailto:hamza.mumtaz1@gmail.com"
                  className="text-gray-400 text-sm hover:text-[#0d7377] transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            &copy; {currentYear} Hamza M. All rights reserved.
          </p>
          <Link
            href="/#"
            className="text-gray-400 text-xs hover:text-[#0d7377] transition-colors"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
