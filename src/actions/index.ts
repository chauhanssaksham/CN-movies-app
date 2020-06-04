import { MovieType } from "../types";
import { AnyAction } from "redux";

export const ADD_MOVIES = 'ADD_MOVIES';
export type ADD_MOVIES = typeof ADD_MOVIES;


//Action Creators
export const addMovies = (movies: MovieType[]):AnyAction => {
    return {
        type:ADD_MOVIES,
        movies: movies
    }
}
