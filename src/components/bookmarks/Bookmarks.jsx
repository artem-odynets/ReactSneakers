import Header from "../header/Header";
import "./bookmarks.css";
import { useEffect } from "react";

const Bookmarks = ({
  isOpen,
  favoriteItems = [],
  drawerItems = [],
  toggleFavorite,
  toggleDrawer,
  formatNumber,
}) => {
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
        className={`overlay ${isOpen ? "openeds" : ""}`}
        onClick={toggleFavorite}
      ></div>
      <div className={`bookmarks ${isOpen ? "openeds" : ""}`}>
       <div className="wrap-book">
        <div className="bookmarks-nav">
          <Header
            formatNumber={formatNumber}
            toggleDrawer={toggleDrawer}
            toggleFavorite={toggleFavorite}
            drawerItems={drawerItems}
          />
        </div>

        <div className="wrapper-bookmarks">
          <div className="header-bookmarks">
            <button onClick={toggleFavorite}>
              <img
                src={"/img/bookmarks/bookmarks-arrow.png"}
                height={"35"}
                width={"35"}
                alt="Remove"
              />
            </button>
            <h2>Мої закладки</h2>
          </div>
        </div>

        <div className="wrapper-items">
          {favoriteItems.length > 0 ? (
            favoriteItems.map((item) => (
              <div className="offer-bookmarks" key={item.id}>
                <img
                  src={item.imgUrl}
                  height={"85"}
                  width={"95"}
                  alt={item.name}
                />
                <div className="inner-bookmarks">
                  <p>{item.name}</p>
                  <b>{item.price} грн</b>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-info">
            <div className="wrapper-empty-bookmarks">
              <img src="./img/bookmarks/empty-bookmarks.png" />
              
              <h3>Закладок немає :(</h3>
              <p>Ви нічого не додавали до закладок</p>
             
              <button
                onClick={toggleFavorite}
                className="empty-button-bookmarks"
              >
                <img src="./img/cart/empty-arrow.png" />
                Повернутися назад
              </button>
            </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
