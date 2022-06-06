import axios from "axios";
import moment from "moment";

import { getAchivmentsAction } from "../store/achivmentsReducer";
import { getComplitedChallangesAction } from "../store/complitedChallangesReducer";
import { getMyIdeaAction, removeMyIdeaAction } from "../store/myIdeasListReducer";

const url = "http://localhost:3000/api/myideas";

export const fetchMyIdeas = () => {
  return async (dispatch) => {
    const query = "/?isComplited=false";
    const response = await axios.get(url + query);
    dispatch(getMyIdeaAction(response.data));
  };
};
export const fetchMyComplitedChallanges = () => {
  return async (dispatch) => {
    const query = "/?isComplited=true";
    const response = await axios.get(url + query);
    const dataWithFormattedTime = response.data;

    dataWithFormattedTime.map((e) => (e.date = moment(e.date).fromNow()));

    dispatch(getComplitedChallangesAction(dataWithFormattedTime));
  };
};

export const fetchPostFreshIdea = (data) => {
  return async (dispatch) => {
    const response = await axios.post(url, data);
    dispatch(fetchMyIdeas());
  };
};

export const postComplitedIdea = (data) => {
  return async (dispatch) => {
    const response = await axios.put(url, data);
    console.log(response.data);
    dispatch(removeMyIdeaAction(data));
    dispatch(fetchMyComplitedChallanges());
  };
};

export const getAchivments = () => {
  return async (dispatch) => {
    const response = await axios.get(url + "/achivments");
    console.log(response.data);
    dispatch(getAchivmentsAction(response.data));
  };
};
