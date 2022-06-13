import React from "react";
import { Link } from "react-router-dom";
import RoutesComponent from "../RoutesComponent";

//svg
import { ReactComponent as IconLogo } from "./Svg/Logo.svg";

function Nav() {
  return (
    <>
      <div className="containerNav">
        <nav className="nav">
          <Link className="navFont" to="/">
            ANA SAYFA
          </Link>
          <Link className="navFont" to="/hakkimizda">
            HAKKIMIZDA
          </Link>
          <Link to="/" className="navFont">
            <IconLogo />
          </Link>
          <Link className="navFont" to="/hizmetlerimiz">
            HIZMETELİMİZ
          </Link>
          <Link className="navFont" to="/iletisim">
            İLETİŞİM
          </Link>
        </nav>
      </div>
      <RoutesComponent />
    </>
  );
}

export default Nav;
