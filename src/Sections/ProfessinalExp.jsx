import ExpCard from "../components/ExpCard";

export default function ProfessionalExp() {
    return (
        <div id="Exp" className="min-h-fit mt-20 text-white md:w-[90%]  mx-auto">
            <h3 className="font-bold flex flex-col sm:flex-row gap-1 items-center z-0 w-fit mx-auto text-3xl mt-20 pb-2"> Professional <span className="text-purple-600">Experience</span></h3>

            {/*Underline Below My Skills*/}
            <div className="border-2 w-45 sm:w-60 border-purple-600 m-auto mb-10"></div>


            <div className="flex flex-col mx-auto justify-center grow   md:w-[99%] flex-wrap gap-8 sm:flex-row">

                <ExpCard
                    title="Full Stack Developer"
                    companyname="NetLeap IT Training & solutions"
                    date="Dec 2023 - Jan 2024"
                    description="Developed and maintained web applications using React and Node.js."
                />
                <ExpCard
                    title="Backend Developer"
                    companyname="Mirraz Technology PVT. LTD."
                    date="Jan 2024 - May 2024"
                    description="Developed and maintained web applications using React, Express.js and Node.js"
                />
                <ExpCard
                    title="Full Stack Developer"
                    companyname="MotioCut (Remote)"
                    date="Jan 2024 - Jan 2024"
                    description="Developed and maintained web applications using HTML, CSS, JS"
                />
            </div>
        </div>
    )
}