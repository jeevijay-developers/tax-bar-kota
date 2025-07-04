"use client";

import { useEffect, useState } from "react";
import MobileMenu from "../components/MobileMenu";
import Image from "next/image";
import Link from "next/link";
import "@/public/css/header1.css";
import { useRouter } from "next/navigation";

const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/clubGallary" },
  { label: "Contact", href: "/contact" },
];

export default function Header1() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [addClass, setAddClass] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  // Add a class to the element when scrolled 50px
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setAddClass(true);
    } else {
      setAddClass(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Set active menu item based on current path
  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveItem(window.location.pathname);
    }
  }, []);

  return (
    <>
      <header
        className={`modern-header ${addClass ? "scrolled" : ""}`}
      >
        <div className="header-container">
          {/* Logo Section */}
          <div className="logo-section">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="mobile-menu-btn"
              aria-label="Open menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
            <Link href="/" className="logo-link">
              <Image
                width={80}
                height={50}
                src="/logo/logo.png"
                alt="logo icon"
                priority
                className="logo-image"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {MENU_ITEMS.map((item) => (
                <li key={item.href} className="nav-item">
                  <Link
                    href={item.href}
                    className={`nav-link ${activeItem === item.href ? "active" : ""
                      }`}
                    onClick={() => setActiveItem(item.href)}
                  >
                    {item.label}
                    <span className="nav-link-underline"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
            {/* Profile Section */}
            <div className="profile-section">
              <button
                onClick={() => router.push("/login")}
                className="profile-btn"
                aria-label="Profile"
              >
                <i className="icon-person"></i>
              </button>
            </div>
        </div>
      </header>

      <MobileMenu
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
    </>
  );
}