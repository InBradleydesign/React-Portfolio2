import "../CSS/Mainpag.css"
import { IoLogoBehance } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import 'animate.css'; 
import Typical from 'react-typical'


function MainBanner() {
    return (
        <div className="main-container">
            <div className="logo">
                <h1><span className="blue-bold">B</span>radley</h1>
                <p className="blue-bold">
                    [Designer & Desenvolvedor Web]</p>
            </div>

            <ul className="links-menu">
                <li className="links"  id="Behance">
                    <a href="https://www.behance.net/bradleybatista" target="_blank">
                    <IoLogoBehance/>
                    </a>
                </li>
                <li className="links" id="GitHub">
                    <a href="https://github.com/InBradleydesign" target="_blank">
                        <FaGithub/>
                    </a>
                    </li>
                <li className="links" id="Instagram">
                    <a href="https://www.instagram.com/bradleylukka/" target="_blank">
                        <AiFillInstagram/>
                    </a>
                </li>
                <li className="links" id="Linkedin">
                    <a href="https://www.linkedin.com/in/bradley-luka-9b13321a0/" target="_blank">
                        <SiLinkedin/>
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default MainBanner;