import React from "react";
// === Components ===
import AppLogo from "./images/app-logo.png";
import SecurityStrategy from "./components/SecurityStrategy";
import Container from "react-bootstrap/Container";
// === Styles ===
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App__header">
        <img src={AppLogo} alt="app-logo" className="App__logo" />
      </div>
      <body className="App__body">
        <Container>
          <SecurityStrategy />
        </Container>
      </body>
    </div>
  );
}

export default App;
