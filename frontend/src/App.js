import React from "react";
import Routing from "./routes";
import Header from "./components/Header/Header";
import "./styles/header.css";
import "./styles/home.css";
import "./styles/addJob.css";

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
