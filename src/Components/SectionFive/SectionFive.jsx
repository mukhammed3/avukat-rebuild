import React from "react";
import { useState } from "react";

function SectionFive() {
  const KYIV =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.2071780531755!2d30.50230805309372!3d50.44473543862191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf168705b125%3A0xd5206ebb82398e38!2zIkEmQSIgSHVrdWsgdmUgRGFuxLHFn21hbmzEsWsgQsO8cm9zdSB8IEF2dWthdCBVa3JheW5h!5e0!3m2!1suk!2s!4v1655324522082!5m2!1suk!2s";
  const KHARKIV =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21732.570892747666!2d36.21740336973651!3d49.99781091829841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a1593688e18d%3A0xf5c364213419ec37!2zIkEmQSIgSHVrdWsgdmUgRGFuxLHFn21hbmzEsWsgQsO8cm9zdSB8IEF2dWthdCBVa3JheW5h!5e0!3m2!1suk!2s!4v1655324396982!5m2!1suk!2s";

  const [map, setMap] = useState(KYIV);
  const [city, setCity] = useState("Kiev");

  //btn

  const initialState = () => 1;
  const [toggleState, setToggleState] = useState(initialState);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <section className="sectionFive map-container">
        <div className="frameBox">
          <iframe
            className="mapKyiv"
            title="Kyiv"
            src={map}
            width="600"
            height="450"
          ></iframe>
          <div className="frameBox__in">
            <p className="textInFrame">{city}</p>
            <div className="lineInFrame"></div>
          </div>
        </div>

        <div className="mapButtons">
          <button
            type="submit"
            onClick={() => {
              setMap(KYIV);
              setCity("Kiev");
              toggleTab(1);
            }}
            className={
              toggleState === 1
                ? "activeBtn navigation-block"
                : "notActiveBtn navigation-block"
            }
          >
            <div className="inBtn">
              <h3 className="inBtn__city">Kiev</h3>
              <div className="inBtn__line"></div>
              <address className="inBtn__address">
                Piraqova caddesi 4/26
              </address>
              <a className="inBtn__phone" href="telTo:+380638698918">
                T. +380 63 869 8918
              </a>
            </div>
          </button>
          <div className="btwMap"></div>
          <button
            type="submit"
            onClick={() => {
              setMap(KHARKIV);
              setCity("Kharkiv");
              toggleTab(2);
            }}
            className={
              toggleState === 2
                ? "activeBtn navigation-block"
                : "notActiveBtn navigation-block"
            }
          >
            <div className="inBtn">
              <h3 className="inBtn__city">Kharkiv</h3>
              <div className="inBtn__line"></div>
              <address className="inBtn__address">
                Puşkinskaya sokağı 40
              </address>
              <a className="inBtn__phone" href="telTo:+380939450500">
                T. +380 93 945 0500
              </a>
            </div>
          </button>
        </div>
      </section>
    </>
  );
}

export default SectionFive;
