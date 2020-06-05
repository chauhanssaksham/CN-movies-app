import React, { Component, Dispatch } from 'react'
import {MovieType } from '../../types'
import {addFavorite, removeFavorite} from '../../actions'
import { AnyAction } from 'redux';

export interface Props {
    movie: MovieType,
    dispatch: Dispatch<AnyAction>,
    isFavourite: (movie: MovieType) => boolean
}

class MovieCard extends Component<Props, object> {

    handleFavoriteClick = ()=>{
        const {movie} = this.props;
        this.props.dispatch(addFavorite(movie));
    }
    handleUnFavoriteClick = ()=>{
        const {movie} = this.props;
        this.props.dispatch(removeFavorite(movie));
    }


    render() {
        const {movie, isFavourite} = this.props;

        return (
            <div className="movie-card">
                <div className="left">
                    <img src={movie.Poster} alt="movie-poster"/>
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {isFavourite(movie)?
                        <div className="unfavourite-btn" onClick={this.handleUnFavoriteClick}>Unfavourite</div>:
                        <div className="favourite-btn" onClick={this.handleFavoriteClick}>Favourite</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard
