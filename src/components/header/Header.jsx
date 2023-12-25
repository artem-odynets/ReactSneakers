import "./header.css";
import calculateTotal from "../../cartUtils";

const Header = ({ toggleDrawer, toggleFavorite, items, formatNumber }) => {
  return (
    <>
      <div className="wrapper-header">
        <div className="header-offer">
          <div className="header-left">
            <a>
              <img src={"/img/header/logo.png"} className="logo" height={"40"} width={"40"} alt="Logo" />
            </a>
            <div className="inner-left">
              <h3>React sneakers</h3>
              <p>Магазин найкращих кросівок</p>
            </div>
          </div>
          <div className="header-right">
            <div className="inner-right">
              <button onClick={toggleDrawer} className="basket-button">
                <img src={"/img/header/basket.svg"} height={"18"} width={"18"} alt="Basket Icon" />
                <span>
                  {items ? formatNumber(calculateTotal(items)) : "0"} грн
                </span>
              </button>
            </div>
            <button onClick={toggleFavorite} className="bookmark-button">
              <img src={"/img/header/bookmark.svg"} height={"20"} width={"20"} alt="Bookmark Icon" />
            </button>
            <button className="user-button">
              <img src={"/img/header/user.svg"} height={"20"} width={"20"} alt="User Icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;