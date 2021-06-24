import "./Books.css";
import Article from "./Article";

const Books = () => {
  const books = [
    { image: "image-1", price: "€9.50", title: "Enchantress of Florence" },
    { image: "image-2", price: "€12", title: "Endless Nights" },
    { image: "image-3", price: "€8.20", title: "Lord Jim" },
    { image: "image-4", price: "€7.60", title: "Black Swan Green" },
    { image: "image-5", price: "€9.40", title: "A Feast for Crows" },
    { image: "image-6", price: "€8.60", title: "1984" },
    { image: "image-7", price: "€8.30", title: "The Eyre Affair" },
    { image: "image-8", price: "€6.80", title: "Clockwork Orange" },
    { image: "image-9", price: "€7.50", title: "Time's Arrow" },
    { image: "image-10", price: "€5.80", title: "Conqueror's Moon" },
  ];

  return (
    <main className="books">
      {books.map((el, index) => (
        <Article
          image={el.image}
          price={el.price}
          title={el.title}
          key={index}
        />
      ))}
    </main>
  );
};

export default Books;
