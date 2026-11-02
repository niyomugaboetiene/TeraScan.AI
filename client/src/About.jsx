import SampleBg from "./assets/new_bg.png";

const About = () => {

    return (
        <div className="relative w-full min-h-screen bg-[#06131F] overflow-hidden">
            <div className="flex">
                <div>
                    <h1>About TeraScan AI</h1>
                    <h1>Smart technology for healthier potato crops.</h1>
                    <p>TeraScan AI is an AI-powered web application designed to help <br />
                       farmers detect potato disease early. Our mission is to use <br />
                    </p>
                </div>
                <div>
                     <img src={SampleBg} alt="Bg" />
                </div>
            </div>
        </div>
    )

}

export default About