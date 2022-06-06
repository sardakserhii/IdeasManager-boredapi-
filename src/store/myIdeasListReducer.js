const defaultState = {
  myIdeas: [],
};

const GET_MY_IDEAS = "GET_MY_IDEA";
const ADD_MY_IDEA = "ADD_MY_IDEA";
const REMOVE_MY_IDEA = "REMOVE_MY_IDEA";
const COMPLIT_MY_IDEA = "COMPLIT_MY_IDEA";

export const myIdeasListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_MY_IDEAS:
      return { ...state, myIdeas: [...action.payload] };
    case ADD_MY_IDEA:
      return { ...state, myIdeas: [...state.myIdeas, { ...action.payload }] };
    case REMOVE_MY_IDEA:
      return {
        ...state,
        myIdeas: [...state.myIdeas.filter((idea) => idea.key !== action.payload.key)],
      };

    default:
      return state;
  }
};

export const getMyIdeaAction = (payload) => ({ type: GET_MY_IDEAS, payload });
export const addMyIdeaAction = (payload) => ({ type: ADD_MY_IDEA, payload });
export const removeMyIdeaAction = (payload) => ({ type: REMOVE_MY_IDEA, payload });
export const complitMyIdeaAction = (payload) => ({ type: COMPLIT_MY_IDEA, payload });
