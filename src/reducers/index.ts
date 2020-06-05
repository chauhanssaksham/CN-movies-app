import { ADD_MOVIES, ADD_FAVORITE } from "../actions";
import { StoreStateType } from "../types";
import { AnyAction } from "redux";

const initalMoviesState :StoreStateType = {
    list: [],
    favorites: []
}

export default function movies(state = initalMoviesState, action: AnyAction):StoreStateType{
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVORITE:
            return {
                ...state, 
                favorites: [
                    action.movie,
                    ...state.favorites
                ]
            }
        default:
            return state;
    }
}