import "./Article.css";

const Article = ({ image, price, title }) => {
  return (
    <article>
      <div className={`${image}`}></div>
      <div className="details">
        <div className="price">
          <p>{`${price}`}</p>
        </div>
        <div className="title">
          <p>{`${title}`}</p>
        </div>
        <p className="add-to-basket">
          <p>Add to Basket</p>
        </p>
      </div>
    </article>
  );
};

export default Article;
