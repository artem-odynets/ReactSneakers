import "./App.css";
import { useState, useEffect } from "react";
import context from "./context";
import contextFavorite from "./favoriteContext";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import Content from "./components/content/Content";
import Drawer from "./components/drawer/Drawer";
import Bookmarks from "./components/bookmarks/Bookmarks";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);

  const addToCard = (obj) => {
    const itemIndex = cartItems.findIndex((item) => item.id === obj.id);

    if (itemIndex !== -1) {
      const newCartItems = cartItems.filter((item) => item.id !== obj.id);
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, obj]);
    }
  };

  const addToFavorite = (obj) => {
    const itemIndex = favoriteItems.findIndex((item) => item.id === obj.id);

    if (itemIndex !== -1) {
      const newFavoriteItems = favoriteItems.filter(
        (item) => item.id !== obj.id
      );
      setFavoriteItems(newFavoriteItems);
    } else {
      setFavoriteItems([...favoriteItems, obj]);
    }
  };

  useEffect(() => {
    fetch("https://64d0a297ff953154bb793490.mockapi.io/items")
      .then((response) => {
        return response.json();
      })
      .then((arrayItem) => {
        setItems(arrayItem);
      });
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleFavorite = () => {
    setIsFavoriteOpen(!isFavoriteOpen);
  };

  const valueInput = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredData = items.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const formatNumberWithSpaces = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <>
      <div className="wrapper">
        {cartItems ? (
          <Drawer
            isOpen={isDrawerOpen}
            items={cartItems}
            toggleDrawer={toggleDrawer}
            formatNumber={formatNumberWithSpaces}
          />
        ) : (
          <div>gecnj</div>
        )}

        {favoriteItems && (
          <Bookmarks
            isOpen={isFavoriteOpen}
            favoriteItems={favoriteItems}
            toggleDrawer={toggleDrawer}
            toggleFavorite={toggleFavorite}
            isOpenDarwer={isDrawerOpen}
            drawerItems={cartItems}
            formatNumber={formatNumberWithSpaces}
          />
        )}

        <Header
          toggleDrawer={toggleDrawer}
          toggleFavorite={toggleFavorite}
          isOpen={isDrawerOpen}
          items={cartItems}
          formatNumber={formatNumberWithSpaces}
        />

        <Slider />
        
        <context.Provider value={addToCard}>
          <contextFavorite.Provider value={addToFavorite}>
            <Content
              valueInput={valueInput}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              filteredData={filteredData}
              formatNumber={formatNumberWithSpaces}
            />
          </contextFavorite.Provider>
        </context.Provider>
      </div>
    </>
  );
}

export default App;
