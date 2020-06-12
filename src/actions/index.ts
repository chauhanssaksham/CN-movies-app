import { MovieType, RootStateType } from "../types";
import { AnyAction, Dispatch } from "redux";

export const ADD_MOVIES = 'ADD_MOVIES';
export type ADD_MOVIES = typeof ADD_MOVIES;
export const ADD_FAVORITE = 'ADD_FAVORITE';
export type ADD_FAVORITE = typeof ADD_FAVORITE;
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export type REMOVE_FAVORITE = typeof REMOVE_FAVORITE;
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export type ADD_SEARCH_RESULT = typeof ADD_SEARCH_RESULT;


interface addMoviesAction extends AnyAction{
    type: ADD_MOVIES,
    movies: MovieType[]
}

interface addFavoriteAction extends AnyAction{
    type: ADD_FAVORITE,
    movie: MovieType
}

interface removeFavoriteAction extends AnyAction{
    type: REMOVE_FAVORITE,
    movie: MovieType
}

interface addSearchResultAction extends AnyAction{
    type: ADD_SEARCH_RESULT,
    movie: MovieType
}

export type MoviesActionType = addMoviesAction | removeFavoriteAction | addFavoriteAction;
export type SearchActionType = addSearchResultAction;
export type AppActions = MoviesActionType | SearchActionType;

//Action Creators
export const addMovies = (movies: MovieType[]):MoviesActionType => {
    return {
        type:ADD_MOVIES,
        movies: movies
    }
}

export const addFavorite = (movie: MovieType):MoviesActionType => {
    return {
        type:ADD_FAVORITE,
        movie: movie
    }
}

export const removeFavorite = (movie: MovieType):MoviesActionType => {
    return {
        type:REMOVE_FAVORITE,
        movie: movie
    }
}

export const addSearchResult = (movie:MovieType):SearchActionType => {
    return {
        type: ADD_SEARCH_RESULT,
        movie: movie
    }
}

export const handleMovieSearch = (searchText: string):any => {
    return (dispatch:Dispatch<AppActions>, getState: () => RootStateType ) => {
        const url = `http://www.omdbapi.com/?apikey=256fa37e&t=${searchText}`;
        fetch(url)
            .then(response => response.json())
            .then(movie => {
                console.log('Movie:', movie);

                dispatch(addSearchResult(movie));
            });
    }
}