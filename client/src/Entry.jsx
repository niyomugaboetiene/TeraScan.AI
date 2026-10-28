import Disease from "./Disease";
import Home from "./Home";
import HowItWorks from "./HowItWorks";
import Prediction from "./Prediction";

const Entry = () => {
    return (
         <>
           <section id="home">
                <Home />
           </section>
           <section id="home">
                <HowItWorks />
           </section>
           <section id="prediction">
               <Prediction />
           </section>
           <section id="disease">
               <Disease />
           </section>
        </>
    )
}

export default Entry