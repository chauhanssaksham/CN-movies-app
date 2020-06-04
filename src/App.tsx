import React from 'react';
import {data} from './data';
import Navbar from './components/Navbar/Navbar'
import MovieCard from './components/MovieCard/MovieCard'
import { Store } from 'redux';
import { MovieType } from './types';
import { addMovies } from './actions';

interface Props{
    store: Store<MovieType[]>
}

class App extends React.Component<Props, object> {

    componentDidMount(){
        const {store} = this.props;
        store.subscribe(()=>{
            this.forceUpdate();
        });
        this.props.store.dispatch(addMovies(data));
    }

    render(){
        const movies: MovieType[] = this.props.store.getState();
        return (
            <div className="App">
            <Navbar />
            <div className="main">
                <div className="tabs">
                    <div className="tab">Movies</div>
                    <div className="tab">Favourites</div>
                </div>
                <div className="list">
                    {movies.map((movie: any, index:any) => (
                        <MovieCard movie={movie} key={index} />
                    ))}
                </div>
            </div>
            </div>
        );
    }
}

export default App;
