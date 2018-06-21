import React, { Component } from 'react';

class Game extends Component {
  render() {

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

              <th scope="col" >0</th>
              <th scope="col" >0</th>
              <th scope="col" >0</th>
              <th scope="col" >0</th>

            </tr>
          </thead>
          <tbody>

            <tr>
              <th scope="row"> <span>*Sum of score need to be 0!</span></th>
              <td><input data-indexRow="{{@../index}}" data-indexCol="{{@index}}" class="form-control" type="number" value="{{this}}" /></td>
            </tr>

          </tbody>
        </table>

        <div className="text-center">
          <button className="btn btn-danger" id="add_round">ADD ROUND</button>
        </div>
      </div>

    );
  }
}

export default Game;