import React, { useEffect } from "react";
import "./drawer.css";
import calculateTotal from "../../cartUtils";

const Drawer = ({ isOpen, toggleDrawer, items = [], formatNumber }) => {
  const total = calculateTotal(items);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`overlay ${isOpen ? "opened" : ""}`}
        onClick={toggleDrawer}
      ></div>
      <div className="wrapper-drawer">
        <div className={`drawer ${isOpen ? "opened" : ""}`}>
          <div className="header-cart">
            <h2>Кошик</h2>
            <button onClick={toggleDrawer}>
              <img src={"/img/cart/remove.svg"} height={"50"} width={"50"} alt="Remove Icon" />
            </button>
          </div>

          {items.length > 0 ? (
            items.map((item) => (
              <div className="offer-cart" key={item.id}>
                <img src={item.imgUrl} height={"85"} width={"95"} alt={item.name} />
                <div className="inner-cart">
                  <p>{item.name}</p>
                  <b>{formatNumber(item.price)} грн</b>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-cart-message">
              <img src={"/img/cart/empty.png"} alt="Empty Cart" />
              <h3>Кошик порожній</h3>
              <p className="line-break">
                <span>Додайте хоча б одну пару </span>
                <br /> кросівок, щоб зробити замовлення.
              </p>

              <button onClick={toggleDrawer} className="empty-cart-button">
                <img src={"/img/cart/empty-arrow.png"} alt="Empty Arrow" />
                Повернутися назад
              </button>
            </div>
          )}

          {items.length > 0 && (
            <div className="cart-summary">
              <ul>
                <li>
                  <span>Разом:</span>
                  <div className="dashed"></div>
                  <b>{formatNumber(total)} грн</b>
                </li>
              </ul>
              <ul>
                <li>
                  <span>Податок 3%:</span>
                  <div className="dashed"></div>
                  <b>{formatNumber((total * 0.03).toFixed(2))} грн</b>
                </li>
              </ul>

              <button className="order-btn">
                <img src={"/img/cart/arrow-order.svg"} alt="Arrow Order" />
                Оформити замовлення
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Drawer;