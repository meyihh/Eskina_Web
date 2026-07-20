import "./FeaturedMenu.css";

import MenuCard from "../menucard";

function FeaturedMenu() {

    return (

        <section className="featured">

            <h2>Featured Coffee</h2>

            <div className="cards">

                <MenuCard
                    image="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600"
                    title="Caramel Latte"
                    price="₱180"
                />

                <MenuCard
                    image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600"
                    title="Espresso"
                    price="₱150"
                />

                <MenuCard
                    image="https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600"
                    title="Matcha Latte"
                    price="₱190"
                />

            </div>

        </section>

    );

}

export default FeaturedMenu;