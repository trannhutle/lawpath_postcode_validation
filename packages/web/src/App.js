import React, { Suspense } from "react";
import PostCodeValidation from "./pages/postCodeValidation";
import { Container } from "@material-ui/core";
import { Headers } from "./components/header";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
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
      </Container>
    </div>
  );
}

export default App;
