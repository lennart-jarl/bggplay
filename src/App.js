import React from 'react';
import './App.css';
import { connect } from "react-redux"
import { filter, restore } from "./redux/actions"

function App(props) {
  return (
    <div className="App-header">
      <div className="games-container">
        <div className="menu">
          <h1>Your library</h1>
          <div>
            <button className="filterButton" onClick={() => props.restore()}>All</button>
            {
              props.filters.map((key) => {
                return (
                <button className="filterButton" onClick={() => props.filter(key)}>{key}</button>
                );
              })
            }
          </div>
        </div>
        {
          props.data.map((data, key) => {
            return (
              <div className="game-cell" key={key}>
                <div className="gameImg">
                  <img alt="Game visuals" src={data.image} />
                </div>
                <div className="gameInfo">
                  <h2>{data.name}</h2>
                  <div className="additionalInfo">
                    <div> {"Players: " + data.minPlayers + "-" + data.maxPlayers} </div>
                    <div> {"Playingtime: " + data.playingTime} </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    data: state.data,
    filters: state.filters,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filter: (nr) => dispatch(filter(nr)),
    restore: () => dispatch(restore()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
