import React from "react";

//svg
import { ReactComponent as IconPhone } from "./Svg/Phone.svg";
import { ReactComponent as IconMail } from "./Svg/Mail.svg";
import { ReactComponent as IconFacebook } from "./Svg/Facebook.svg";
import { ReactComponent as IconLinkedin } from "./Svg/Linkedin.svg";
import { ReactComponent as IconMaps } from "./Svg/Maps.svg";

import { ReactComponent as IconUA } from "./Svg/UAflag.svg";
import { ReactComponent as IconTR } from "./Svg/TRflag.svg";

import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

function Head() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <div className="containerHeader">
        <header className="fixedHead">
          <div className="fixedHead__left">
            <a className="iconParent" href="tel:+380638698918">
              <IconPhone />
              <a href="tel:+380638698918">+380 63 869 8918</a>
            </a>
            <a className="iconParent" href="mailTo:info@avukat.ua">
              <IconMail />
              <a href="mailTo:info@avukat.ua">info@avukat.ua</a>
            </a>
            <a className="iconParent" href="m">
              <IconFacebook />
            </a>
            <a className="iconParent" href="m">
              <IconLinkedin />
            </a>
            <a className="iconParent" href="m">
              <IconMaps />
            </a>
          </div>
          <div className="fixedHead__right">
            <button type="button" onClick={() => changeLanguage("ua")}>
              <IconUA />
            </button>
            <button type="button" onClick={() => changeLanguage("tr")}>
              <IconTR />
            </button>
          </div>
        </header>
      </div>
      <div className="underHead"></div>
    </>
  );
}

export default Head;
