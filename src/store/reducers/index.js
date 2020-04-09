import { combineReducers } from "redux";

const initialState = [
  { title: "songA", duration: "3:12" },
  { title: "songB", duration: "2:39" },
  { title: "songC", duration: "3:41" },
  { title: "songD", duration: "2:59" },
];

const songList = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SONG":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({ songList });
