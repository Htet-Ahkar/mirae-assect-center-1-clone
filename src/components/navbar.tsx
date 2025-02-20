"use client";

import Image from "next/image";
import Logo from "../../public/logo.svg";
import DarkLogo from "../../public/logo dark.svg";
import globe from "../../public/globe-icon.svg";
import menu from "../../public/menu.svg";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      let current = 0;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3 + 300) {
          const sectionId = section.getAttribute("id") || "0";
          current = Number(sectionId);
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navlinks = [
    {
      title: "센터원",
      link: "/",
    },
    {
      title: "이용안내",
      link: "/",
    },
    {
      title: "서비스소개",
      link: "/",
    },
    {
      title: "임대문의",
      link: "/",
    },
    {
      title: "고객지원",
      link: "/",
    },
  ];
  return (
    <>
      <nav
        className={`navbar fixed z-50 w-full bg-blue-900 bg-opacity-0 bg-clip-padding p-0 px-[3%] backdrop-blur-lg backdrop-filter transition-all duration-300 md:h-20 md:px-[9%] ${activeSection === 5 ? "text-black" : "text-white"}`}
      >
        {/* LOGO */}
        <div className="navbar-start">
          <a href="/">
            <i>
              <Image
                src={activeSection === 5 ? DarkLogo : Logo}
                quality={100}
                height={24}
                alt="logo"
              />
            </i>
          </a>
        </div>

        {/* Navigation link */}
        <div className="navbar-center hidden md:block">
          <ul className="flex flex-row gap-7">
            {navlinks.map((navLink) => (
              <li key={navLink.title}>
                <a
                  className="text-2xl font-extrabold"
                  key={navLink.title}
                  href={navLink.link}
                >
                  {navLink.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Language Icon */}
        <div className="navbar-end">
          <i className="hidden md:block">
            <Image src={globe} quality={100} height={24} alt="i18n" />
          </i>

          <i className="block md:hidden">
            <Image src={menu} quality={100} height={24} alt="menu" />
          </i>
        </div>
      </nav>
    </>
  );
}
