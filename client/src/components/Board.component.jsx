import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { newGame } from '../actions/game';
import SquareComponent from './Square.component';
import WinBoardComponent from './WinBoard.component';
import '../styles/Board.scss';

const propTypes = {
  squares: PropTypes.arrayOf(PropTypes.object).isRequired,
  turnPlayer: PropTypes.number.isRequired,
  playerWin: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  onHandleReset: PropTypes.func.isRequired,
};

export class Board extends React.Component {
  componentDidUpdate() {
    const { squares, playerWin } = this.props;
    if (playerWin) {
      axios.post('/users', { winner: playerWin, squares });
    }
  }

  render() {
    const {
      squares,
      turnPlayer,
      playerWin,
      onHandleReset,
    } = this.props;
    return (
      <div className="gridBoard">
        {
          playerWin
            ? (
              <div className="gridPlayerWin">
                <WinBoardComponent playerWin={playerWin} />
              </div>
            )
            : (
              <div>
                <h2>
                  { turnPlayer === 1 ? 'Player One' : 'Player Two'}
                </h2>
                <div className="gridContainer">
                  {squares.map(square => (
                    <SquareComponent
                      key={square.id}
                      squareId={square.id}
                    />
                  ))}
                </div>
              </div>
            )
        }
        <button className={`buttonBoard${playerWin ? 'Win' : ''}`} type="button" onClick={() => onHandleReset()}>
          {playerWin ? 'New Game' : 'Reset'}
        </button>
      </div>
    );
  }
}

Board.propTypes = propTypes;

const mapStateToProps = state => (
  {
    squares: state.squares,
    turnPlayer: state.turnPlayer,
    playerWin: state.playerWin,
  }
);
const mapDispatchToProps = dispatch => ({ onHandleReset: () => dispatch(newGame()) });
const BoardConnected = connect(mapStateToProps, mapDispatchToProps)(Board);

export default BoardConnected;
