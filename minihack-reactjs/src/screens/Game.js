import React, { Component } from 'react';
import TableRow from '../components/TableRow';

class Game extends Component {
  
  _handleClick = event => {
    // push new scores ([0,0,0,0]) to state ?
    const newRound = [0, 5, 2, 3];
    this.props.addRound(newRound);
  }

  
  render() {
    let sumOfScores = [0,0,0,0];
    this.props.scores.forEach(scoreRow => {
      sumOfScores[0] += scoreRow[0];
      sumOfScores[1] += scoreRow[1];
      sumOfScores[2] += scoreRow[2];
      sumOfScores[3] += scoreRow[3];
    })

    // add_round clicked
    const rows = [];
    this.props.scores.map( (score, index) => (
      rows.push( <TableRow 
                    key={index} 
                    id={index} 
                    score={score} 
                    scores={this.props.scores} 
                    updateScores={this.props.updateScores}
                  /> )
     ) );

    return (

      <div className="container">
        <h1>This is Game</h1>
        <table className="table_score table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">{this.props.name.player1}</th>
              <th scope="col">{this.props.name.player2}</th>
              <th scope="col">{this.props.name.player3}</th>
              <th scope="col">{this.props.name.player4}</th>
            </tr>
            <tr>
              <th scope="col">Sum of Score (<span></span>)</th>

              <th scope="col" >{sumOfScores[0]}</th>
              <th scope="col" >{sumOfScores[1]}</th>
              <th scope="col" >{sumOfScores[2]}</th>
              <th scope="col" >{sumOfScores[3]}</th>

            </tr>
          </thead>
          <tbody>

            {/* <tr>
              <th scope="row"> <span>*Sum of score need to be 0!</span></th>
              <td>
                <input // data-indexRow="{{@../index}}" data-indexCol="{{@index}}" 
                className="form-control" type="number" value="" />
              </td>
            </tr> */}
            {rows}
          </tbody>
        </table>

        <div className="text-center">
          <button onClick={this._handleClick} className="btn btn-danger" id="add_round">ADD ROUND</button>
        </div>
      </div>

    );
  }
}

export default Game;