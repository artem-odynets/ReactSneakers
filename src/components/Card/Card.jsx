import "./card.css";
import { useState } from "react";
import { useContext } from "react";
import context from "../../context";
import contextFavorite from "../../favoriteContext";

const Card = ({
  name,
  price,
  imgUrl,
  id,
  formatNumber
}) => {
  const [onPluse, setOnPluse] = useState(false);
  const [favorite, setFavorite] = useState(true);
  const contextValue = useContext(context);
  const favoriteContextValue = useContext(contextFavorite);
  
  const onClickPluse = () => {
    setOnPluse(!onPluse);
    contextValue({ id, name, price, imgUrl });
  };

  const onClickFavorite = () => {
    setFavorite(!favorite);
    favoriteContextValue({ id, name, price, imgUrl });
  };

  return ( 
    <>
    <div className="wrapper-card">
      <div className="offer-card">
        <img
          src={
            favorite
              ? "./img/content/favorite.png"
              : "./img/content/favorite-active.png"
          }
          onClick={onClickFavorite}
          className="card-favorite"
        />
        <div className="inner-card">
          <img src={imgUrl} alt="Sneakers Card" />
          <p>{name}</p>
        </div>
        <div className="price-card">
          <div className="inner-price-card">
            <p>Цiна:</p>
            <b>{formatNumber(price)} грн</b>
          </div>
          <img
            src={
              onPluse ? "./img/content/check.svg" : "./img/content/add-cart.svg"
            }
            onClick={onClickPluse}
            className="add-sneakers"
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default Card;
