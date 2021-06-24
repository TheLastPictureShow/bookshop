import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const book = useSelector((state) => state.selectedBook);
  console.log("book is", book);
  return (
    <div className="header">
      <h1>Jamie's Bookshop</h1>
      <input type="search" placeholder="Search" name="" value="" />
      {book.cost === undefined ? null : (
        <p>{`You have selected ${book.title}`}</p>
      )}
    </div>
  );
};

export default Header;
