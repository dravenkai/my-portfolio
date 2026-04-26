import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ isScrolled }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileOpen(false);
    setActiveSection(id);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-6 sm:px-6"
    >
      <div
        className={`mx-auto max-w-5xl rounded-2xl border transition-all duration-500 sm:px-8 px-6 py-4 ${
          isScrolled
            ? "border-white/10 bg-slate-900/40 shadow-2xl backdrop-blur-xl"
            : "border-white/5 bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="group flex flex-col items-start"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500 group-hover:text-blue-400 transition-colors">
              Developer
            </span>
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-blue-100 transition-colors">
              DRAVEN KAI
            </span>
          </button>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-white ${
                    activeSection === link.id ? "text-white" : "text-slate-400"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-blue-500"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition duration-300 ease-out border border-blue-500 rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                <Menu size={18} />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Let's Talk
              </span>
              <span className="relative invisible text-sm">Let's Talk</span>
            </button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-1 overflow-hidden md:hidden"
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${
                    activeSection === link.id
                      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
