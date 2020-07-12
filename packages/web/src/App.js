import React from "react";
import PostCodeValidation from "./pages/postCodeValidation";
import "./App.css";
import { Container } from "@material-ui/core";
function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <PostCodeValidation />
      </Container>
    </div>
  );
}

export default App;
