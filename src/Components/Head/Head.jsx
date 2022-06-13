import React from "react";

//svg
import { ReactComponent as IconPhone } from "./Svg/Phone.svg";
import { ReactComponent as IconMail } from "./Svg/Mail.svg";
import { ReactComponent as IconFacebook } from "./Svg/Facebook.svg";
import { ReactComponent as IconLinkedin } from "./Svg/Linkedin.svg";
import { ReactComponent as IconMaps } from "./Svg/Maps.svg";

function Head() {
  return (
    <>
      <div className="containerHeader">
        <header className="fixedHead">
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
        </header>
      </div>
      <div className="underHead"></div>
    </>
  );
}

export default Head;
