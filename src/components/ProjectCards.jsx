import { ExternalLink, Github } from "lucide-react";

export default function ProjectCards({ img, title, description, languages, liveLink, githubLink }) {
  return (
    <div className="bg-[#0d0f18] shadow-xl rounded-lg 
        transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] 
        flex flex-col min-h-100 h-full w-full sm:w-[48%]  md:w-[48%] lg:w-[31%]">

      <img src={img} alt={title} className="w-full h-40 object-cover rounded-t-lg" />

      <div className="p-3 flex flex-col grow ">
        <div className="flex flex-wrap gap-2   mt-3">
          {languages?.map((lang, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs rounded bg-gray-200 hover:bg-purple-700 hover:text-white cursor-pointer text-purple-700 font-medium"
            >
              {lang}
            </span>
          ))}
        </div>

        <h3 className="font-bold text-lg text-purple-500 mt-3">{title}</h3>
        <p className="text-sm mt-1 grow">{description}</p>

        <div className="flex gap-4 mt-3">
          {liveLink && (
            <a href={liveLink} target="_blank" className="text-purple-600">
              <ExternalLink className="h-5 w-5" />
            </a>
          )}

          {githubLink && (
            <a href={githubLink} target="_blank" className="text-purple-600">
              <Github className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
