"use client";

import { useEffect, useState } from "react";
import MobileMenu from "../components/MobileMenu";
import Image from "next/image";
import Link from "next/link";
import "@/public/css/header1.css";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { LogOut } from "lucide-react";

const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/eventGallery" },
  { label: "Gallery", href: "/clubGallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header1() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [addClass, setAddClass] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [user, setUser] = useState();
  const [toggle, setToggle] = useState(true);
  // Add a class to the element when scrolled 50px
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setAddClass(true);
    } else {
      setAddClass(false);
    }
  };

  // Set active menu item based on current path
  useEffect(() => {
    setUser(localStorage.getItem("tba-token"));
    if (typeof window !== "undefined") {
      setActiveItem(window.location.pathname);
    }
  }, [toggle]);
  const checkToken = () => {
    // const user = localStorage.getItem("tba-token");
    if (user) {
      router.push("profile-update");
    } else {
      router.push("/auth/login");
    }
  };
  const handleLogout = () => {
    // const user = localStorage.getItem("tba-token");
    if (user) {
      localStorage.removeItem("tba-token");
      setToggle(prev => !prev)
      router.push("/auth/login");
      toast.success("logout successfully");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`modern-header ${addClass ? "scrolled" : ""}`}>
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
                width={100}
                height={100}
                src="/logo/logo.png"
                alt="logo icon"
                priority
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
                    className={`nav-link ${
                      activeItem === item.href ? "active" : ""
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
          <div className="d-flex gap-3 profileWrapper">
            <div className="profile-section">
              <button
                // onClick={() => router.push("/profile-update")}
                onClick={() => checkToken()}
                className="profile-btn"
                aria-label="Profile"
              >
                <i className="icon-person"></i>
              </button>
            </div>

            {user && (
              <button
                onClick={() => handleLogout()}
                className="profile-btn"
                aria-label="Logout"
              >
                <LogOut size={20} />
              </button>
            )}
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
