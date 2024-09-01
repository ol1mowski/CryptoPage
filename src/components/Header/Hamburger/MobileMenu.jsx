import React from 'react';
import closeIcons from '../../../assets/closeIcons.svg';
import s from './MobileMenu.module.scss'; 

function MobileMenu({ clickToggleHandler }) {
  return (
    <section className={s.container}>
      <img onClick={clickToggleHandler} src={closeIcons} alt="close icons" className={s.container__closeIcon} />
      <ul className={s.container__menuList}>
        <li className={s.container__menuList__menuItem}>BTC</li>
        <li className={s.container__menuList__menuItem}>ETH</li>
        <li className={s.container__menuList__menuItem}>LTH</li>
        <li className={s.container__menuList__menuItem}>DOG</li>
      </ul>
      
      <ul className={s.container__logActionsList}>
        <li className={s.container__logActionsList__item}>Sign Up</li>
        <li className={`${s.container__logActionsList__item} ${s.container__logActionsList__item_login}`}>Log in</li>
      </ul>
    </section>
  );
}

export default MobileMenu;
