import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';
import '../styles/WinBoard.scss';

const propTypes = {
  playerWin: PropTypes.string.isRequired,
};

export const WinBoard = ({ playerWin }) => (
  <div>
    {
      playerWin === 'React'
        ? (
          <div>
            <h1>
              React wins!
            </h1>
            <FontAwesomeIcon
              className="icon-react"
              icon={faReact}
              size="8x"
            />
            <h1>
              React always wins!
            </h1>
          </div>
        )
        : (
          <div>
            <h1>
              Vue wins!
            </h1>
            <FontAwesomeIcon
              className="icon-vue"
              icon={faVuejs}
              size="8x"
            />
          </div>
        )
    }
  </div>
);

WinBoard.propTypes = propTypes;

export default WinBoard;
