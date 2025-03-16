import '../CSS/App.css'
import '../CSS/templates.css'
import { IoLogoWhatsapp } from "react-icons/io";



function ContatoCont() {
    return (
        <div className="workmaster" id='contatos'>

        <h3 className='setores' id='contatosh'>Contato</h3>

            <div className="sites">

                <div className="template-tabs" id='contatotab'>

                    <a href="https://wa.me/5592992296513" target='_blank'>
                    <div className="template" id='zap'>
                        <div className="info-template">

                        </div>
                    </div>
                    </a>

                    <a href="mailto:bradleylukka@gmail.com" target='_blank'>
                    <div className="template" id='mail'>
                        <div className="info-template">

                        </div>
                    </div>
                    </a>

                </div>
            </div>

        </div>
    )
}

export default ContatoCont