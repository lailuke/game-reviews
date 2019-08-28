import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

export const CardList = props => (
  <div className="card-deck">
    {props.games[0].map(game => {
      return <Card key={game.id} {...game} />;
    })}
  </div>
);

const mapStateToProps = state => ({
  games: state.gameReducer
});

export default connect(mapStateToProps)(CardList);
