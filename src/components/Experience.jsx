import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1a1333",
        color: "#fff",
        borderRadius: "20px",
        boxShadow: "none",
        border: "1px solid rgba(255,255,255,0.08)",
        padding: "32px",
      }}
      contentArrowStyle={{
        borderRight: "10px solid #1a1333",
      }}
      date={experience.date}
      dateClassName="text-gray-400 font-medium"
      iconStyle={{
        background: "#0f172a",
        border: "4px solid white",
        boxShadow: "0 0 15px rgba(255,255,255,0.2)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      {/* TITLE */}
      <div>
        <h3 className="text-white text-[30px] font-bold">
          {experience.title}
        </h3>

        <p
          className="text-gray-400 text-[18px] font-semibold mt-2"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {/* POINTS */}
      <ul className="mt-8 list-disc ml-5 space-y-4">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-300 text-[16px] leading-8 tracking-wide pl-1"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-slate-50 text-slate-900 dark:bg-[#050816] dark:text-white transition-colors duration-300">
      <motion.div className="max-w-5xl mx-auto">
        <p className="text-slate-500 uppercase tracking-[6px] text-sm dark:text-slate-400">
          What I have done so far
        </p>

        <h2 className="text-6xl font-extrabold mt-4 text-slate-900 dark:text-white">
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline
          layout="1-column-left"
          lineColor="#94a3b8"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;