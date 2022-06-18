import React from "react";
// import { useTranslation } from "react-i18next";
// import { Trans } from "react-i18next";

function SectionThree() {
  // const { t, i18n } = useTranslation();

  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // };

  return (
    <section className="sectionExperience">
      <div className="experienceImg">
        <h3>
          HUKUK DAVALARI ALANINDA <span>17</span> YILLIK DENEYİM
        </h3>
        {/* <Trans i18nKey="descr.part1">Part1 TR</Trans>
        <div>{t("descr.part2")}</div> */}
      </div>
    </section>
  );
}

export default SectionThree;
