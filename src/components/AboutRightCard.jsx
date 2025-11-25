// import info from '/common/icfo.js';
import { Code2, BrainCircuit, Users } from 'lucide-react';

export default function AboutRightCard({ Icon, title, desc }) {
    return (

        <div className="sm:flex sm:flex-col justify-center w-full shadow-2xl  shadow-gray-950 mt-2 md:w-[99%] sm:w-[99%] sm:m-auto transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl rounded-xl
        
        bg-[#0d0f18] hidden md:visible">

            <div className=" w-full my-3  flex flex-row items-start justify-between p-2  ">
                <div className="h-12 sm:w-1/5  flex items-center justify-center">
                    <Icon className="text-purple-400 h-8 w-8 sm:h-10 p-1.5 sm:w-10 rounded-full bg-purple-800/20 border border-purple-500 flex items-start justify-center m-3" />
                </div>

                <div className="text-left m-2 w-4/5">
                    <h3 className="font-bold text-xl">{title}</h3>
                    <h5 className="text-sm w-9/10">{desc}</h5>
                </div>
            </div>
        </div>
    )
}