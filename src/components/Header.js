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
        {console.log(this.props.menus[0])}
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/">
              <h1>Game Reviews</h1>
            </NavLink>
          </li>
        </ul>
        <nav className="nav nav-pills nav-justified">
          <NavLink
            onClick={this.test}
            className={
              this.props.menus[0].PCTab
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
            to="/pc"
          >
            PC
          </NavLink>
          <NavLink
            className={
              this.props.menus[0].ConsoleTab
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
            to="/console"
          >
            Console
          </NavLink>
          <NavLink
            className={
              this.props.menus[0].VRTab
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
            to="/vr"
          >
            VR
          </NavLink>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state, props) => ({
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
