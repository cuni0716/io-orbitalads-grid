import React, { Component } from 'react';
import PropTypes from 'prop-types';

const col = 'col s1 m1 l1';
const offset = 'offset-s1 offset-m1 offset-l1';

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 10,
      columns: 10,
    };
  }

  onCellClick(coordinates) {
    const { onCellClick } = this.props;
    onCellClick(coordinates);
  }

  render() {
    const { selectedCells } = this.props;
    const { rows, columns } = this.state;

    return (
      <div className="container">
        {[...Array(rows)].map((row, rIndex) => (
          <div className="row">
            {[...Array(columns)].map((column, cIndex) => (
              <div
                id={`${cIndex}${rows - rIndex - 1}`}
                className={`${col} ${cIndex === 0 ? offset : ''} ${selectedCells.includes(`${cIndex}${rows - rIndex - 1}`) ? '-selected' : ''} cell`}
                onClick={this.onCellClick.bind(this, `${cIndex}${rows - rIndex - 1}`)}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

Grid.propTypes = {
  onCellClick: PropTypes.func.isRequired,
  selectedCells: PropTypes.arrayOf(PropTypes.string).isRequired,
};
