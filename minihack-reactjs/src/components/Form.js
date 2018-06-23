import React, { Component } from 'react';

class Form extends Component {
    constructor () {
        super();
        this.state = {
            player1: '',
            player2: '',
            player3: '',
            player4: ''

        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    _handleSubmit = event => {
        event.preventDefault();
        this.props.startPlaying();
        this.props.updateName(this.state.player1, this.state.player2, this.state.player3, this.state.player4);
        console.log(this.state.player1 +" "+ this.state.player2)
        
    };
    

  render() {
    return (
        <div className="container">
            <form onSubmit = {this._handleSubmit} id="create_game_form" className="text-center">
                <div className="form-group">
                    <input type="text" placeholder="Player 1..." name="player1" className="form-control border border-danger" required onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Player 2..." name="player2" className="form-control border border-danger" required onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Player 3..." name="player3" className="form-control border border-danger" required onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Player 4..." name="player4" className="form-control border border-danger" required onChange={this.handleChange}/>
                </div>
                
                <button type="submit" className="btn btn-danger">CREATE NEW GAME</button>
            </form>
        </div>
        
    );
  }
}

export default Form;