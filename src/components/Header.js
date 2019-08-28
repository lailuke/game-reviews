import React from "react";
import { setPCState, setConsoleState, setVRState } from "../actions/menu";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export class Header extends React.Component {
  test = () => {
    this.props.setPCState({
      PCTab: true,
      ConsoleTab: false,
      VRTab: false
    });
  };
  render() {
    return (
      <header>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/">
              <h1>Game Reviews</h1>
            </NavLink>
          </li>
        </ul>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/">
                  <strong>Home</strong>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/PC">
                  <strong>PC</strong>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Console">
                  <strong>Console</strong>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/vr">
                  <strong>VR</strong>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  menus: state.menuReducer
});

const mapDispatchToProps = dispatch => ({
  setPCState: PCMenu => dispatch(setPCState(PCMenu)),
  setConsoleState: ConsoleMenu => dispatch(setConsoleState(ConsoleMenu)),
  setVRState: VRMenu => dispatch(setVRState(VRMenu))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
