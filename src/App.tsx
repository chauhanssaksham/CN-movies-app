import React from 'react';
import {data} from './data';
import Navbar from './components/Navbar/Navbar'
import MovieCard from './components/MovieCard/MovieCard'
import { Store } from 'redux';
import { StoreStateType, MovieType } from './types';
import { addMovies } from './actions';

interface Props{
    store: Store<StoreStateType>
}
interface State{
    currentList: 'list'|'favorites'
}

class App extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            currentList:'list'
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
        const {favorites} = this.props.store.getState();
        const index = favorites.indexOf(movie);

        return index !== -1;
    }
    tabToFavorite = () =>{
        this.setState({
            currentList: 'favorites'
        })
    }
    tabToMovies = () =>{
        this.setState({
            currentList: 'list'
        })
    }


    render(){
        const moviesToShow = (this.state.currentList === 'list')?(this.props.store.getState().list):(this.props.store.getState().favorites);

        console.log(this.props.store.getState());
        return (
            <div className="App">
            <Navbar />
            <div className="main">
                <div className="tabs">
                    <div onClick={this.tabToMovies} className="tab">Movies</div>
                    <div onClick={this.tabToFavorite} className="tab">Favourites</div>
                </div>
                <div className="list">
                    {moviesToShow.map((movie: any, index:any) => (
                        <MovieCard 
                            dispatch={this.props.store.dispatch} 
                            movie={movie} 
                            key={index} 
                            isFavourite={this.isMovieFavorite} />
                    ))}
                </div>
            </div>
            </div>
        );
    }
}

export default App;
