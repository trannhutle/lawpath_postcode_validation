import React from "react";
import PostCodeValidation from "./pages/postCodeValidation";
import "./App.css";
import { Container, Button } from "@material-ui/core";
import { useTranslation, } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };
  return (
    <div className="App">
      <button type="button" onClick={() => changeLanguage("ru")}>
        {t("translation:de")}
      </button>

      <button type="button" onClick={() => changeLanguage("en")}>
        {t("translation:en")}
      </button>

      <h1>{t("Welcome to React")}</h1>
      <h1>{t("weather.title")}</h1>

      <Container maxWidth="sm">
        <PostCodeValidation />
      </Container>
    </div>
  );
}

export default App;
