import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import {
  FaBootstrap,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAxios, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";
import { DiJqueryLogo } from "react-icons/di";

export default function Tech() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <div
        id="tech"
        className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32 "
      >
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-light text-white md:text-6xl "
        >
          Technologies
        </motion.h1>

        <div className=" flex flex-wrap items-center justify-center gap-10 p-5 ">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="Ts"
          >
            <BiLogoTypescript
              className="cursor-pointer text-[80px] text-sky-500
        transition-all duration-300 
        hover:-translate-y-5 
        sm:text-[100px]
        md:text-[120px]
        "
            />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="NX"
          >
            <RiNextjsFill
              className="cursor-pointer text-[80px] text-slate-50
        transition-all duration-300 
        hover:-translate-y-5 
        sm:text-[100px]
        md:text-[120px]
        "
            />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="Re"
          >
            <RiReactjsFill
              className="cursor-pointer text-[80px] text-sky-500
        transition-all duration-300 
        hover:-translate-y-5 
        sm:text-[100px]
        md:text-[120px]
        "
            />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="Ra"
          >
            <SiRedux
              className="cursor-pointer text-[80px] text-indigo-600
        transition-all duration-300 
        hover:-translate-y-5 
        sm:text-[100px]
        md:text-[120px]
        "
            />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="JS"
          >
            <BiLogoJavascript
              className="cursor-pointer text-[80px] text-amber-300
        transition-all duration-300 
        hover:-translate-y-5 
        sm:text-[100px]
        md:text-[120px]
        "
            />
          </motion.div>


          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="JS"
          >
         <DiJqueryLogo 
              className="cursor-pointer text-[80px] text-sky-400
        transition-all duration-300 
        hover:-translate-y-5 
        sm:text-[100px]
        md:text-[120px]
        "
            />
          </motion.div>





          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="Ta"
          >
            <RiTailwindCssFill
              className="cursor-pointer text-[80px] text-sky-500
        transition-all duration-300 
        hover:-translate-y-5 
        sm:text-[100px]
        md:text-[120px]
        "
            />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="BS"
          >
            <FaBootstrap
              className="cursor-pointer text-[80px] text-gray-100
        transition-all duration-300 
        hover:-translate-y-5 
        sm:text-[100px]
        md:text-[120px]
        "
            />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="CSS"
          >
            <IoLogoCss3
              className="cursor-pointer text-[80px] text-sky-500
        transition-all duration-300 
        hover:-translate-y-5 
        sm:text-[100px]
        md:text-[120px]
        "
            />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="HTML"
          >
            <FaHtml5
              className="cursor-pointer text-[80px] text-red-600
        transition-all duration-300 
        hover:-translate-y-5 
        sm:text-[100px]
        md:text-[120px]
        "
            />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="Node"
          >
            <FaNodeJs
              className="cursor-pointer text-[80px] text-emerald-600
        transition-all duration-300 
        hover:-translate-y-5 
        sm:text-[100px]
        md:text-[120px]
        "
            />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="GIT"
          >
            <FaGitAlt
              className="cursor-pointer text-[80px] text-red-500
        transition-all duration-300 
        hover:-translate-y-5 
        sm:text-[100px]
        md:text-[120px]
        "
            />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="Axios"
          >
            <SiAxios
              className="cursor-pointer text-[80px] text-sky-500
        transition-all duration-300 
        hover:-translate-y-5 
        sm:text-[100px]
        md:text-[120px]
        "
            />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="Docker"
          >
            <FaDocker
              t
              className="cursor-pointer text-[80px] text-sky-500
        transition-all duration-300 
        hover:-translate-y-5 
        sm:text-[100px]
        md:text-[120px]
        "
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
