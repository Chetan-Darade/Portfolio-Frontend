import { X, Menu } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="text-white top-0 pt-15 mx-auto flex items-center justify-center">

      {/* NAVBAR */}
      <div
        className="h-15 bg-white/10 flex items-center justify-between gap-5 fixed sm:py-10 
        w-9/10 md:p-10 border mx-auto rounded-4xl backdrop-blur-md z-50"
      >
        <h1 className="font-medium ml-5  text-xl sm:text-2xl sm:ml-10 md:ml-0">
          Chetan's <span className="text-purple-600">Portfolio</span>
        </h1>

        <ul className="hidden sm:flex gap-5 text-xl sm:mr-10 cursor-pointer">
          <li className="hover:text-purple-500"><a href="#">Home</a></li>
          <li className="hover:text-purple-500"><a href="#About">About</a></li>
          <li className="hover:text-purple-500"><a href="#Skill">Skills</a></li>
          <li className="hover:text-purple-500"><a href="#Projects">Projects</a></li>
          <li className="hover:text-purple-500"><a href="#Contact">Contact</a></li>
        </ul>

        {/* MENU BUTTON */}
        <button className="sm:hidden size-15" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU (SEPARATE, ABOVE WHOLE PAGE) */}
      {open && (
        <ul
          className={`w-9/10  fixed gap-5 text-xl left-1/2 -translate-x-1/2  top-25 sm:hidden text-white pl-5 cursor-pointer bg-white/10 flex flex-col backdrop-blur-xl z-100 p-6  mx-auto border transform origin-bottom-right transition-all duration-1000 ease-in ${open ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"} rounded-2xl`}
        >
          <li className="hover:text-purple-500"><a href="#Home">Home</a></li>
          <li className="hover:text-purple-500"><a href="#About">About</a></li>
          <li className="hover:text-purple-500"><a href="#Skill">Skills</a></li>
          <li className="hover:text-purple-500"><a href="#Project">Projects</a></li>
          <li className="hover:text-purple-500"><a href="#Contact">Contact</a></li>
        </ul>
      )}

    </nav>
  );
}
