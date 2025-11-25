import LaptopScene from "../components/Laptop.jsx";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="Home"
            className="min-h-screen flex flex-col justify-center items-center broder bg-gray-900 text-white px-6 py-16"
        >

            <div className="w-full mg-[60%] lg:w-[53%]  rounded-2xl shadow-[0px_0px_15px_0px_rgba(0,0,0,0.2)] shadow-purple-600   bg-[#0d0f18]">
                <LaptopScene >
                    <h2 className="text-2xl sm:text-3xl mb-5 font-bold">
                        Hi, I’m <span className="text-purple-500">Chetan Darade</span>
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">
                        Full-stack Web Developer and Business/Data Analyst who turns ideas into seamless interfaces and data into clear, actionable visuals using Power BI.<br />
                        I build modern, responsive & user-centered experiences.

                    </p>

                    <div className="flex gap-3 mt-4 justify-center text-xs sm:text-sm">
                        <a
                            href="#Projects"
                            className="px-3 py-2 rounded-xl bg-purple-700 text-white border border-purple-900 hover:bg-purple-600"
                        >
                            View Projects
                        </a>
                        <a
                            href="/CV.pdf" download
                            className="px-3 py-2 rounded-xl border border-purple-600 text-purple-400 hover:bg-purple-700 hover:text-white"
                        >
                            Download CV
                        </a>
                    </div>
                </LaptopScene>
            </div>

            {/* Scroll Indicator */}
            <div className="flex flex-col items-center mt-8 animate-bounce text-gray-300">
                <span className="text-xs tracking-wide">Scroll</span>
                <ArrowDown size={26} />
            </div>
        </section>
    );
}
