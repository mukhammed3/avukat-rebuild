import React from "react";
import { Link } from "react-router-dom";
import RoutesComponent from "../RoutesComponent";

//css
import s from "./Nav.module.css";
//svg
import { ReactComponent as IconLogo } from "./Svg/Logo.svg";

function Nav() {
  return (
    <>
      <div className={s.container}>
        <nav className={`${s.nav}  `}>
          <Link className={s.navFont} to="/">
            ANA SAYFA
          </Link>
          <Link className={s.navFont} to="/hakkimizda">
            HAKKIMIZDA
          </Link>
          <Link to="/" className={s.navFont}>
            <IconLogo />
          </Link>
          <Link className={s.navFont} to="/hizmetlerimiz">
            HIZMETELİMİZ
          </Link>
          <Link className={s.navFont} to="/iletisim">
            İLETİŞİM
          </Link>
        </nav>
      </div>
      <RoutesComponent />
    </>
  );
}

export default Nav;
