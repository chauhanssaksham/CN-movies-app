import {combineReducers} from 'redux';
import { ADD_MOVIES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions";
import { MoviesStateType, SearchStateType } from "../types";
import { AnyAction } from "redux";

const initialMoviesState :MoviesStateType = {
    list: [],
    favorites: []
}

export function movies(state = initialMoviesState, action: AnyAction):MoviesStateType{
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
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(movie => movie !== action.movie)
            }
        default:
            return state;
    }
}

const initialSearchState: SearchStateType = {
    result: null
}

export function search(state = initialSearchState, action:AnyAction): SearchStateType{
    return state;
}

// const initalRootState:RootStateType = {
//     movies: initialMoviesState,
//     search: initialSearchState
// };

export default combineReducers({
    movies,
    search
});