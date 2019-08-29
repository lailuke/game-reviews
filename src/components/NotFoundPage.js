import React from "react";
import Axios from "axios";

class NotFoundPage extends React.Component {
  state = {
    url: ""
  };

  buttonclick = () => {
    const url =
      "https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=1";
    Axios.get(url, {
      crossdomain: true
    })
      .then(response => {
        this.setState(state => ({ url: response.data[0] }));
      })
      .catch(error => {
        console.log(error);
      });
  };

  toggleImage = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    return (
      <>
        <button onClick={this.buttonclick}>404</button>
        <img src={this.state.url} alt="x" />
      </>
    );
  }
}

export default NotFoundPage;
