import React from 'react';
import {data} from './data';
import Navbar from './components/Navbar/Navbar'
import MovieCard from './components/MovieCard/MovieCard'
import { Store } from 'redux';
import { RootStateType, MovieType } from './types';
import { addMovies } from './actions';

interface Props{
    store: Store<RootStateType>
}
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
        const {store} = this.props;
        store.subscribe(()=>{
            this.forceUpdate();
        });
        this.props.store.dispatch(addMovies(data));
    }

    isMovieFavorite = (movie: MovieType):boolean => {
        const {movies} = this.props.store.getState();
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
        const {movies} = this.props.store.getState();
        const moviesToShow = (!this.state.showFavorites)?(movies.list):(movies.favorites);

        console.log(this.props.store.getState());
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
                                dispatch={this.props.store.dispatch} 
                                movie={movie} 
                                key={index} 
                                isFavourite={this.isMovieFavorite} />
                        ))
                    }
                </div>
            </div>
            </div>
        );
    }
}

export default App;
