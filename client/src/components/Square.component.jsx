import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { movePlayer } from '../actions/game';
import findById from '../filters/game';
import '../styles/Square.scss';

const propTypes = {
  squareData: PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
  onHandleMovePlayer: PropTypes.func.isRequired,
};

export const Square = ({ squareData, onHandleMovePlayer }) => {
  const { value, id } = squareData;
  const onHandleClickSquare = (squareId, squareValue) => {
    if (squareValue === 0) {
      onHandleMovePlayer(squareId);
    }
  };
  const handleKeyUp = () => {};

  let squareIcon = <FontAwesomeIcon className="icon-hand" icon={faPlus} size="5x" />;
  if (value === 1) {
    squareIcon = <FontAwesomeIcon className="icon-react" icon={faReact} size="5x" />;
  } else if (value === 2) {
    squareIcon = <FontAwesomeIcon className="icon-vue" icon={faVuejs} size="5x" />;
  }

  return (
    <div
      role="button"
      tabIndex="0"
      className={`borderSquare${value || 'Empty'}`}
      onClick={() => onHandleClickSquare(id, value)}
      onKeyUp={handleKeyUp}
    >
      { squareIcon }
    </div>
  );
};

Square.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
  const squareData = findById(state, ownProps.squareId);
  return {
    squareData,
  };
};
const mapDispatchToProps = dispatch => (
  { onHandleMovePlayer: squareId => dispatch(movePlayer(squareId)) }
);

const SquareConnected = connect(mapStateToProps, mapDispatchToProps)(Square);

export default SquareConnected;
