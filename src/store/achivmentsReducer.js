const defaultState = {
  achivmentsList: {},
};

const GET_ACHIVMENTS = "GET_ACHIVMENTS";

export const achivmentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ACHIVMENTS:
      return { ...state, achivmentsList: { ...action.payload } };
    default:
      return state;
  }
};

export const getAchivmentsAction = (payload) => ({ type: GET_ACHIVMENTS, payload });
