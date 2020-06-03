import React, { Component } from 'react'
import {MovieType} from '../../types'

export interface Props {
    movie: MovieType
}

class MovieCard extends Component<Props, object> {

    render() {
        const {movie} = this.props;

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
                        <div className="favourite-btn">Favourite</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard
