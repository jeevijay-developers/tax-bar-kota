"use client";

import { menuData } from "@/data/mobileMenu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
const socialMediaLinks = [
  { id: 1, class: "icon-facebook", href: "#" },
  { id: 2, class: "icon-twitter", href: "#" },
  { id: 3, class: "icon-instagram", href: "#" },
  { id: 4, class: "icon-linkedin", href: "#" },
];
export default function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }) {
  const [activeSub, setActiveSub] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const checkToken = () => {
    const user = localStorage.getItem("tba-token");
    if (user) {
      console.log("user", user);
      router.push("profile-update");
    } else {
      router.push("/auth/login");
    }
  };
  const handleLogout = () => {
    const user = localStorage.getItem("tba-token");
    if (user) {
      localStorage.removeItem("tba-token");
      router.push("/");
      toast.success("logout successfully");
    }
  };

  const menuItems = [
    {
      title: "Profile",
      location: "/profile-update",
      onClick: checkToken,
    },
    {
      title: "Home",
      location: "/",
    },
    {
      title: "About Us",
      location: "/about",
    },
    {
      title: "Gallery",
      location: "/clubGallery",
    },
    {
      title: "Event",
      location: "/eventGallery",
    },
    {
      title: "Contact Us",
      location: "/contact",
    },
    {
      title: "Logout",
      location: "/auth/logout",
      onClick: handleLogout,
    },
  ];

  return (
    <div
      data-aos="fade"
      data-aos-delay=""
      className={`menu js-menu ${mobileMenuOpen ? "-is-active" : ""} `}
      style={
        mobileMenuOpen
          ? { opacity: "1", visibility: "visible" }
          : { pointerEvents: "none", visibility: "hidden" }
      }
    >
      <div
        onClick={() => setMobileMenuOpen(false)}
        className="menu__overlay js-menu-button"
      ></div>

      <div className="menu__container">
        <div className="menu__header">
          <h4>Main Menu</h4>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="js-menu-button"
          >
            <i className="icon-cross text-10"></i>
          </button>
        </div>

        <div className="menu__content">
          <ul className="menuNav js-navList -is-active">
            {menuItems.map((elm, i) => {
              const isActive =
                elm.location &&
                (elm.location === "/"
                  ? pathname === "/"
                  : pathname.split("/")[1] === elm.location.split("/")[1]);
              if (elm.title === "Logout") {
                return (
                  <li key={i} className="menuNav__item -has-submenu js-has-submenu">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        e.preventDefault();
                        elm.onClick && elm.onClick();
                      }}
                    >
                      <span>{elm.title}</span>
                    </a>
                  </li>
                );
              }
              if (elm.onClick) {
                return (
                  <li key={i} className="menuNav__item -has-submenu js-has-submenu">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        e.preventDefault();
                        elm.onClick();
                      }}
                    >
                      <span>{elm.title}</span>
                    </a>
                  </li>
                );
              }
              return (
                <li key={i} className="menuNav__item -has-submenu js-has-submenu">
                  <Link
                    href={elm.location}
                    className={isActive ? "activeMenu" : ""}
                    style={{ cursor: isActive ? "default" : "pointer" }}
                    onClick={isActive ? (e) => e.preventDefault() : undefined}
                  >
                    <span>{elm.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* <div className="menu__footer">
          <i className="icon-headphone text-50"></i>

          <div className="text-20 lh-12 fw-500 mt-20">
            <div>Speak to our expert at</div>
            <div className="text-accent-1">1-800-453-6744</div>
          </div>

          <div className="d-flex items-center x-gap-10 pt-30">
            {socialMediaLinks.map((elm, i) => (
              <div key={i}>
                <a href={elm.href} className="d-block">
                  <i className={elm.class}></i>
                </a>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
