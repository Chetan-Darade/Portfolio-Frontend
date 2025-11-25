import { ExternalLink } from "lucide-react";
import { useState } from "react";
import ProjectCards from "../components/ProjectCards";

export default function Projects() {

    const [active, setActive] = useState("All");

    const allProjects = [
        {
            img: "src/assets/Portfolio.png",
            title: "Chetan Portfolio",
            description: "A portfolio website that highlights my technical skills, real-world projects, and passion for building scalable digital solutions.",
            languages: ["React", "NodeJS", "ExpressJS", "Three,js"],
            liveLink: "www.github.com",
            githubLink: "www.github.com",
            category: "Fullstack",
        },
        {
            img: "src/assets/DHH.png",
            title: "Digital Health Hub",
            description: "A healthcare platform that integrates appointment management, disease prediction models, and nurse dashboards to provide faster, data-driven patient care.",
            languages: ["HTML/CSS", "NodeJS", "ExpressJS", "MySQL"],
            liveLink: "https://github.com/Chetan-Darade/Digital-Health-Hub-Transforming-Patient-s-Health-and-Care.git",
            githubLink: "https://github.com/Chetan-Darade/Digital-Health-Hub-Transforming-Patient-s-Health-and-Care.git",
            category: "Fullstack",
        },
        {
            img: "src/assets/IDCP.jpg",
            title: "Inter-Departmental Cooperation Platform",
            description: "A smart governance system for city departments that enables project coordination, real-time communication, and tender clash detection based on priority, locality, and completion timelines.",
            languages: ["React", "NodeJS", "ExpressJS", "MySQL"],
            category: "Fullstack",
            liveLink: "https://github.com/Chetan-Darade/City-Synergy-Inter-Departmental-Co-operation-platform.git",
            githubLink: "https://github.com/Chetan-Darade/City-Synergy-Inter-Departmental-Co-operation-platform.git",
        },
        {
            img: "src/assets/Freelancify.png",
            title: "Freelancify",
            description: "A freelancing marketplace enabling clients, agencies, and independent professionals to collaborate seamlessly, with real-time communication and scalable project lifecycle management.",
            languages: ["React", "NodeJS", "ExpressJS", "MongoDB"],
            category: "Fullstack",
            liveLink: "https://freelancify-deploy-repo-w33j.vercel.app/",
        },
        {
            img: "src/assets/SD.png",
            title: "Sales Report Dashboard",
            description: "Interactive Power BI sales dashboard providing actionable insights on revenue and profit across regions, product categories, and supervisors.",
            languages: ["Data Visualization", "Excel", "PowerBI"],
            category: "Data Analyst",
        },
    ];

    const filtered =
        active === "All"
            ? allProjects
            : allProjects.filter((proj) => proj.category === active);

    return (
        <div id="Projects" className="min-h-screen  p-5 text-center text-white w-full">
            <h3 className="font-bold z-0 w-fit mx-auto text-3xl mt-0 sm:mt-20 pb-2"> Featured <span className="text-purple-600">Projects</span></h3>

            {/*Underline Below My Skills*/}
            <div className="border-2 w-60 border-purple-600 m-auto mb-10"></div>

            <h6 className="w-[80%] sm:w-[60%] md:w-[40%] mx-auto">Here are some of my recent projects.Each project was carefully crafted with attention to detail, performance, and user experience</h6>


            {/* Category Tabs */}
            <div className="flex justify-center gap-8 my-6">
                {["All", "Fullstack", "Data Analyst"].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`pb-1 text-lg font-semibold transition 
              ${active === cat ? "border-b-2 border-purple-600 text-purple-500" : "text-gray-300 hover:text-purple-400"}
            `}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Cards Container */}
            <div className="flex flex-wrap justify-start gap-5 w-full md:w-8/10  mx-auto p-5">

                {filtered.map((proj, index) => (
                    <ProjectCards key={index} {...proj} />
                ))}

            </div>


            <div className="w-[60%] p-2 text-center m-auto mt-10 sm:w-[30%] md:w-[25%] border-2 border-purple-700 rounded-2xl text-white bg-purple-700 hover:bg-purple-600  focus:outline-2 focus:outline-offset-2 focus:outline-purple-800  ">
                <a href="https://github.com/Chetan-Darade" target="_blank" className=""><button className="w-auto items-center  mx-auto flex gap-3 sm:gap-5">Check My GitHub   <ExternalLink /> </button></a>
            </div>
        </div>

    )
}