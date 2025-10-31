import { useEffect, useState, useCallback } from "react";
import ThemeToggle from "../Theme/ThemeToggle";
import Logo from "../Header/logo";

const contactLinks = [
  {
    icon: "ri-instagram-fill",
    title: "Instagram",
    value: "smpn40.smd",
    href: "https://www.instagram.com/smpn40.smd/",
  },
  {
    icon: "ri-mail-line",
    title: "Email",
    value: "smpn.smd40@gmail.com",
    href: "mailto:smpn.smd40@gmail.com",
  },
  {
    icon: "ri-whatsapp-fill",
    title: "Saluran WhatsApp",
    value: "UPDATE SMPN40",
    href: "https://whatsapp.com/channel/0029ValFhSmElagtFhLwZt3g",
  },
  {
    icon: "ri-tiktok-fill",
    title: "Tiktok",
    value: "SMPN 40 SAMARINDA",
    href: "https://www.tiktok.com/@smpn40.smd",
  },
];

const Footer = () => {
  // Ambil theme awal dari localStorage → fallback ke OS
  const getInitialTheme = useCallback(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }, []);

  const [theme, setTheme] = useState(getInitialTheme);

  // Sinkronkan perubahan theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <footer id="kontak" className="flex flex-col bg-[var(--background_header)]">
      <div className="px-5 lg:px-20 py-10">
        {/* atas */}
        <div className="flex flex-col md:flex-row justify-between w-full mx-auto gap-4 md:gap-20">
          {/* Brand + Motto */}
          <div className="flex flex-col w-full md:w-1/3 lg:w-1/2 gap-4">
            <Logo theme={theme} />
            <h1 className="text-5xl font-extrabold text-gray-500 text-justify">
            SMPN 40 SAMARINDA
            </h1>
          </div>

          {/* Info Kontak */}
          <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 gap-5">
            <div className="grid grid-cols-2 gap-5">
              {contactLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-5"
                >
                  <i className={`${item.icon} text-header mt-1`}></i>
                  <div>
                    <p className="text-subtitle">{item.title}</p>
                    <p className="text-paragraph hidden lg:block">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
              <div className="">
                <ThemeToggle theme={theme} setTheme={setTheme} />
              </div>
            </div>

            {/* Toggle Theme (mobile) */}
          </div>
        </div>
      </div>

      {/* bawah */}
      <div className="flex items-center justify-center p-5 text-paragraph border-t border-[var(--color_text_title)]/30">
        <p>© 2025 All Rights Reserved by SMPN 40 Samarinda</p>
      </div>
    </footer>
  );
};

export default Footer;
