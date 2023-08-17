import React from "react";
// === Components ===
import Header from "./components/header/Header";
import SecurityStrategy from "./components/SecurityStrategy/SecurityStrategy";
import Container from "react-bootstrap/Container";
import { connectLocalStorage } from "./utilities/localStorageConnetion";
// === Styles ===
import "./App.css";

function App() {
  const connectLS = connectLocalStorage();
  console.log(connectLS);

  return (
    <div className="App">
      {/* Main Header */}
      <header className="App__header">
        <Header />
      </header>

      {/* Main Body */}
      <section className="App__body">
        <Container className="pt-5 text-left">
          <SecurityStrategy />
        </Container>
      </section>
    </div>
  );
}

export default App;
