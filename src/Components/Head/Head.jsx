import React from "react";
import s from "./Head.module.css";

//svg
import { ReactComponent as IconPhone } from "./Svg/Phone.svg";
import { ReactComponent as IconMail } from "./Svg/Mail.svg";
import { ReactComponent as IconFacebook } from "./Svg/Facebook.svg";
import { ReactComponent as IconLinkedin } from "./Svg/Linkedin.svg";
import { ReactComponent as IconMaps } from "./Svg/Maps.svg";

function Head() {
  return (
    <>
      <div className={s.container}>
        <header className={`${s.fixedHead} `}>
          <a className={s.iconParent} href="tel:+380638698918">
            <IconPhone />
            <a href="tel:+380638698918">+380 63 869 8918</a>
          </a>
          <a className={s.iconParent} href="mailTo:info@avukat.ua">
            <IconMail />
            <a href="mailTo:info@avukat.ua">info@avukat.ua</a>
          </a>
          <a className={s.iconParent} href="m">
            <IconFacebook />
          </a>
          <a className={s.iconParent} href="m">
            <IconLinkedin />
          </a>
          <a className={s.iconParent} href="m">
            <IconMaps />
          </a>
        </header>
      </div>
      <div className={s.underHead}></div>
    </>
  );
}

export default Head;
