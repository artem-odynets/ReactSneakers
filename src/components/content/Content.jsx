// Імпортуємо зображення
import searchIcon from "/img/content/search.png";
import removeIcon from "/img/cart/remove.svg"; // Припускаючи, що цей файл знаходиться у корені вашого проекту

// ...

const Content = ({
  valueInput,
  searchValue,
  setSearchValue,
  filteredData,
  formatNumber,
}) => {
  return (
    <>
      <div className="wrapper-content">
        <div className="content-menu">
          <h1 className="content-title">Всі кросівки</h1>
          <form className="content-form">
            <img src={searchIcon} className="icon-search" alt="Search Icon" />
            <input
              onChange={valueInput}
              value={searchValue}
              placeholder="Пошук..."
              className="content-input"
            />
            {searchValue && (
              <img
                src={removeIcon}
                onClick={() => setSearchValue("")}
                className="close-value-input"
                alt="Remove Icon"
              />
            )}
          </form>
        </div>
      </div>

      <div className="inner">
        {filteredData.length === 0 ? (
          <div className="not-found-message">
            <p>Нічого не знайдено</p>
          </div>
        ) : (
          filteredData.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              imgUrl={item.imgUrl}
              formatNumber={formatNumber}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Content;