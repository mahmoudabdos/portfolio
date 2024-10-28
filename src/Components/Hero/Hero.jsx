import image from "/public/Mahmoud-Abdo.jpeg";
import {motion} from "framer-motion";
export default function Hero() {
  return (
    <>
      <div
        id="home"
        className="px-8 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
      >
        <div className="flex flex-col items-center justify-center gap-10 text-white">
          <motion.div
          initial={{y:-50 , opacity:0}}
          animate={{y:0 , opacity:1}}
          transition={{duration:0.8 , delay:0.2}}
          
          >
            <img
              src={image}
              alt=""
              className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900
          transition-all duration-300 
          hover:-translate-y-5 
          hover:scale-105 
         hover:shadow-2xl 
         hover:shadow-indigo-600
        md:w-[350px]"
            />
          </motion.div>

          <motion.div
          initial={{y:50 , opacity:0}}
          animate={{y:0 , opacity:1}}
          transition={{duration:0.8 , delay:0.2}}
          
          
           className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center ">
          <h1
            className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent
           text-5xl font-light md:text-7xl ">
            Mahmoud Abdo
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent
           text-2xl  md:text-3xl">Software Engineer</h3>
          <p className="md:text-base text-pretty  text-sm text-gray-400">
          As a Software Engineer specializing in front-end development, 
          I have a passion for creating sleek,
           efficient, 
          and highly interactive user interfaces. 
          My expertise lies in React and Next.js, 
          where I have delivered dynamic web applications with optimized performance and seamless user experiences.
           With a deep understanding of modern JavaScript, 
          component-based architecture,
           and server-side rendering, I build scalable, 
          maintainable solutions tailored to meet client and business needs.
           Whether I&apos;m crafting intuitive designs or troubleshooting complex issues, 
          I am dedicated to pushing the boundaries of what front-end technology can achieve.
          </p>
        </motion.div>

        </div>

       
      </div>
    </>
  );
}
