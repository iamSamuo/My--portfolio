import React from "react";
import {FaGithub,FaLinkedin} from "react-icons/fa"

const Footer = () =>{
    return(
    <footer className="footer">
        <h2 className="footer-p-h2">Let's Work Together.</h2>
        <p className="footer-p-h2"> 
            Feel free to reach out if you're looking for a developer, 
            have a question, or just want to connect. 
        </p>
        <p className="footer-p-a"><a href="www.gmail.com">samuokim@gmail.com</a></p>
        <div className="footer-socials">
            <p>Sammy Kariuki.</p>

            <div className="footer-social-icons">
                <a href="https://github.com/iamSamuo">
                    <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/sammy-kariuki-71328215b">
                    <FaLinkedin/>
                </a>
            </div>

        </div>
    </footer>)

}

export default Footer