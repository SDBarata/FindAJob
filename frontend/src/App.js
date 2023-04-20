import React from "react";
import Routing from "./routes";
import Header from "./components/Header/Header";
import "./styles/header.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
