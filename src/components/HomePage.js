import React from "react";
import CardList from "./CardList";

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
