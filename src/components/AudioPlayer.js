import React, {Component} from 'react';

class AudioPlayer extends Component {
    componentDidUpdate() {
        const {start, stop, winner, quit, leaderboard} = this.props;
        const player = this.refs.player;

        if (start === true && stop === false && winner === false && quit === false && leaderboard === false) {
            player.play();
        } else if (start === true && stop === false && winner === false && quit === false && leaderboard === false) {
            player.play();
        } else if (start === true && stop === false && winner === true && quit === false && leaderboard === false) {
            player.play();
        }
    };

    render() {
        return (
            <div className="AudioPlayer">
                <audio ref="player" src={this.props.song}></audio>
            </div>
        );
    }
}

export default AudioPlayer;