import "./Main.css";
import FoodImg from "../img/restauranfood.jpg";
import articlesData from "./ArticlesData";

// Check
function Main() {
  return (
    <main>
      <div className="OneLineItems" id="HeroSection">
        <div id="HeroSectionContent">
          <h1>Little Lemon</h1>
          <p>
            <strong>Chicago</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Reserve a Table</button>
        </div>
        <img src={FoodImg} alt="Food" />
      </div>
      <div id="Hightlights">
        <div className="OneLineItems">
          <h2>Specials</h2>
          <button>Online Menu</button>
        </div>
        <section>
          {articlesData.map((article, index) => (
            <article key={index}>
              <img src={article.imgSrc} alt={article.title} />
              <div className="OneLineItems">
                <h3>{article.title}</h3>
                <p id="price">{article.price}</p>
              </div>
              <p id="description">{article.description}</p>
              <a href="/order">Order a delivery</a>
              <span className="icon"></span>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Main;
