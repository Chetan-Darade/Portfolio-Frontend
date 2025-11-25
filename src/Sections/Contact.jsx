import { useState } from "react";
import { Instagram, Github, LinkedinIcon, Mail, Phone, MapPin, ArrowUp, Send } from "lucide-react";
export default function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const API = import.meta.env.VITE_API_URL;


        try {
            const res = await fetch(`${API}/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (data.success) {
                setStatus("Message Sent Successfully ✔️");
                setForm({ name: "", email: "", message: "" });
            }
            else { setStatus("Failed ❌"); }
        } catch (err) {
            setStatus("Server Error ❌");
        }
    };

    return (
        <div id="Contact" className="text-white min-h-screen  ">
            <h3 className="font-bold z-0 w-fit mx-auto  text-3xl mt-20 pb-2"> Get In <span className="text-purple-600">Touch</span></h3>

            {/*Underline Below My Skills*/}
            <div className="border-2 w-40 border-purple-600 m-auto mb-10"></div>

            <div className="w-7/10 m-auto sm:w-4/10  text-center -mt-5">Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities</div>


            <div className="flex w-[90%]   justify-center items-center m-auto flex-col sm:flex-col md:flex-row gpa-10">

                <div className="div1 w-full sm:w-[60%] md:w-[40%]  mx-5 my-5   flex flex-col items-center gap-5  text-center">
                    <h4 className="font-bold text-2xl mt-5">Contact Info</h4>

                    <p className="mt-5 flex gap-2 justify-start pl-10  hover:text sm:pl-15 relative  w-full ">
                        <Mail className="" />
                        <a href="mailto:chetandarade1522@gmail.com" className="text-purple-600 hover:text-white hover:underline ml-2">chetandarade1522@gmail.com</a>
                    </p>
                    <p className="mt-5 flex gap-2 justify-start pl-10 sm:pl-15 relative  w-full ">
                        <Phone />
                        <a href="tel:+917972821265" className="text-purple-600 hover:text-white hover:underline ml-2">+91 7972821265</a>
                    </p>
                    <p className="mt-5 flex gap-2 justify-start pl-10 sm:pl-15 relative hover:text-white  w-full ">
                        <MapPin />
                        <a href="google" className="text-purple-600 hover:text-white hover:underline ml-2">Nashik, India</a>
                    </p>



                    <div>
                        <p className="font-bold text-sm mt-5 mb-3">Follow Me</p>
                        <div className="flex justify-center gap-5 mb-5">
                            <a href="https://www.linkedin.com/in/chetan-darade-a906ab293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline hover:text-white"><LinkedinIcon /></a>
                            <a href="https://github.com/Chetan-Darade" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-white hover:underline"><Github /></a>
                            <a href="https://www.instagram.com/_chetan_darade_?igsh=MTBzYnFzdjV4ZGllMQ==" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-white hover:underline"><Instagram /></a>
                        </div>
                    </div>

                </div>


                <div className="sm:w-[60%] md:w-[40%]  w-[80%] my-10 text-center bg-[#0d0f18] shadow-2xl shadow-gray-950 rounded-lg transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl relative">

                    <form onSubmit={sendMessage} method="POST" className="flex flex-col gap-5 w-9/10 sm:w-7/10 m-auto my-10">

                        <h4 className="font-bold text-xl mb-0">Send a Message</h4>
                        <div className="flex gap-0 flex-col justify-start ">
                            <label htmlFor="name">Name:</label>
                            <input type="text"
                                name="name"
                                placeholder="Chetan Darade..."
                                onChange={handleChange}
                                    value={form.name}

                                required className="p-3 rounded bg-gray-800 border w-auto border-gray-700 text-white focus:outline-offset-2 focus:outline-2 active: focus:border-purple-600 hover:border-purple-500" />
                        </div>
                        <div className="flex gap-0 flex-col justify-start ">
                            <label htmlFor="email">Email:</label>
                            <input type="text"
                                name="email"
                                placeholder="you@example.com"
                                onChange={handleChange}
                                    value={form.email}

                                required className="p-3 rounded bg-gray-800 border w-auto border-gray-700 text-white focus:outline-none focus:border-purple-600 hover:border-purple-500" />
                        </div>
                        <div className="flex gap-0 flex-col justify-start ">
                            <label htmlFor="message">Message:</label>
                            <textarea type="textarea"
                                name="message"
                                placeholder="Hello, I'd like to talk about"
                                onChange={handleChange}
                                    value={form.message}

                                required className="p-3 rounded bg-gray-800 border w-auto border-gray-700 text-white focus:outline-none focus:border-purple-600 min-h-30 hover:border-purple-500" />
                        </div>

                        <button type="submit" className="border-2 w-full border-purple-700 rounded-xl py-1.5 text-purple-700 hover:bg-purple-600 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-purple-800  flex gap-3 justify-center active:bg-violet-700" disabled={status === "Sending..."}>Send Message <Send /></button>


                        {/* Status text */}
                        {status && <p className="text-center">{status}</p>}

                    </form>
                </div>
            </div>
            <a href="#" className="bg-[#0d0f18] rounded-full justify-center flex fixed right-5 text-center items-center bottom-20  h-10 w-10 text-purple-700"><ArrowUp /></a>

        </div>
    );
}