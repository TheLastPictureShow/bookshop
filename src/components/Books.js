import "./Books.css";
import Article from "./Article";
import { selectBook } from "../redux/actions";
import { useDispatch } from "react-redux";

const Books = () => {
  const books = [
    { image: "img-1", price: "€9", title: "Enchantress of Florence", cost: 9 },
    { image: "image-2", price: "€12", title: "Endless Nights", cost: 12 },
    { image: "image-3", price: "€8.20", title: "Lord Jim", cost: 8.2 },
    { image: "image-4", price: "€7.60", title: "Black Swan Green", cost: 7.6 },
    { image: "image-5", price: "€9.40", title: "A Feast for Crows", cost: 9.4 },
    { image: "image-6", price: "€8.60", title: "1984", cost: 8.6 },
    { image: "image-7", price: "€8.30", title: "The Eyre Affair", cost: 8.3 },
    { image: "image-8", price: "€6.80", title: "Clockwork Orange", cost: 6.8 },
    { image: "image-9", price: "€7.50", title: "Time's Arrow", cost: 7.5 },
    { image: "image-10", price: "€5.80", title: "Conqueror's Moon", cost: 5.8 },
  ];

  const dispatch = useDispatch();

  const addToCart = (title, cost) => {
    dispatch(selectBook(title, cost));
  };

  return (
    <main className="books">
      {books.map((el, index) => (
        <Article
          image={el.image}
          price={el.price}
          title={el.title}
          cost={el.cost}
          key={index}
          addToCart={() => addToCart(el.title, el.cost)}
        />
      ))}
    </main>
  );
};

export default Books;
