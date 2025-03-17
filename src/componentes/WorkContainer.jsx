import '../CSS/App.css'
import '../CSS/templates.css'
import { IoLogoBehance } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";



function WorkContainer() {
    return (
        <div className="workmaster">

        <h3 className='setores'>Work</h3>

            <div className="sites">

                <div className="template-tabs">

                    <a href="https://m3-gules.vercel.app" target='_blank'>
                    <div className="template" id='M3'>
                        <div className="info-template">
                            <h4>Desenvolvedor Web</h4>
                            <p>Desenvolvimento de site para uma loja/mecânica de motos</p>
                            <p id="tectec">HTML | CSS | JavaScript</p>
                        </div>
                    </div>
                    </a>


                    <a href="https://site-barcos.vercel.app" target='_blank'>
                    <div className="template" id='Barcos'>
                        <div className="info-template">
                            <h4>Desenvolvedor Web</h4>
                            <p>Desenvolvimento de site para uma loja de barcos de aluminío</p>
                            <p id="tectec">HTML | CSS | JavaScript</p>
                        </div>
                    </div>
                    </a>

                    <div className="description">
                    <h2>Desenvolvendo Sites</h2>
                    <p>Criação de WebSite com as principais tecnologias do mercado, <span className="blue-bold">HTML | React | JavaScript</span>
                    , com layouts interativos, impactantes e personalizados para você!</p>
                    </div>

                </div>

                <br /> <br />

                <div className="template-tabs">

                    <div className="description">
                    <h2>Design</h2>
                    <p>Elaboração de Logos, Identidades Visuais, ilustrações e Artes-Visuais, utilizando as principais ferramentas do mercado,  
                    <span className="blue-bold"> Ad Photoshop | Ad Illustrator | AdInDesign</span>
                    , com criatividade e profissionalismo para o melhor resultado.</p>
                    <br />
                    <p id='morework'>Confira um pouco mais do meu trabalho nos links abaixo:</p>
                    <a href="https://www.behance.net/bradleybatista" className="linkwork" target='_blank'><IoLogoBehance /></a>
                    <a href="https://br.pinterest.com/bradleymafra/_pins/" className="linkwork"><FaPinterest /></a>

                    </div>

                    <a href="https://www.behance.net/gallery/221470623/Identidade-Visual-CTK?" target='_blank'>
                    <div className="template" id='CTK'>
                        <div className="info-template">
                            <h4>Design</h4>
                            <p>Elaboração de <span className="blue-bold"> Logo-marca e Identidade Visual</span> para um centro de treinamento.</p>
                            <p id="tectec">Ad Photosho | Ad Illustrator | Ad Indesign</p>
                        </div>
                    </div>
                    </a>

                    <a href="https://m3-gules.vercel.app" target='_blank'>
                    <div className="template" id='Behance2'>
                        <div className="info-template">
                            <h4>Design</h4>
                            <p>Manipulação de imagens com <span className="blue-bold"> Adobe Photoshop</span> para 
                            criar uma arte conceitual inspirada no game VALORANT.</p>
                            <p id="tectec">Ad Photosho | Ad Illustrator | Ad Indesign</p>
                        </div>
                    </div>
                    </a>

                </div>

            </div>

            <div className="design"></div>
        </div>
    )
}

export default WorkContainer