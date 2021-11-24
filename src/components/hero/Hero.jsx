import "./hero.css"
import portrait from "../../img/james-portrait.png"
import { Button } from "../ui/Button"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <div className="hero-text">
                    Hello, I'm James - a 
                    <span className="hero-bold"> frontend developer </span>
                    and<span className="hero-bold"> UX/UI designer </span>
                    based in Sydney.
                </div>
                <Button
                    className="hero-button"
                    onClick={() => { window.open("https://www.linkedin.com/in/jamesdaviesfox/", "_blank") }}
                    type="Button"
                    buttonStyle="btn--primary--outline"
                    buttonSize="btn--large"
                > Connect on LinkedIn
                </Button>
            </div>
            <div className="hero-right">
                <img src={portrait} alt="James" className="james-portrait" />
            </div>
        </div>


    )
}

export default Hero;
