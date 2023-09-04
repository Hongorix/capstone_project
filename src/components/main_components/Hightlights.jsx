import articlesData from "./data/ArticlesData";

function Hightlights() {
  return (
    <section className="page__hightlights">
      <div className="hightlights__container _container">
        <div className="hightlights__header header-block">
          <div className="header-block__column">
            <h1 className="header-block__title">Specials</h1>
          </div>
          <div className="header-block__column">
            <button className="btn">Online Menu</button>
          </div>
        </div>
        <div className="hightlights__body">
          <div className="hightlights__column hightlights-column">
            {articlesData.map((article, index) => (
              <article className="hightlights__item" key={index}>
                <img
                  className="hightlights-column__image"
                  src={article.imgSrc}
                  alt={article.title}
                />
                <div className="OneLineItems">
                  <h2 className="hightlights-column__header">
                    {article.title}
                  </h2>
                  <p id="price">{article.price}</p>
                </div>
                <p className="hightlights-column__text">
                  {article.description}
                </p>
                <a className="hightlights-column__link" href="/order">
                  Order a delivery
                </a>
                <span className="hightlights-column__icon"></span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hightlights;
