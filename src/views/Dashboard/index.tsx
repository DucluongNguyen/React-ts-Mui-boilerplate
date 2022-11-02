import React from "react";
import { useTranslation } from "react-i18next";

import { changeLang } from "helpers/lang";
import commonStyles from "components/CommonStyles";

const Dashboard: React.FC = () => {
  //! State
  const { t } = useTranslation();

  const onChangeLanguage = (lang: string) => () => {
    changeLang(lang);
  };

  //! Render
  return (
    <div>
      <span>Example multiple lang (i18n)</span>
      <h4>{t("shared:hello")}</h4>
      <div>
        <button onClick={onChangeLanguage("vi")}>Vi lang</button>
        <button onClick={onChangeLanguage("en")}>Eng lang</button>
        <div>
          <commonStyles.Image src={"https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"} alt="test" />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
