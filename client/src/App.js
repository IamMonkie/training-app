import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from './logo.svg';
import "./App.css";
import MainNavbar from "./components/Navbar/Navbar";
import TrainingTopic from "./pages/TrainingTopic/TrainingTopic";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MDBAnimation } from "mdbreact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header" id="home">
          <MainNavbar />
        </div>

        <div className="App-body">
          <MDBAnimation type="fadeInUpBig" delay="1s">
            <h2>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h2>
          </MDBAnimation>

          <TrainingTopic />
        </div>
      </div>
    );
  }
}

export default App;
