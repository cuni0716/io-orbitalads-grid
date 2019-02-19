import { expect } from 'chai';
import cellsReducer from 'reducers/cells';

describe('Cells reducer', () => {
  let state;

  it('should return initial state', () => {
    state = cellsReducer(state, {});

    expect(state).to.be.an('object');
    expect(state.selected).to.be.an('array');
    expect(state).to.eql({
      selected: [],
    });
  });

  it('should add cell coordinates to an empty state', () => {
    const action = {
      type: 'ADD_CELL',
      coordinates: '18',
    };

    state = cellsReducer(state, action);

    expect(state).to.be.an('object');
    expect(state.selected).to.be.an('array');
    expect(state.selected).to.have.lengthOf(1);
    expect(state.selected[0]).to.eql('18');
  });

  it('should add cell coordinates to a non empty state', () => {
    const action = {
      type: 'ADD_CELL',
      coordinates: '19',
    };

    state = cellsReducer(state, action);

    expect(state).to.be.an('object');
    expect(state.selected).to.be.an('array');
    expect(state.selected).to.have.lengthOf(2);
    expect(state.selected[0]).to.eql('18');
    expect(state.selected[1]).to.eql('19');
  });

  it('should add more cell coordinates', () => {
    const action = {
      type: 'ADD_CELL',
      coordinates: '00',
    };

    state = cellsReducer(state, action);

    expect(state).to.be.an('object');
    expect(state.selected).to.be.an('array');
    expect(state.selected).to.have.lengthOf(3);
    expect(state.selected[0]).to.eql('18');
    expect(state.selected[1]).to.eql('19');
    expect(state.selected[2]).to.eql('00');
  });

  it('should do nothing if the coordinates is not selected', () => {
    const action = {
      type: 'REMOVE_CELL',
      coordinates: '99',
    };

    state = cellsReducer(state, action);

    expect(state).to.be.an('object');
    expect(state.selected).to.be.an('array');
    expect(state.selected).to.have.lengthOf(3);
    expect(state.selected[0]).to.eql('18');
    expect(state.selected[1]).to.eql('19');
    expect(state.selected[2]).to.eql('00');
  });

  it('should remove the correct cell coordinates', () => {
    const action = {
      type: 'REMOVE_CELL',
      coordinates: '19',
    };

    state = cellsReducer(state, action);

    expect(state).to.be.an('object');
    expect(state.selected).to.be.an('array');
    expect(state.selected).to.have.lengthOf(2);
    expect(state.selected[0]).to.eql('18');
    expect(state.selected[1]).to.eql('00');
  });

  it('should remove the first cell coordinates', () => {
    const action = {
      type: 'REMOVE_CELL',
      coordinates: '18',
    };

    state = cellsReducer(state, action);

    expect(state).to.be.an('object');
    expect(state.selected).to.be.an('array');
    expect(state.selected).to.have.lengthOf(1);
    expect(state.selected[0]).to.eql('00');
  });

  it('should remove the last cell coordinates', () => {
    const action = {
      type: 'REMOVE_CELL',
      coordinates: '00',
    };

    state = cellsReducer(state, action);

    expect(state).to.be.an('object');
    expect(state.selected).to.be.an('array');
    expect(state.selected).to.have.lengthOf(0);
  });
});
