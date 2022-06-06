const defaultState = {
  complitedChallanges: [],
};

const GET_COMPLITED_CHALLANGES = "GET_COMPLITED_CHALLANGES";

export const complitedChallangesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_COMPLITED_CHALLANGES:
      return { ...state, complitedChallanges: [...action.payload] };
    default:
      return state;
  }
};

export const getComplitedChallangesAction = (payload) => ({
  type: GET_COMPLITED_CHALLANGES,
  payload,
});
