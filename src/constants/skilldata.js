import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaVuejs,
  FaReact,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiVuetify,
} from "react-icons/si";
import { IoLogoSass } from "react-icons/io";

const data = [
  {
    name: "Vue",
    icon: <FaVuejs className="icon" />,
  },
  {
    name: "React",
    icon: <FaReact className="icon" />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript className="icon" />,
  },
  {
    name: "Javascript",
    icon: <SiJavascript className="icon" />,
  },
  ,
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="icon" />,
  },
  {
    name: "TailWind",
    icon: <SiTailwindcss className="icon" />,
  },
  {
    name: "HTML 5",
    icon: <FaHtml5 className="icon" />,
  },
  {
    name: "CSS 3",
    icon: <FaCss3 className="icon" />,
  },
  {
    name: "SASS",
    icon: <IoLogoSass className="icon" />,
  },
  {
    name: "Java",
    icon: <FaJava className="icon" />,
  },
  {
    name: "Python",
    icon: <FaPython className="icon" />,
  },
];

export default data;
