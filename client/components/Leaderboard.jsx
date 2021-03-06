import React, { Component } from 'react';
import { render } from 'react-dom';

class Board extends Component{
    constructor() {
        super();

        this.state = {
            rows : [],
        };
    }

    componentDidMount() {
        fetch('/table')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                let rowsArr = [];
                for (let i = 0; i < data.length; i++){
                    rowsArr.push(
                        <tr>
                            <th>{data[i].player_name}</th>
                            <th>{data[i].player_wins}</th>
                            <th>{data[i].player_losses}</th>
                            <th>{data[i].player_net}</th>
                        </tr>
                    )
                }

                this.setState({
                    rows : rowsArr
                })
            })
    }

    render() {
        return (
           <div>
               <h3>Cruderboard</h3>
               <table border="1" align="center" id="table">
                    <tr>
                        <th>Player</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Net Total</th>
                    </tr>
                    <br/>
                    {this.state.rows}
                </table>
           </div> 
        )
    }
}

export default Board