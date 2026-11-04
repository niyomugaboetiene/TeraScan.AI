import About from "./About";
import Disease from "./Disease";
import Footer from "./Footer";
import Home from "./Home";
import HowItWorks from "./HowItWorks";
import Prediction from "./Prediction";

const Entry = () => {
    return (
        <>
            <section id="home">
                <Home />
            </section>

            <section id="how-it-works">
                <HowItWorks />
            </section>

            <section id="prediction">
                <Prediction />
            </section>

            <section id="disease">
                <Disease />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="footer">
                <Footer />
            </section>
        </>
    );
};

export default Entry;