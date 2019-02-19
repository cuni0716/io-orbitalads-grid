import ACTIONS from 'constants/actions';

export const addCell = coordinates => ({ type: ACTIONS.ADD_CELL, coordinates });

export const removeCell = coordinates => ({ type: ACTIONS.REMOVE_CELL, coordinates });
