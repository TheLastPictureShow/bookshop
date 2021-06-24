import "./Article.css";
import "./Images.css";

const Article = ({ image, price, title }) => {
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
        <button className="add-to-basket">
          <p>Add to Basket</p>
        </button>
      </div>
    </article>
  );
};

export default Article;
