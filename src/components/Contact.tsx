export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="text-xs uppercase tracking-widest text-[#0d7377] font-medium mb-3">
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900 mb-5">
            Let&apos;s create something{" "}
            <span className="text-[#0d7377]">remarkable</span> together
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
            Have a project in mind or just want to say hello? I&apos;d love to
            hear from you.
          </p>
          <a
            href="mailto:hamza.mumtaz1@gmail.com"
            className="inline-flex items-center gap-3 rounded-md bg-[#0d7377] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0b5e62]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            hamza.mumtaz1@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
