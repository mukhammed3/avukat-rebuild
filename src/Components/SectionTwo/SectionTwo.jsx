/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//svg
import { ReactComponent as IconTime } from "./Svg/time.svg";
import { ReactComponent as IconGoal } from "./Svg/goal.svg";
import { ReactComponent as IconChat } from "./Svg/chat.svg";
import { ReactComponent as IconSecurity } from "./Svg/security.svg";

import { ReactComponent as IconArrow } from "./Svg/arrowBtn.svg";

import welcomeImg from "./Assets/welcomeLeft.jpg";

function SectionTwo() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="sectionTwo ">
      <div className="main-boxes main-container">
        <div className="main-boxes__item">
          <div className="inBox">
            <div className="inBoxLeft">
              <IconTime />
            </div>
            <div className="inBoxRight">
              <h3 lang="tr">PLANLAMA</h3>
              <p lang="tr">
                Belirlenen hedefi doğru ve strateji ile çözmek için uygun
                planlama yapılır ve bu planlama dahilşnde süreçler etkin olarak
                yönetilir.
              </p>
            </div>
          </div>
          <div className="inBoxLine"></div>
        </div>
        <div className="main-boxes__item">
          <div className="inBox">
            <div className="inBoxLeft">
              <IconGoal />
            </div>
            <div className="inBoxRight">
              <h3 lang="tr">HEDEF</h3>
              <p lang="tr">
                Hukukı sorunlar alanında uzman kadromuz tarafından belirlenerek
                en uygun çözüm ve yol haritası oluşturulur
              </p>
            </div>
          </div>
          <div className="inBoxLine"></div>
        </div>
        <div className="main-boxes__item">
          <div className="inBox">
            <div className="inBoxLeft">
              <IconChat />
            </div>
            <div className="inBoxRight">
              <h3 lang="tr">YAKLAŞIM</h3>
              <p lang="tr">
                Her türlü hukuki sorun, değerine bakılmaksızın ve müvekkil
                ayrımı yapılmaksızın aynı ciddiyet ve özenle çözülür.
              </p>
            </div>
          </div>
          <div className="inBoxLine"></div>
        </div>
        <div className="main-boxes__item">
          <div className="inBox">
            <div className="inBoxLeft">
              <IconSecurity />
            </div>
            <div className="inBoxRight">
              <h3 lang="tr">STRATEJİ</h3>
              <p lang="tr">
                Doğru yaklaşımla belirlenen hedefe ulaşmak için hızlı ve
                ekonomik yolu tercih edilir.
              </p>
            </div>
          </div>
          <div className="inBoxLine"></div>
        </div>
      </div>
      <div className="main-container">
        <div className="main-welcome">
          <div className="main-welcome__item">
            <img src={welcomeImg} alt="Law Company" />
          </div>
          <div className="main-welcome__item">
            <h3 lang="tr">A&A HUKUK BÜROSUNA HOŞ GELDİNİZ</h3>
            <div className="welcomeLine"></div>
            <p lang="tr">
              Bir Hukuk Bürosu olarak, temsil ettiğimiz müvekkillere, yüksek
              kalitede hukuk hizmeti sunabilmek amacıyla ülkemizdeki ve
              dünyadaki gelişmeleri uzman ekibimizle, yakından takip etmekteyiz.
            </p>
            <Link to="/iletisim" className="welcome-button">
              <span className="welcome-button__text">İLETİŞİM</span>
              <IconArrow />
            </Link>
          </div>
        </div>
      </div>
      {/* <IconScales className="scalesWelcome" /> */}
    </section>
  );
}

export default SectionTwo;
