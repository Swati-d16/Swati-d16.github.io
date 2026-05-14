import { NavLink, useLocation } from "react-router-dom";
import { Search, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Bio", path: "/bio", section: "bio" },
    { name: "Skills", path: "/skills", section: "skills" },
    { name: "Experience", path: "/experience", section: "experience" },
    { name: "Projects", path: "/projects", section: "projects" },
  ];

  const handleSectionClick = (section) => {
    if (location.pathname === "/") {
      // Smooth scroll to section if on home page
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#050816]/95 backdrop-blur-xl border-b border-slate-200/70 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <NavLink to="/">
          <h1 className="text-slate-900 font-bold text-2xl tracking-wide dark:text-white">
            D Swati
          </h1>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-3">
          {navLinks.map((link) => (
            <div key={link.name}>
              {location.pathname === "/" ? (
                <button
                  onClick={() => handleSectionClick(link.section)}
                  className="rounded-full px-4 py-2 text-[15px] font-medium text-slate-700 transition duration-300 hover:text-blue-400 dark:text-slate-200"
                >
                  {link.name}
                </button>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-[15px] font-medium transition duration-300 ${
                      isActive
                        ? "bg-slate-100 text-slate-900 dark:bg-[#0f172a] dark:text-white"
                        : "text-slate-700 hover:text-blue-400 dark:text-slate-200"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-full p-2 text-slate-700 transition duration-300 hover:text-blue-500 dark:text-slate-200">
            <Search size={18} />
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/70 bg-slate-100 text-slate-900 transition duration-300 hover:border-blue-400 hover:bg-slate-200 dark:border-white/20 dark:bg-[#0f172a] dark:text-white dark:hover:border-blue-400 dark:hover:bg-[#111827]"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="hidden md:flex items-center gap-1 text-sm text-slate-700 dark:text-slate-200">
            <span>{theme === "dark" ? "Dark" : "Light"}</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;