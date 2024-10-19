import logo from "../assets/bolalogo.png"

function Header () {
    return (
        <header>
            <img src={logo} class="logo"/>
            <nav>
            <a href="https://rockinrio.com/rio/pt-br/line-up/7-minutoz/" target="blank" class="itens-menu">SHOWS</a>
            <a href="https://www.instagram.com/7mzoficial/?hl=en" target="blank" class="itens-menu">O MAIOR DO MUNDO</a>
            <a href="https://www.youtube.com/@Chrono0" class="itens-menu">RECOMENDAÇÃO DO MÊS</a>
            <a href="https://www.youtube.com/@StunkZz" target="blank" class="itens-menu">NOVOS CANAIS</a>
            </nav>
            <div class="relogio">
                10:30
            </div>
        </header>
    )
}
export default Header;