import {BriefcaseBusiness } from 'lucide-react';

export default function ExpCard({title, companyname, date, description}) {
    return (
        <div className="min-h-50 sm:w-[45%] md:w-[40%] lg:w-[31%]   justify-between bg-[#0d0f18] mx-auto flex flex-row  w-[80%]   sm:flex-row sm:gap-10 p-5 mb-10 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl">
            <BriefcaseBusiness className='sm:mx-0 mx-2 bg-gray-950 text-purple-700 rounded-full h-10 p-2 w-30 text-2xl'/>
            <div className="flex flex-col sm:ml-0 mx-3 text-left  ">
                <h3 className="font-bold text-xl">{title}</h3>
                <h4 className="font-light text-purple-500 text-sm mb-2">{companyname}</h4>
                <h6 className=" font-extralight mb-2">{date}</h6>
                <h6 className=" font-thin  text-justify"> {description}</h6>
            </div>

        </div>

    )
}