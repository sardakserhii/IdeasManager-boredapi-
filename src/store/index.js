import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { freshIdeaListReducer } from "./freshIdeaListReducer";
import { myIdeasListReducer } from "./myIdeasListReducer";
import { achivmentsReducer } from "./achivmentsReducer";
import { complitedChallangesReducer } from "./complitedChallangesReducer";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const rootReducer = combineReducers({
  freshIdeaListReducer,
  myIdeasListReducer,
  achivmentsReducer,
  complitedChallangesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
