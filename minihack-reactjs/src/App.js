import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Header from './components/Header';
import Home from './screens/Home';
import Game from './screens/Game';


class App extends Component {
  state = {
    isPlaying: false,
    name: {},
    scores: []
  };

  _startPlaying = () => {
    this.setState({ isPlaying: true })

  };

  _updateName = (player1Name, player2Name, player3Name, player4Name) => {
    this.setState({
      name: {
        player1: player1Name,
        player2: player2Name,
        player3: player3Name,
        player4: player4Name
      }
    }, () => console.log(this.state.name))
  };

  _updateScores = (newScores) => {this.setState({scores: newScores})};

  _addRound = (newRound) => {
    this.setState({ scores: this.state.scores.concat([newRound]) });
  };



  render() {
    return (
      <div className="App">
        <Header />
        {this.state.isPlaying === false 
          ? <Home startPlaying={this._startPlaying} name={this.state.name} updateName={this._updateName} /> 
          : <Game name={this.state.name} addRound={this._addRound} scores={this.state.scores} updateScores={this._updateScores}/>}
      </div>
    );
  }
}

export default App;
