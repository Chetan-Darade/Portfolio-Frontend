import { X } from "lucide-react"
import SkillCards from "../components/SkillCards";
import { useState } from "react";

export default function Skill() {
    const [active, setActive] = useState("All");

    const allSkills = [
        {
            skill: 'HTML/CSS',
            level: '95%',
            category: 'Frontend',
        },
        {
            skill: 'React',
            level: '90%',
            category: 'Frontend',
        },
        {
            skill: 'JS',
            level: '85%',
            category: 'Frontend',
        },
        {
            skill: 'TailwindCSS',
            level: '90%',
            category: 'Frontend',
        },
        {
            skill: 'Three.JS',
            level: '40%',
            category: 'Frontend',
        },
        {
            skill: 'ExpressJS',
            level: '95%',
            category: 'Backend',
        },
        {
            skill: 'NodeJS',
            level: '90%',
            category: 'Backend',
        },
        {
            skill: 'Java (core)',
            level: '80%',
            category: 'Backend',
        },
        {
            skill: 'MySQL',
            level: '95%',
            category: 'Database',
        },
        {
            skill: 'MongoDB',
            level: '90%',
            category: 'Database',
        },
        {
            skill: 'GitHub',
            level: '85%',
            category: 'Tools',
        },
        {
            skill: 'VS code',
            level: '95%',
            category: 'Tools',
        },
        {
            skill: 'Figma',
            level: '80%',
            category: 'Tools',
        },
        {
            skill: 'Intellij IDEA',
            level: '60%',
            category: 'Tools',
        },
        {
            skill: 'PowerBI',
            level: '80%',
            category: 'Tools',
        },
        {
            skill: 'Data visualization',
            level: '85%',
            category: 'Data Analysis',
        },
        {
            skill: 'Data Analyst',
            level: '80%',
            category: 'Data Analysis',
        },
        
        
        
    ];

    const filtered =
        active === "All"
            ? allSkills
            : allSkills.filter((skills) => skills.category === active);


    return (
        <div>
            <section id="Skill" className="min-h-screen  -mt-40 sm:mt-0 p-5 text-center text-white w-full">

                <h3 className="font-bold z-0 text-3xl mt-0 pb-2"> My <span className="text-purple-600">Skill's</span></h3>

                {/*Underline Below My Skills*/}
                <div className="border-2 w-35 border-purple-600 m-auto mb-10"></div>


                {/* Category Tabs*/}
                <div className="flex justify-center  grow flex-wrap gap-8  my-6">
                    {["All", "Frontend", "Backend", "Database", "Tools","Data Analysis"].map((cat) => (
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


                <div className="flex flex-wrap  justify-start gap-5 w-full md:w-8/10  mx-auto p-5">
                
                                {filtered.map((skills, index) => (
                                    <SkillCards key={index} {...skills} />
                                ))}
                
                            </div>

            </section>
        </div>
    )
}