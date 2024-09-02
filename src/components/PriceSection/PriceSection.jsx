import s from "./PriceSection.module.scss";

import btc from "../../assets/btc.svg";
import eth from "../../assets/eth.svg";
import ltc from "../../assets/ltc.svg";
import doge from "../../assets/doge.svg";

function PriceSection() {
  return (
    <section className={s.container}>
      <h1 className={s.container__header}>
        Cryptocurrency <span className={s.container__header__span}>Prices</span>
      </h1>
      <section className={s.container__iconsWrapper}>
        <div className={s.container__iconsWrapper__iconBox}>
          <img
            className={s.container__iconsWrapper__iconBox__img}
            src={btc}
            alt="btc icon"
          />
          <span className={s.container__iconsWrapper__iconBox__price}>
            $34.653
          </span>
        </div>{" "}
        <div className={s.container__iconsWrapper__iconBox}>
          <img
            className={s.container__iconsWrapper__iconBox__img}
            src={btc}
            alt="btc icon"
          />
          <span className={s.container__iconsWrapper__iconBox__price}>
            $34.653
          </span>
        </div>{" "}
        <div className={s.container__iconsWrapper__iconBox}>
          <img
            className={s.container__iconsWrapper__iconBox__img}
            src={btc}
            alt="btc icon"
          />
          <span className={s.container__iconsWrapper__iconBox__price}>
            $34.653
          </span>
        </div>
      </section>
    </section>
  );
}

export default PriceSection;
