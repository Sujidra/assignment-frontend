import { combineReducers } from "redux";

import VideosReducer from "./videos";
import UserReducer from "./user"


export default combineReducers({
    user: UserReducer,
    videos: VideosReducer
})