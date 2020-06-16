import React from 'react';
import {data} from './data';
import Navbar from './components/Navbar/Navbar'
import MovieCard from './components/MovieCard/MovieCard'
import { RootStateType, MovieType, MoviesStateType } from './types';
import { addMovies } from './actions';
import { connect } from 'react-redux';

interface StateProps {
    movies: MoviesStateType
}

interface DispatchProps{
    addMovies: (data: MovieType[]) => void
}

interface OwnProps{

}

type Props = StateProps & DispatchProps & OwnProps;

interface State{
    showFavorites: boolean
}

class App extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            showFavorites:false
        }
    }
    componentDidMount(){
        this.props.addMovies(data);
    }

    isMovieFavorite = (movie: MovieType):boolean => {
        const {movies} = this.props;
        const {favorites} = movies;
        const index = favorites.indexOf(movie);
        return index !== -1;
    }
    toggleShowFavorites = () =>{
        this.setState(prevState => ({
            showFavorites:!prevState.showFavorites
        }));
    }


    render(){
        const {movies} = this.props;
        const moviesToShow = (!this.state.showFavorites)?(movies.list):(movies.favorites);

        // console.log(this.props.movies);
        return (
            <div className="App">
            <Navbar />
            <div className="main">
                <div className="tabs">
                    <div onClick={this.toggleShowFavorites} className={`tab ${this.state.showFavorites?'':'active-tabs'}`}>Movies</div>
                    <div onClick={this.toggleShowFavorites} className={`tab ${this.state.showFavorites?'active-tabs':''}`}>Favourites</div>
                </div>
                <div className="list">
                    {moviesToShow.length === 0? (<div>There are no movies in this list...</div>): 
                        moviesToShow.map((movie: any, index:any) => (
                            <MovieCard 
                                movie={movie} 
                                key={index} 
                                isFavourite={this.isMovieFavorite(movie)} />
                        ))
                    }
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType):StateProps => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps:DispatchProps = {
    addMovies
}

export default connect<StateProps, DispatchProps, OwnProps, RootStateType>(mapStateToProps ,mapDispatchToProps)(App);
