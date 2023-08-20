import "./Main.css";
import FoodImg from "../img/restauranfood.jpg";
import DeliveryIcon from "../img/food-delivery-icon.svg";
import GreekSaladImg from "../img/greek salad.jpg";
import BruchettaImg from "../img/bruchetta.svg";
import LemonDessertImg from "../img/lemon dessert.jpg";

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
          <article>
            <img src={GreekSaladImg} alt="Greek salad" />
            <div className="OneLineItems">
              <h3>Greek salad</h3>
              <p id="price">$12.99</p>
            </div>
            <p id="description">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <a href="/order">Order a delivery</a>
            <span class="icon"></span>
          </article>
          <article>
            <img src={BruchettaImg} alt="Bruchetta" />
            <div className="OneLineItems">
              <h3>Bruchetta</h3>
              <p id="price">$5.99</p>
            </div>
            <p id="description">
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <a href="/order">Order a delivery</a>
            <span class="icon"></span>
          </article>
          <article>
            <img src={LemonDessertImg} alt="Lemon Dessert" />
            <div className="OneLineItems">
              <h3>Lemon Dessert</h3>
              <p id="price">$5.00</p>
            </div>
            <p id="description">
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <a href="/order">Order a delivery</a>
            <span class="icon"></span>
          </article>
        </section>
      </div>
    </main>
  );
}

export default Main;
