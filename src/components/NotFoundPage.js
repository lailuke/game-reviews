import React from "react";
import Axios from "axios";

const NotFoundPage = () => {
  const buttonclick = () => {
    Axios.get("https://api.github.com/users/mapbox").then(response => {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    });
  };
  return <button onClick={buttonclick}>404</button>;
};

export default NotFoundPage;
