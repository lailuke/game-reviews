import React from "react";
import Axios from "axios";

const NotFoundPage = () => {
  const buttonclick = () => {
    Axios.all([
      Axios.get("https://api.github.com/users/mapbox"),
      Axios.get("https://api.github.com/users/phantomjs")
    ]).then(
      Axios.spread((user1, user2) => {
        console.log("Date created: ", user1.data.created_at);
        console.log("Date created: ", user2.data.created_at);
      })
    );
  };
  return <button onClick={buttonclick}>404</button>;
};

export default NotFoundPage;
