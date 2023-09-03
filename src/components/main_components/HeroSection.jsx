import FoodImg from "../../img/restauranfood.jpg";

function HeroSection() {
  return (
    <section className="page__hero hero-section">
      <div className="hero-section__container _container">
        <div className="hero-section__column">
          <div className="column__header  header-block">
            <h1 className="header-block__title">Little Lemon</h1>
            <p className="header-block__small-title">
              <strong>Chicago</strong>
            </p>
          </div>
          <div className="column__body body-block">
            <p className="body-block__text hero-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button className="btn">Reserve a Table</button>
        </div>
        <div className="hero-section__column">
          <img className="hero-section-img" src={FoodImg} alt="Food" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
