import musica from "../assets/balasegarras.jpeg"
function HeroSection () {
    return (
        <section class="section">
            <div class="hero-section">
                <div class="atual">
                    <a href="https://www.youtube.com/watch?v=6Q8svKIi2N4" target="blank"> <img src={musica} class="musica" /></a>
                    <div><a href="https://www.youtube.com/watch?v=6Q8svKIi2N4" target="blank" class="linkmusica">
                    <p>Balas e Garras -7Minutoz</p>
                    <p>SÁBADOU COM NerdHits</p> </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;