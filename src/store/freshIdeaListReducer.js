const defaultState = {
  freshIdeaList: [],
};

const ADD_FRESHIDEA = "ADD_FRESHIDEA";
const REMOVE_FRESHIDEA = "REMOVE_FRESHIDEA";

export const freshIdeaListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_FRESHIDEA:
      return { ...state, freshIdeaList: [...state.freshIdeaList, { ...action.payload }] };
    case REMOVE_FRESHIDEA:
      return {
        ...state,
        freshIdeaList: [...state.freshIdeaList.filter((e) => e.key !== action.payload.key)],
      };
    default:
      return state;
  }
};

export const addFreshIdeaAction = (payload) => ({ type: ADD_FRESHIDEA, payload });
export const removeFreshIdeaAction = (payload) => ({ type: REMOVE_FRESHIDEA, payload });
