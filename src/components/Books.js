import "./Books.css";
import Article from "./Article";

const Books = () => {
  return (
    <main className="books">
      <Article image="image-1" price="€10" title="Enchantress of Florence" />
      <Article image="image-2" price="€12" title="Endless Nights" />
      <Article image="image-3" price="€9" title="Lord Jim" />
      <Article image="image-4" price="€7" title="Black Swan Green" />
    </main>
  );
};

export default Books;
