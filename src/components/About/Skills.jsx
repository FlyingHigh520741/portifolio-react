import { motion } from "framer-motion";
import { FaFileExcel, FaHtml5, FaRegFileExcel, FaStar, FaRegStar } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiApachekafka, SiBootstrap, SiDatabricks, SiMicrosoftaccess, SiMicrosoftexcel, SiMicrosoftpowerpoint, SiMicrosoftsqlserver, SiMysql, SiNumpy, SiPandas, SiPlotly, SiPowerbi, SiReact, SiSpring, SiSpringboot, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiArduino } from "react-icons/si";
import { SiEspressif } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiMicrosoft } from "react-icons/si";
import { useState, useEffect } from "react";

const SkillLevel = ({ level }) => {
  const maxStars = 5;
  const levels = {
    "Iniciante": { stars: 1, color: "bg-gray-400", percentage: 20 },
    "Básico": { stars: 2, color: "bg-green-400", percentage: 40 },
    "Intermediário": { stars: 3, color: "bg-blue-400", percentage: 60 },
    "Avançado": { stars: 4, color: "bg-purple-400", percentage: 80 },
    "Especialista": { stars: 5, color: "bg-yellow-400", percentage: 100 }
  };

  const currentLevel = levels[level];
  const stars = Array(maxStars).fill(null);

  return (
    <div className="flex flex-col items-center gap-2 bg-gray-800 p-3 rounded-lg w-[180px] sm:w-[200px] shadow-lg">
      <span className="text-xs font-bold text-azul whitespace-nowrap">LV.{getLevelNumber(level)}</span>
      <div className="flex gap-1">
        {stars.map((_, index) => (
          index < currentLevel.stars 
            ? <FaStar key={index} className="text-yellow-400" size="15px" />
            : <FaRegStar key={index} className="text-gray-400" size="15px" />
        ))}
      </div>
      <div className="text-sm font-medium text-white">{level}</div>
      <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
        <div 
          className={`h-full ${currentLevel.color} transition-all duration-500`}
          style={{ width: `${currentLevel.percentage}%` }}
        />
      </div>
    </div>
  );
};

const SkillItem = ({ icon: Icon, name, level, isActive, onClick }) => {
  return (
    <li className="w-full sm:w-auto relative group">
      <div 
        className="flex items-center sm:flex-col sm:items-center cursor-pointer p-2 rounded-lg hover:bg-gray-900 transition-colors duration-200 relative"
        onClick={onClick}
      >
        <div className="relative flex items-center sm:flex-col sm:items-center">
          <Icon 
            size="40px" 
            className={`transition-transform duration-200 ${isActive || 'group-hover:scale-110'}`}
          />
          <span className="ml-4 sm:ml-0 sm:mt-2 text-base sm:text-lg">{name}</span>
        </div>
      </div>
      {/* Card para desktop (hover) */}
      <div className={`
        hidden sm:block absolute -top-28 left-1/2 transform -translate-x-1/2 transition-opacity duration-200 z-10 
        opacity-0 group-hover:opacity-100
      `}>
        <SkillLevel level={level} />
      </div>
      {/* Backdrop e card para mobile (click) */}
      {isActive && (
        <>
          <div 
            className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClick}
          />
          <div className="sm:hidden absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full z-50 mb-2">
            <div className="relative">
              <SkillLevel level={level} />
              <div className="absolute w-4 h-4 bg-gray-800 transform rotate-45 left-1/2 -translate-x-1/2 -bottom-2"></div>
            </div>
          </div>
        </>
      )}
    </li>
  );
};

const getLevelNumber = (level) => {
  const levels = {
    "Iniciante": 1,
    "Básico": 2,
    "Intermediário": 3,
    "Avançado": 4,
    "Especialista": 5
  };
  return levels[level];
};

const SkillSection = ({ title, skills }) => {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleSkillClick = (index) => {
    if (window.innerWidth < 640) { // sm breakpoint
      setActiveSkill(activeSkill === index ? null : index);
    }
  };

  // Previne o scroll quando um card está ativo em mobile
  useEffect(() => {
    if (activeSkill !== null && window.innerWidth < 640) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeSkill]);

  return (
    <div className="mb-4 bg-black p-3 sm:p-4 md:p-8 rounded-2xl">
      <span className="block text-azul font-montserrat font-bold text-lg sm:text-xl md:text-2xl w-full text-center md:text-left mb-4">{title}</span>
      <ul className="flex flex-col sm:flex-row sm:flex-wrap justify-center md:justify-start items-stretch sm:items-center gap-4 sm:gap-8 relative">
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            {...skill}
            isActive={activeSkill === index}
            onClick={() => handleSkillClick(index)}
          />
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  const backendSkills = [
    { icon: FaJava, name: "Java", level: "Básico" },
    { icon: SiSpringboot, name: "Spring Boot", level: "Iniciante" },
    { icon: SiApachekafka, name: "Apache Kafka", level: "Iniciante" },
    { icon: FaPython, name: "Python", level: "Intermediário" },
    { icon: FaNode, name: "Node JS", level: "Básico" }
  ];

  const frontendSkills = [
    { icon: FaReact, name: "React JS", level: "Intermediário" },
    { icon: FaHtml5, name: "HTML5", level: "Especialista" },
    { icon: FaCss3Alt, name: "CSS3", level: "Avançado" },
    { icon: SiJavascript, name: "JavaScript", level: "Intermediário" },
    { icon: SiTypescript, name: "TypeScript", level: "Iniciante" },
    { icon: SiTailwindcss, name: "Tailwind CSS", level: "Intermediário" },
    { icon: SiBootstrap, name: "Bootstrap", level: "Especialista" }
  ];

  const dataSkills = [
    { icon: SiDatabricks, name: "Databricks", level: "Básico" },
    { icon: SiMicrosoftsqlserver, name: "SQL Server", level: "Intermediário" },
    { icon: SiMicrosoftsqlserver, name: "SAS", level: "Intermediário" },
    { icon: SiMicrosoftexcel, name: "Power Query", level: "Avançado" },
    { icon: SiNumpy, name: "Numpy", level: "Iniciante" },
    { icon: SiPandas, name: "Pandas", level: "Iniciante" },
    { icon: SiPlotly, name: "Plotly", level: "Intermediário" },
    { icon: SiPowerbi, name: "PowerBi", level: "Avançado" },
    { icon: SiMicrosoftpowerpoint, name: "Power Point", level: "Especialista" }
  ];

  const otherSkills = [
    { icon: SiCplusplus, name: "C++", level: "Básico" },
    { icon: SiArduino, name: "Arduino", level: "Intermediário" },
    { icon: SiEspressif, name: "ESP32", level: "Intermediário" },
    { icon: FaGithub, name: "Git/GitHub", level: "Especialista" }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 2.0,
          },
        },
      }}
    >
      <div className="w-full py-28">
        <div className="mx-auto flex flex-col max-w-screen-xl justify-center px-4">
          <p className="font-bold font-krona text-azul pb-4 text-center">Habilidades</p>

          <SkillSection title="Back-end" skills={backendSkills} />
          <SkillSection title="Front-end" skills={frontendSkills} />
          <SkillSection title="Dados" skills={dataSkills} />
          <SkillSection title="Outros" skills={otherSkills} />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;