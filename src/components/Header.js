import "./Header.css";
import Modal from "./Modal";

const Header = () => {
  return (
    <div className="header">
      <h1>Jamie's Bookshop</h1>
      <input className="input" type="search" placeholder="Search" />
      <button className="input">
        <Modal />
      </button>
    </div>
  );
};

export default Header;
