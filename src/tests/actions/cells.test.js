import { expect } from 'chai';
import * as actions from 'actions/cells';

describe('Cell action creators', () => {
  it('should return correct action for addCell', () => {
    const coordinates = '18';
    const action = actions.addCell(coordinates);

    expect(action).to.be.an('object');
    expect(action).to.eql({
      type: 'ADD_CELL',
      coordinates,
    });
  });

  it('should return correct action for removeCell', () => {
    const action = actions.removeCell('18');

    expect(action).to.be.an('object');
    expect(action).to.eql({
      type: 'REMOVE_CELL',
      coordinates: '18',
    });
  });
});
