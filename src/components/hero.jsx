import "./hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <h1>
                    Brewed to
                    <span> Perfection</span>
                </h1>

                <p>
                    Experience handcrafted coffee made from carefully
                    selected beans. Every cup is brewed with passion,
                    creating the perfect place to relax, work, and enjoy.
                </p>

                <div className="hero-buttons">

                    <button className="primary-btn">
                        Explore Menu
                    </button>

                    <button className="secondary-btn">
                        Contact Us
                    </button>

                </div>

            </div>

        </section>
    );
}

export default Hero;