import AboutRightCard from "../components/AboutRightCard";

import { Code2, BrainCircuit, Users } from "lucide-react";



export default function About() {
  return (
    <div id="About" className=" min-h-screen -mt-5 justify-center items-center  p-5 text-center text-white w-full mx-auto  gap-3  ">

      <h3 className="font-bold z-0 text-3xl -mt-10 sm:mt-10 pb-2"> About <span className="text-purple-600">Me</span></h3>

      {/*Underline Below About Me*/}
      <div className="border-2 w-35 border-purple-600 m-auto mb-1"></div>


      <div className="flex  w-full  flex-col sm:flex-row justify-center  gap-0 sm:w-full mt-0 lg:w-8/10  md:w-9/10  mx-auto px-5 ">

        <div className="flex flex-col w-full  sm:w-[70%] md:w-8/10   mt-0 px-0 sm:px-2 ">

          <h3 className="text-2xl w-3/4 mt-10 font-medium sm:w-full m-auto">Enthusiastic Full-Stack Developer <span className="text-purple-500">&</span> Data Analyst</h3>
          <div className="text-sm text-center p-5 flex flex-col gap-5">
            <h6>I'am a Computer engineering graduate with a strong foundation in full-stack development. I enjoy building efficient and user-centric web applications using technologies like React.js, and NodeJS ExpressJS.
            </h6>
            <h6> I thrive on solving real-world problems through clean code and practical architecture. When I'm not coding You'll see me Blooding new tools That makes development Smelter.</h6>

            <div className="flex flex-col text-center items-center gap-5 mt-8 w-full">

<a href="#Projects" className="border-2 border-purple-700 w-full rounded-2xl py-1.5 text-white bg-purple-700 hover:bg-purple-600  focus:outline-2 focus:outline-offset-2 focus:outline-purple-800 sm:w-2/3">

              <button className=" text-white ">View My Work</button>
</a>

              <a className="border-2 w-full border-purple-700 rounded-2xl py-1.5 text-purple-700 hover:bg-purple-600 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-purple-800 active:bg-violet-700 sm:w-2/3" href="src/assets/CV.pdf" download >
                <button className="">Download CV</button></a>


            </div>
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col  w-full mt-2 px-2 md:visible mx-auto  ">

          {/* 1. Full-stack dev → Lucide icon */}
          <AboutRightCard
            Icon={Code2}
            title="Full-Stack Development"
            desc="Building scalable MERN apps with clean architecture, great UX, and API-driven backends"
          />

          {/* 2. Data analyst → Lucide icon */}
          <AboutRightCard
            Icon={BrainCircuit}
            title="Data Analytics"
            desc="Turning data into insights using Power BI, SQL, and Excel—sales and healthcare focused."
          />

          {/* 3. Collaboration → Lucide icon */}
          <AboutRightCard
            Icon={Users}
            title="Team Collaboration"
            desc="Working with teams through clear coordination and shared goals."
          />



        </div>
      </div>
    </div>
  )
}