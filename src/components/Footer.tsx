import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121218] border-t border-[#22222c] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#d4a853]/10 border border-[#d4a853]/20 text-[#d4a853] text-sm font-bold">
                HM
              </span>
              <span className="text-sm font-medium text-[#f2f0ed]">
                Hamza M.
              </span>
            </Link>
            <p className="text-[#5b5b66] text-sm mt-4 max-w-xs leading-relaxed">
              Crafting digital experiences at the intersection of design and technology.
              Based in Lahore, Pakistan.
            </p>
          </div>

          <div>
            <h4 className="text-[#f2f0ed] font-semibold text-xs mb-5 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/#about" },
                { label: "Work", href: "/#work" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#5b5b66] text-sm hover:text-[#d4a853] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#f2f0ed] font-semibold text-xs mb-5 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://linkedin.com/in/m-hamza-mumtaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5b5b66] text-sm hover:text-[#d4a853] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/hamzamumtaz6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5b5b66] text-sm hover:text-[#d4a853] transition-colors"
                >
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="mailto:hamza.mumtaz1@gmail.com"
                  className="text-[#5b5b66] text-sm hover:text-[#d4a853] transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#22222c] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#5b5b66] text-xs">
            &copy; {currentYear} Hamza M. All rights reserved.
          </p>
          <Link
            href="/#"
            className="text-[#5b5b66] text-xs hover:text-[#d4a853] transition-colors"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
