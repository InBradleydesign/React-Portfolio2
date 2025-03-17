import '../CSS/App.css'
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosCodeWorking } from "react-icons/io";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { MdOutlineHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { MdJavascript } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import 'animate.css';



function AboutContainer() {
    return (
        <div className="about-container">
            <div className="about">
                <h3>Sobre mim</h3>
                <h2>Designer & Desenvolvedor Web</h2>
                <p>Ajudo <span className="blue-bold">empresas e profissionais</span> a construir uma identidade forte e
                ganhar destaque no mercado, através de soluções inteligentes para sua empresa ou portfólio pessoal.</p>
                <p id="serv">Unindo minha paixão por Design e Code, crio Layouts e Interfaces modernas e criativas que alavancam sua imagem profissional.</p>

                <div className="buttons">

                <a href="https://wa.me/5592992296513?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20portfolio" target='_blank'>
                <button className='whatsappButton'> <IoLogoWhatsapp/> <span>Contato</span> </button>
                </a>

                <button className='whatsappButton' id='work'> <IoIosCodeWorking/> <span>Trabalhos</span></button>

                </div>

            </div>

            <div className="tecnologias">
                <ul>
                    <li><SiAdobephotoshop/></li>
                    <li><SiAdobeillustrator/></li>
                    <li><SiAdobeindesign/></li>
                    <li id='React'><FaReact/></li> <br />
                    <li className='line'><MdOutlineHtml/></li>
                    <li className='line'><MdCss/></li>
                    <li className='line'><MdJavascript/></li>
                </ul>
            </div>

        </div>
    )
}

export default AboutContainer;