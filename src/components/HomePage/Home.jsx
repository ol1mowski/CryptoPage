import s from "./Home.module.scss";

import image from '../../assets/mainImages.png'

function Home() {
  return (
    <section className={s.container}>
      <section className={s.container__ctaInfo}>
        <h1 className={s.container__ctaInfo__title}>Crypto Charts</h1>
        <p className={s.container__ctaInfo__desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          voluptatibus quos velit libero enim nam consectetur facere tempore
          aliquid? Quaerat tempore aperiam blanditiis magnam quidem alias cum
          fuga delectus iusto.
        </p>
        <button className={s.container__ctaInfo__btn}>Check It Now</button>
      </section>
      <section className={s.container__imageSide}>
        <img className={s.container__imageSide__img} src={image} alt="home page image" />
      </section>
    </section>
  );
}

export default Home;
