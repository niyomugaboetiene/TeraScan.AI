import SampleBg from "./assets/new_bg.png";

const About = () => {

    return (
        <div className="relative w-full min-h-screen bg-[#06131F] overflow-hidden">
             <div className="w-full max-w-6xl mx-auto">
                <div className="flex space-x-3">
                    <div>
                       <div className="absolute mt-52">
                            <h1 className="text-5xl font-bold text-slate-100">About TeraScan AI</h1>
                            <h1 className="mt-8 text-2xl text-slate-100 font-bold">Smart technology for healthier potato crops.</h1>
                            <p className="mt-8 text-2xl text-slate-100">TeraScan AI is an AI-powered web application designed to help <br />
                            farmers detect potato disease early. Our mission is to use <br />
                            technology to improve crop health, increase productivity, <br />
                            and support sustainable agricultural in Rwanda and beyond
                            </p>
                             <button className="bg-green-400 py-3 px-6 mt-8 rounded-lg text-slate-100 font-bold">Our Mission</button>
                       </div>
                    </div>
                    <div className="ms-92">
                        <img src={SampleBg} alt="Bg" />
                    </div>
                </div>
             </div>
        </div>
    )

}

export default About