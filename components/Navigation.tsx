"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Karriere", href: "/karriere" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      setIsOpen(false);
    }
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(26,26,26,0.97)" : "#1a1a1a",
        borderBottom: "1px solid #2a2a2a",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/hornschuh-logo-80.png"
              alt="Hornschuh Metalltechnik GmbH"
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
                  style={{
                    color: isActive ? "#255aa0" : "#cccccc",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLElement).style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLElement).style.color = "#cccccc";
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                      style={{ backgroundColor: "#255aa0" }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="/kontakt"
              className="ml-4 px-5 py-2 text-sm font-semibold rounded text-white transition-colors duration-200"
              style={{ backgroundColor: "#255aa0" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor =
                  "#1e4a85")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor =
                  "#255aa0")
              }
            >
              Jetzt anfragen
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü öffnen"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className="block h-0.5 bg-white transition-all duration-300"
                style={{
                  transform: isOpen
                    ? "translateY(8px) rotate(45deg)"
                    : "none",
                }}
              />
              <span
                className="block h-0.5 bg-white transition-all duration-300"
                style={{ opacity: isOpen ? 0 : 1 }}
              />
              <span
                className="block h-0.5 bg-white transition-all duration-300"
                style={{
                  transform: isOpen
                    ? "translateY(-8px) rotate(-45deg)"
                    : "none",
                }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden"
            style={{ backgroundColor: "#111111", borderTop: "1px solid #2a2a2a" }}
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 rounded text-sm font-medium transition-colors duration-200"
                    style={{
                      color: isActive ? "#255aa0" : "#cccccc",
                      backgroundColor: isActive
                        ? "rgba(37,90,160,0.1)"
                        : "transparent",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/kontakt"
                className="mt-2 px-4 py-3 rounded text-sm font-semibold text-white text-center"
                style={{ backgroundColor: "#255aa0" }}
              >
                Jetzt anfragen
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
