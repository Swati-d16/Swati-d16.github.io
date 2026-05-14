import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";


import { github } from "../assets/icons";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags = [], iconUrl, link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-white/90 dark:bg-[#0f172a] p-5 rounded-2xl sm:w-[360px] w-full transition-colors duration-300 border border-slate-200/70 dark:border-white/10 shadow-card"
      >
        <div className="relative w-full h-[230px] bg-slate-900 rounded-2xl overflow-hidden dark:bg-slate-800">
          <img src={iconUrl} alt={name} className="w-full h-full object-cover" />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(link, "_blank")}
              className="bg-slate-100/90 dark:bg-slate-200/10 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition hover:bg-slate-200 dark:hover:bg-slate-300"
            >
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-slate-900 dark:text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-[14px]">{description}</p>
        </div>

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-20 px-6 md:px-10 lg:px-16 bg-white text-slate-900 dark:bg-[#050816] dark:text-white transition-colors duration-300">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          My work
        </p>
        <h2 className="text-5xl font-black text-slate-900 dark:text-white md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-slate-600 dark:text-slate-400 text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

const WrappedProjects = SectionWrapper(Projects, "");

export default WrappedProjects;