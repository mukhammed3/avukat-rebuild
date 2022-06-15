import React from "react";

import { ReactComponent as IconLogo } from "./Svg/Logo.svg";

function SectionFour() {
  return (
    <section className="sectionFour">
      <div className="s4Bxs">
        <div className="s4Bxs__left">
          <IconLogo />
          <p lang="tr">Hukuk ve Danışmanlık Bürosu</p>
        </div>
        <div className="s4Bxs__right">
          <p lang="tr">Danışmanlık alın</p>
          <div></div>
          <form>
            <div>
              <label>
                <input type="text" name="name" placeholder="İsim" />
              </label>
              <label>
                <input type="text" name="name" placeholder="E-posta" />
              </label>
            </div>

            <label>
              <input type="text" name="name" placeholder="Mesajınız" />
            </label>
            <input className="sendForm" type="submit" value="GÖNDER" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
