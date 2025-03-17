import "../CSS/App.css"
import "../CSS/index.css"

function Header() {
    return (
    <div id="menu-itens">
        <div class="logo">Bradley</div>
        <div class="itens-container">
            <ul class="itens-main-menu">
                <li><a href="#" id="home-button" class="padrao">Home</a></li>
                <li><a href="#" id="about-button" class="padrao">About</a></li>
                <li><a href="#" id="work-button" class="padrao">Work</a></li>
                <li><a href="#" id="contact-button" class="padrao">Contact</a></li>
            </ul>
        </div>
    </div>
    )
}

export default Header;