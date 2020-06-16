import React, { Component } from 'react'
import {MovieType, RootStateType } from '../../types'
import {addFavorite, removeFavorite} from '../../actions'
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

interface StateProps {
    
}

interface DispatchProps{
    addFavorite: (movie: MovieType) => void,
    removeFavorite: (movie: MovieType) => void
}

interface OwnProps{
    movie: MovieType,
    isFavourite: boolean
}

type Props = StateProps & DispatchProps & OwnProps;


class MovieCard extends Component<Props, object> {

    handleFavoriteClick = ()=>{
        const {movie} = this.props;
        this.props.addFavorite(movie);
    }
    handleUnFavoriteClick = ()=>{
        const {movie} = this.props;
        this.props.removeFavorite(movie);
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
                        {isFavourite?
                        <Button variant='contained' color='secondary' onClick={this.handleUnFavoriteClick}>Unfavourite</Button>:
                        <Button variant='contained' color='primary' onClick={this.handleFavoriteClick}>Favourite</Button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: RootStateType):StateProps => {
    return {}
}

const mapDispatchToProps:DispatchProps = {
    addFavorite,
    removeFavorite
}


export default connect<StateProps, DispatchProps, OwnProps, RootStateType>(mapStateToProps, mapDispatchToProps)(MovieCard)
