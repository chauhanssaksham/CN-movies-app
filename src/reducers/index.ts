import { ADD_MOVIES } from "../actions";
import { StoreStateType } from "../types";

const initalMoviesState :StoreStateType = {
    list: [],
    favorites: []
}

export default function movies(state = initalMoviesState, action: any){
    if (action.type === ADD_MOVIES){
        console.log(action.movies);
        return {
            ...state,
            list: action.movies
        };
    }
    return state;
}