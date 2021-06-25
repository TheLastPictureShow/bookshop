import "./Modal.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";

const Modal = () => {
  const [show, setShow] = useState(true);
  const toggleClassName = show ? "modal display-none" : "modal display-block";
  const handleClose = () => setShow(!show);

  const book = useSelector((state) => state.selectedBook);

  return (
    <main>
      <section>
        <div onClick={handleClose}>
          <div className="btn-modal">
            {book === "" ? <p>{"€0.00"}</p> : <p>{`€${book.cost}`}</p>}{" "}
            <FaCartArrowDown />
          </div>
        </div>
      </section>

      <div className={toggleClassName}>
        <section className="modal-main">
          <div onClick={handleClose}>
            <div className="btn-modal">
              <FaRegWindowClose />
              {book === "" ? (
                <p>{"Your cart is empty"}</p>
              ) : (
                <p>{book.title}</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Modal;
