import { skills } from "../constants";

const Skills = () => {
  return (
    <section className="py-20 px-6 md:px-10 lg:px-16 bg-slate-50 text-slate-900 dark:bg-[#050816] dark:text-white transition-colors duration-300">
      <div>
        <h2 className="text-5xl font-bold">Skills</h2>

        <p className="text-slate-500 dark:text-slate-400 text-xl mt-4">
          Tools & technologies I work with daily.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white/90 dark:bg-[#081529]/90 border border-slate-200/70 dark:border-white/10 rounded-3xl h-[180px] flex flex-col items-center justify-center gap-5 backdrop-blur-md hover:border-blue-400 hover:-translate-y-2 transition-all duration-300 shadow-lg cursor-pointer"
          >
            {/* ICON */}
            <div className="w-20 h-20 rounded-3xl bg-slate-900 flex items-center justify-center dark:bg-slate-100 transition-colors duration-300">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-12 h-12 object-contain"
              />
            </div>

            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;