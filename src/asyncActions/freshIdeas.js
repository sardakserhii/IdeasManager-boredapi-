import axios from "axios";
import { addFreshIdeaAction } from "../store/freshIdeaListReducer";

const boredApiUrl = "http://www.boredapi.com/api/activity/";
const myIdeasApi = "http://localhost:3000/api/myideas";

export const fetchFreshIdea = () => {
  return async (dispatch) => {
    let freshIdea, isFreshIdeaComplited;
    do {
      freshIdea = await axios.get(boredApiUrl);
      isFreshIdeaComplited = (await axios.get(`${myIdeasApi}/${freshIdea.data.key}`)).data;
      console.log(isFreshIdeaComplited);
    } while (isFreshIdeaComplited);

    dispatch(addFreshIdeaAction(freshIdea.data));
  };
};
