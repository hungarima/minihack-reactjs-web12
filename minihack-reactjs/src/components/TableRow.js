import React, { Component } from 'react';

//TODO: calculate sumofscores on a row, check if it's equals 0
class TableRow extends Component {
    _handleChange = (event) => {
        let row = event.target.getAttribute('data-indexrow');
        let col = event.target.getAttribute('data-indexcol');
        console.log(this.props.scores[0][1]);
        let updatedScores = this.props.scores;
        updatedScores[row][col] = parseInt((event.target.value), 10);
        this.props.updateScores(updatedScores);
    }
    render() {
        let cells = [];

        this.props.score.map((cell, index) => (
            cells.push(
                <td key={index}>
                    <input data-indexrow={this.props.id} data-indexcol={index} type="number" className="form-control" defaultValue={cell}
                        onInput={this._handleChange} />
                </td>
            )
        ));
        return (
            <tr>
                <th scope="row"> {this.props.id + 1} <span>*Sum of score need to be 0!</span></th>
                {cells}
            </tr>
        );
    }
}

export default TableRow;