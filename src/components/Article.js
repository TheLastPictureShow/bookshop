import "./Article.css";
import "./Images.css";
import { BiBasket } from "react-icons/bi";

const Article = ({ image, price, title, cost, addToCart }) => {
  return (
    <article>
      <div className={`wrapper ${image}`}></div>
      <div className="details">
        <div className="price">
          <p>{price}</p>
        </div>
        <div className="title">
          <p>{title}</p>
        </div>
        <button className="add-to-basket" onClick={addToCart}>
          <p>Add to Cart</p>
          <BiBasket />
        </button>
      </div>
    </article>
  );
};

export default Article;
