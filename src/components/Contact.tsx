"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs uppercase tracking-widest text-[#0d7377] font-medium mb-2">
          Contact
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-2">
          <div>
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
              className="inline-flex items-center gap-3 text-base font-medium text-gray-900 hover:text-[#0d7377] transition-colors mb-2"
            >
              <span className="w-9 h-9 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
              hamza.mumtaz1@gmail.com
            </a>

            <div className="flex gap-2">
              <a
                href="https://linkedin.com/in/m-hamza-mumtaz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-9 h-9 rounded-md border border-gray-200 bg-white text-gray-400 hover:text-[#0d7377] hover:border-[#0d7377]/30 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.behance.net/hamzamumtaz6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="flex items-center justify-center w-9 h-9 rounded-md border border-gray-200 bg-white text-gray-400 hover:text-[#0d7377] hover:border-[#0d7377]/30 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.62.16-1.26.25-1.92.25H0v-14.7h6.938zm-.36 5.49c.56 0 1.04-.13 1.43-.39.39-.26.58-.7.58-1.3 0-.37-.07-.67-.2-.9a1.37 1.37 0 00-.57-.54 2.17 2.17 0 00-.81-.24 4.9 4.9 0 00-.98-.09H3.23v3.46h3.35zm.18 5.77c.37 0 .73-.04 1.08-.13.35-.08.65-.22.91-.4.26-.18.46-.42.61-.72.15-.3.23-.68.23-1.13 0-.88-.22-1.52-.67-1.9-.45-.39-1.04-.58-1.78-.58H3.23v4.86h3.53zM15.09 4.473h6.44v1.56h-6.44V4.473zM16.07 8.27c.78 0 1.43.2 1.95.59.52.39.78.98.78 1.76v5.14h-2.08v-4.48c0-.38-.07-.67-.22-.86-.14-.2-.37-.29-.68-.29-.39 0-.69.14-.9.42-.21.28-.31.67-.31 1.17v4.04h-2.08V8.71c0-.58-.06-1.03-.18-1.34-.12-.31-.31-.52-.58-.64-.27-.12-.61-.18-1.02-.18v-.28h3.34zm5.42.07c.91 0 1.64.26 2.18.77.54.51.81 1.23.81 2.16v.78h-6.09c.04.93.34 1.64.92 2.12.58.48 1.32.72 2.22.72.65 0 1.2-.15 1.66-.44.46-.29.77-.68.94-1.17h2.12c-.27 1.01-.87 1.78-1.81 2.31-.94.53-2.08.79-3.42.79-1.09 0-2.07-.21-2.93-.64-.86-.43-1.56-1.03-2.1-1.8-.54-.77-.81-1.67-.81-2.7 0-1 .28-1.9.84-2.67.56-.78 1.32-1.38 2.28-1.82.96-.44 2.02-.66 3.17-.66zm-1.42 1.69c-.76 0-1.4.21-1.92.64-.52.43-.84 1.04-.95 1.83h5.57c-.06-.8-.33-1.42-.82-1.84-.49-.42-1.1-.63-1.88-.63z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full rounded-xl bg-gray-50 border border-gray-200 p-12 text-center">
                <div className="w-14 h-14 rounded-full bg-[#0d7377]/10 flex items-center justify-center text-[#0d7377] text-2xl mb-4">
                  ✓
                </div>
                <p className="text-xl font-semibold text-gray-900 mb-1">
                  Message Sent!
                </p>
                <p className="text-gray-500 text-sm">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    className="bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#0d7377] focus:ring-1 focus:ring-[#0d7377]/20 transition-all text-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#0d7377] focus:ring-1 focus:ring-[#0d7377]/20 transition-all text-sm"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#0d7377] focus:ring-1 focus:ring-[#0d7377]/20 transition-all text-sm"
                />
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#0d7377] focus:ring-1 focus:ring-[#0d7377]/20 transition-all text-sm resize-none"
                />
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#0d7377] py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0b5e62]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
