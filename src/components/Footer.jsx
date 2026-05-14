import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/80 bg-white/90 dark:border-white/10 dark:bg-[#050816]/95 text-slate-900 dark:text-slate-200 transition-colors duration-300 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4 items-center justify-between md:flex-row">
        <p>© 2026 <strong>D Swati</strong>. All rights reserved.</p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;