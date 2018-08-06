import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';

import '../styles/Statistics.scss';

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      react: 0,
      vue: 0,
    };
  }

  componentDidMount() {
    axios.get('/users')
      .then((res) => {
        const games = res.data;
        this.setState(() => {
          const tempState = {
            react: games.react,
            reactMovements: games.reactMovements,
            vue: games.vue,
            vueMovements: games.vueMovements,
          };
          return {
            ...tempState,
          };
        });
      });
  }

  render() {
    const { react, vue } = this.state;
    const {
      reactMovements,
      vueMovements,
    } = react !== 0 && this.state;

    const showStadisticsIcon = (mov) => {
      let stadisticsIcon = <FontAwesomeIcon className="icon-hand" icon={faTimes} />;
      if (mov === 1) {
        stadisticsIcon = <FontAwesomeIcon className="icon-react" icon={faReact} />;
      } else if (mov === 2) {
        stadisticsIcon = <FontAwesomeIcon className="icon-vue" icon={faVuejs} />;
      }
      return stadisticsIcon;
    };

    return (
      <div className="girdStatistics">
        <div className="girdReact">
          <h1>
            React wins:
            {
              react
            }
          </h1>
          <h3>
            Partidas:
          </h3>
          {
            react !== 0 && reactMovements.map((games, i) => (
              <div>
                <span>
                  {i + 1}
                  . Game
                </span>
                <div className="gridMovements">
                  {
                    games.movements.map(mov => (
                      showStadisticsIcon(mov)
                    ))
                  }
                </div>
                <br />
              </div>
            ))
          }
        </div>
        <div className="girdVue">
          <h1>
            Vue wins:
            { vue }
          </h1>
          <h3>
            Partidas:
          </h3>
          { vue !== 0 && vueMovements.map((games, i) => (
            <div>
              <span>
                {i + 1}
                . Game
              </span>
              <div className="gridMovements">
                {
                  games.movements.map(mov => (
                    showStadisticsIcon(mov)
                  ))
                }
              </div>
              <br />
            </div>
          ))
          }
        </div>
      </div>
    );
  }
}

export default Statistics;
