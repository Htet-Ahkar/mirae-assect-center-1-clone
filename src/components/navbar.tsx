import Image from "next/image";
import logo from "../../public/logo.svg";
import globe from "../../public/globe-icon.svg";
import menu from "../../public/menu.svg";

export default function Navbar() {
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
      <nav className="navbar fixed z-50 w-full bg-blue-900 bg-opacity-0 bg-clip-padding p-0 px-[3%] backdrop-blur-lg backdrop-filter md:h-20 md:px-[9%]">
        {/* LOGO */}
        <div className="navbar-start">
          <a href="/">
            <i>
              <Image src={logo} quality={100} height={24} alt="logo" />
            </i>
          </a>
        </div>

        {/* Navigation link */}
        <div className="navbar-center hidden md:block">
          <ul className="flex flex-row gap-7">
            {navlinks.map((navLink) => (
              <li>
                <a
                  className="text-xl font-extrabold"
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
