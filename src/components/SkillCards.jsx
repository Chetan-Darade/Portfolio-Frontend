export default function SkillCards({ skill, level }) {
    return (
        <div className=" w-full h-30  sm:w-[48%] md:w-[48%] lg:w-[31%]">
            <div className="w-full rounded-xl shadow-2xl  shadow-gray-950 bg-[#0d0f18] px-3 py-2
            transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl r p-6 ">
                <h3 className="text-left my-3 ">{skill}</h3>
                <div className="w-full rounded-full h-2  bg-gray-950" >
                    <div className="bg-purple-600 h-2  rounded-full" style={{ width: level }}></div>
                </div>    
                <h5 className="text-right ">{level}</h5>
            </div>
        </div>
    )
}