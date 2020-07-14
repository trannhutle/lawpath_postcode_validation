import React, { Suspense } from "react";
import "./App.css";
import PostCodeValidation from "./pages/postCodeValidation";
import { Container } from "@material-ui/core";
import { Headers } from "./components/header";
import { useTranslation } from "react-i18next";
import { PopupErrorMessage } from "./components/global";

function App() {
  const { i18n } = useTranslation();
  /**
   * Change language of application,
   * It will store the language in local storeage and reload page
   * @param {string} language is a string to set language
   */
  const changeLanguage = (language) => {
    localStorage.setItem("lang", language);
    i18n.changeLanguage(language);
    window.location.reload();
  };

  return (
    <div className="App">
      <Headers changeLanguage={changeLanguage} />
      <Container maxWidth="sm">
        <PostCodeValidation />
        <PopupErrorMessage />
      </Container>
    </div>
  );
}

export default App;
