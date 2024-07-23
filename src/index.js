import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body/body";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import Menu from "./Components/Menu/menu";
import Peliculas from "./Components/Pelicula/peliculas";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Menu />
    <Body />

    
    <Footer />
  </React.StrictMode>
);
