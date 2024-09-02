import s from "./PriceSection.module.scss";

import btc from "../../assets/btc.svg";
import eth from "../../assets/eth.svg";
import ltc from "../../assets/ltc.svg";
import doge from "../../assets/doge.svg";
import { useEffect, useState } from "react";

function PriceSection() {
  const [data, setData] = useState({});
  const [loading, setLoadnig] = useState(true);
  const [error, setError] = useState(null);

  const cryptoIcons = {
    BTC: btc,
    ETH: eth,
    LTC: ltc,
    DOGE: doge,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,DOGE&tsyms=USD"
        );
        if (!response.ok) {
          throw new Error("Error");
        }
        const result = await response.json();
        setData(result);
      } catch (e) {
        setError(e);
      } finally {
        setLoadnig(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>;

  return (
    <section className={s.container}>
      <h1 className={s.container__header}>
        Cryptocurrency <span className={s.container__header__span}>Prices</span>
      </h1>
      <section className={s.container__iconsWrapper}>
        {Object.keys(data).map((crypto) => (
          <div key={crypto} className={s.container__iconsWrapper__iconBox}>
            <img
              className={s.container__iconsWrapper__iconBox__img}
              src={cryptoIcons[crypto]}
              alt={`${crypto} icon`}
            />
            <span className={s.container__iconsWrapper__iconBox__price}>
              $ {data[crypto].USD.toFixed(2)}
            </span>
          </div>
        ))}
      </section>
    </section>
  );
}

export default PriceSection;
