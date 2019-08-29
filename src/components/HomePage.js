import React from "react";
import CardList from "./CardList";
import "../styles/home.css";

const HomePage = () => {
  return (
    <>
      <CardList type={"PC"} />
      <CardList type={"CON"} />
      <CardList type={"VR"} />
    </>
  );
};

export default HomePage;
