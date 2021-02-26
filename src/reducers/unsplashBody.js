import {GET_UNSPLASH_BODY, GET_POSTS} from "../constants";
import {toJson} from "unsplash-js";

const unsplashBody = (state = {}, action) => {
    switch (action.type) {
        case GET_UNSPLASH_BODY:
            return action.body;
        default:
            return state;
    }
}
export default unsplashBody;