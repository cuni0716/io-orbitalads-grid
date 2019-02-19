import ACTIONS from 'constants/actions';

const initialState = {
  selected: [],
};

export default (state = initialState, action) => {
  const index = state.selected.indexOf(action.coordinates);

  switch (action.type) {
    case ACTIONS.ADD_CELL:
      return {
        ...state,
        selected: [...state.selected, action.coordinates],
      };

    case ACTIONS.REMOVE_CELL:
      if (index === -1) {
        return state;
      }

      return {
        ...state,
        selected: [
          ...state.selected.slice(0, index),
          ...state.selected.slice(index + 1),
        ],
      };

    default:
      return state;
  }
};
