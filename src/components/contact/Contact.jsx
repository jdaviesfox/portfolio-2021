import "./contact.css";
import { Button } from "../ui/Button";


const Contact = () => {
    return (
        <div className="contact">
            <h1 className="contact-title">
                Get in touch
            </h1>
            <Button
                onClick={() => { window.open("https://www.linkedin.com/in/jamesdaviesfox/", "_blank") }}
                type="button"
                buttonStyle="btn--primary--outline"
                buttonSize="btn--large"
            > Add me on LinkedIn
            </Button>

        </div>
    )
}

export default Contact;
