import { addCell, removeCell } from 'actions/cells';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Grid from 'components/grid';
import calculateConnecteds from 'services/compute-largest';

class HomeContainer extends Component {
  calculateConnecteds() {
    const { selectedCells } = this.props;
    return calculateConnecteds(selectedCells);
  }

  handleCellClick(coordinates) {
    const { addCellAction, removeCellAction, selectedCells } = this.props;
    if (selectedCells.includes(coordinates)) {
      removeCellAction(coordinates);
    } else {
      addCellAction(coordinates);
    }
  }

  render() {
    const { selectedCells } = this.props;

    return (
      <div className="app-container">
        <Grid
          onCellClick={this.handleCellClick.bind(this)}
          selectedCells={selectedCells}
        />
        <div className="row center">
          {selectedCells.length
            ? <h3>{`Largest block of connected black cells is formed by ${this.calculateConnecteds.call(this)} cells`}</h3>
            : <h3>No cell selected</h3>}
        </div>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  addCellAction: PropTypes.func.isRequired,
  removeCellAction: PropTypes.func.isRequired,
  selectedCells: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  selectedCells: state.cells.selected,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addCellAction: addCell,
  removeCellAction: removeCell,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
