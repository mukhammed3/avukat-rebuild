import React from "react";
import { Link } from "react-router-dom";
import RoutesComponent from "../RoutesComponent";

//svg
import { ReactComponent as IconLogo } from "./Svg/Logo.svg";

//trans
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

function Nav() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <div className="containerNav">
        <nav className="nav">
          <Link className="navFont" to="/">
            {/* {t("descr.part1")} */}
            <Trans i18nKey="descr.part1">ГОЛОВНА</Trans>
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
