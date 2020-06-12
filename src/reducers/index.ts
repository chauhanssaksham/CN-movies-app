import {combineReducers} from 'redux';
import { ADD_MOVIES, ADD_FAVORITE, REMOVE_FAVORITE, MoviesActionType, ADD_SEARCH_RESULT, SearchActionType } from "../actions";
import { MoviesStateType, SearchStateType } from "../types";

const initialMoviesState :MoviesStateType = {
    list: [],
    favorites: []
}

export function movies(state = initialMoviesState, action: MoviesActionType):MoviesStateType{
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

export function search(state = initialSearchState, action:SearchActionType): SearchStateType{
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie
            }
        default:
            return state;
    }
}

// const initalRootState:RootStateType = {
//     movies: initialMoviesState,
//     search: initialSearchState
// };

const rootReducer =  combineReducers({
    movies,
    search
});

export default rootReducer;