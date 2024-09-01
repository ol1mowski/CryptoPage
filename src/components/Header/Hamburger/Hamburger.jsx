import { useState } from "react";
import hamburger from "../../../assets/hamburger.svg";

import s from "./Hamburger.module.scss";
import MobileMenu from "./MobileMenu";

function Hamburger() {

    const [clickState, setClickState] = useState(false)

  const clickToggleHandler = () => {
    setClickState(prev => !prev)
  };

  return (
    <nav className={s.container}>
      <img
        onClick={clickToggleHandler}
        className={s.container__hamburgerIcon}
        src={hamburger}
        alt="hamburger icons"
      />
      
      { clickState ? <MobileMenu clickToggleHandler={clickToggleHandler}/> : null }
    </nav>
  );
}

export default Hamburger;
