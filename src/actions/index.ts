import { MovieType } from "../types";
import { AnyAction } from "redux";

export const ADD_MOVIES = 'ADD_MOVIES';
export type ADD_MOVIES = typeof ADD_MOVIES;
export const ADD_FAVORITE = 'ADD_FAVORITE';
export type ADD_FAVORITE = typeof ADD_FAVORITE;

interface addMoviesAction extends AnyAction{
    type: ADD_MOVIES,
    movies: MovieType[]
}

interface addFavoriteAction extends AnyAction{
    type: ADD_FAVORITE,
    movie: MovieType
}


//Action Creators
export const addMovies = (movies: MovieType[]):addMoviesAction => {
    return {
        type:ADD_MOVIES,
        movies: movies
    }
}

export const addFavorite = (movie: MovieType):addFavoriteAction => {
    return {
        type:ADD_FAVORITE,
        movie: movie
    }
}