import ChefImgA from "../../img/Mario and Adrian A.jpg";
import ChefImgB from "../../img/Mario and Adrian b.jpg";

function About() {
  return (
    <section className="page__about">
      <div className="about__container _container">
        <div className="about__column">
          <div className="column__header  header-block">
            <h1 className="header-block__title">Little Lemon</h1>
            <p className="header-block__small-title">
              <strong>Chicago</strong>
            </p>
          </div>
          <div className="column__body body-block">
            <p className="body-block__text about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="about__column">
          <img className="about-img" src={ChefImgA} alt="Food" />
          <img className="about-img" src={ChefImgB} alt="Food" />
        </div>
      </div>
    </section>
  );
}

export default About;
