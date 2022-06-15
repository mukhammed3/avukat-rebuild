import React from "react";

import { ReactComponent as IconMail } from "./Svg/Vector.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-mail">
          <div className="footer-mail__line">
            <IconMail />
            <a href="mailTo:info@avukat.ua">info@avukat.ua</a>
          </div>
        </div>
        <div className="footer__text">
          <p lang="tr">
            «A&A» Hukuk Ve Danışmanlık Bürosu | Tüm Hakları Saklıdır
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
