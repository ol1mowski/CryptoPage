import s from './PriceSection.module.scss';

import btc from '../../assets/btc.svg'
import eth from '../../assets/eth.svg'
import ltc from '../../assets/ltc.svg'
import doge from '../../assets/doge.svg'

function PriceSection() {
  return (
    <section>
      <h1>Cryptocurrency Prices</h1>
      <section>
        <div>
          <img src={btc} alt="btc icon" />
          <span>34</span>
        </div>
      </section>
    </section>
  );
}

export default PriceSection;
