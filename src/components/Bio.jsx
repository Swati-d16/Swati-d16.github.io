import { FileDown, GraduationCap, Rocket } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaGlobe } from "react-icons/fa";

const Bio = () => {
  return (
    <section className="min-h-screen bg-white text-slate-900 dark:bg-gradient-to-br dark:from-[#08111f] dark:via-[#071c35] dark:to-[#063b46] dark:text-white px-8 pt-32 pb-10 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SECTION */}
        <div className="flex flex-col items-center text-center">
          
          {/* PROFILE IMAGE */}
          <div className="relative">
            <img
              src="/image/profile.jpeg"
              alt="profile"
              className="w-52 h-52 rounded-full object-cover border-4 border-slate-200/50 dark:border-white/20 shadow-2xl"
            />

            {/* ROCKET ICON */}
            <div className="absolute bottom-4 right-3 bg-slate-900/80 dark:bg-white/10 p-2 rounded-full border border-slate-300/20 dark:border-white/20">
              <Rocket size={18} className="text-pink-400" />
            </div>
          </div>

          {/* NAME */}
          <h1 className="text-5xl font-bold mt-8 leading-tight text-slate-900 dark:text-white">
            D. Swati
          </h1>

          <p className="text-slate-500 dark:text-slate-300 mt-3">
            (she/her)
          </p>

          {/* ROLE */}
          <h2 className="text-2xl text-blue-500 font-semibold mt-4">
            Frontend Developer
          </h2>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-8">
            {[
              <FaTwitter />,
              <FaGithub />,
              <FaLinkedinIn />,
              <FaGlobe />,
            ].map((icon, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full bg-slate-100/80 border border-slate-200/50 dark:bg-white/10 dark:border-white/10 flex items-center justify-center text-lg text-slate-900 dark:text-white cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div>
          
          {/* SUMMARY */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <GraduationCap className="text-blue-400" size={20} />
              </div>

              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                Professional Summary
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-8 text-lg">
              Passionate Frontend Developer skilled in React.js,
              JavaScript, Tailwind CSS, and modern web technologies.
              I enjoy building responsive, user-friendly, and visually
              engaging web applications that create seamless digital
              experiences.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-8 text-lg mt-4">
              A quick learner and problem solver, I’m always exploring
              new technologies and best practices to build clean,
              scalable, and high-performing applications while
              continuously growing as a developer.
            </p>

            {/* DOWNLOAD CV */}
            <a
              href="/resume/D Swati(2).pdf"
              download
              className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-xl font-semibold text-lg text-white hover:scale-105 transition duration-300 shadow-lg"
            >
              <FileDown size={22} />
              Download CV
            </a>
          </div>

          {/* EDUCATION */}
       <div className="mt-16">

  {/* HEADING */}
  <div className="flex items-center gap-3">
    
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg">
      <GraduationCap className="h-5 w-5" />
    </div>

    <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
      Education
    </h2>
  </div>

  {/* EDUCATION CARDS */}
  <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    
    {[
      {
        degree: "Master of Computer Applications",
        years: "2024 — 2026",
        school: "Andhra University",
      },
      {
        degree: "Full Stack Development",
        years: "2023 — 2024",
        school: "NxtWave Disruptive Technologies",
      },
      {
        degree: "B.com (Financial Accounts)",
        years: "2017 — 2020",
        school: "Karim City College",
      },
    ].map((e, index) => (

      <div
        key={index}
        className="
          bg-slate-100/90
          dark:bg-[#081529]/95
          border
          border-slate-200/80
          dark:border-white/10
          rounded-3xl
          p-6
          shadow-xl
          hover:border-blue-500
          hover:-translate-y-2
          transition-all
          duration-300
          backdrop-blur-md
        "
      >

        {/* ICON */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-slate-900 dark:text-white">
          <GraduationCap className="h-5 w-5 text-blue-400" />
        </div>

        {/* DEGREE */}
        <h3 className="mt-6 text-2xl font-bold leading-snug text-slate-900 dark:text-white">
          {e.degree}
        </h3>

        {/* YEARS */}
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          {e.years}
        </p>

        {/* SCHOOL */}
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
          {e.school}
        </p>

      </div>
    ))}
  </div>
</div>
          {/* INTERESTS */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Interests
            </h2>

            <div className="flex flex-wrap gap-4">
              {[
                "React.js",
                "Frontend Development",
                "UI/UX Design",
                "Web Performance",
              ].map((item, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-full bg-slate-100/80 dark:bg-white/10 border border-slate-200/80 dark:border-white/10 text-slate-900 dark:text-slate-200 hover:bg-blue-500 hover:text-white transition duration-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;