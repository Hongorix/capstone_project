import testimonialsData from "./data/TestimonialsData";

function Testimonials() {
  return (
    <section className="page__testimonials">
      <div className="testimonials__container _container">
        <div className="testimonials__header testimonials-block">
          <div className="header-block__column">
            <h1 className="header-block__title">Testimonials</h1>
          </div>
        </div>
        <div className="testimonials__body">
          <div className="testimonials__column testimonials-column">
            {testimonialsData.map((testimonial, index) => (
              <article className="testimonials__item" key={index}>
                <h2 className="testimonials-column__header">
                  {testimonial.rating}
                </h2>
                <img
                  className="testimonials-column__image"
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                />
                <p className="testimonials-column__header">
                  {testimonial.name}
                </p>
                <p className="testimonials-column__text">
                  {testimonial.review}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
