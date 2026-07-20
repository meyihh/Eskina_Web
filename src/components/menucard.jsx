import "./menucard.css";

function MenuCard({ image, title, price }) {
    return (
        <div className="menu-card">

            <img src={image} alt={title} />

            <h3>{title}</h3>

            <p>{price}</p>

            <button>Order Now</button>

        </div>
    );
}

export default MenuCard;