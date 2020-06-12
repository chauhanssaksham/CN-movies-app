import React, { Component, ChangeEvent } from 'react'
import { Dispatch, AnyAction } from 'redux';
import { handleMovieSearch } from '../../actions';
import { SearchStateType } from '../../types';

interface Props{
    dispatch: Dispatch<AnyAction>,
    search: SearchStateType
}

interface State{
    searchText: string,
    showSearchResults: boolean
}

const initialState:State = {
    searchText: '',
    showSearchResults: false
}

class Navbar extends Component<Props, State>{
    constructor(props: Props){
        super(props);

        this.state = initialState;
    }

    handleAddToMovies = (movie: any) => {
        // this.props.dispatch(addToMovies(movie));
        console.log('To add: ', movie);
        this.setState(initialState);
    }

    handleSearch = () => {
        const {searchText} = this.state;

        this.props.dispatch(handleMovieSearch(searchText));
    }

    handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === ''){
            this.setState({
                showSearchResults: false,
                searchText: ''
            });
        } else {
            this.setState({
                showSearchResults: true,
                searchText: e.currentTarget.value
            });
        }
    }

    render() {
        const {result} = this.props.search;
        const {showSearchResults} = this.state;
        return (
            <div className="nav">
                <div className="search-container">
                    <input type="text" onChange={this.handleChange} value={this.state.searchText} />
                    <button className="search-btn" onClick={this.handleSearch}>Search</button>
                    {showSearchResults && result !== null &&
                        <div className="search-results">
                            <div className="search-result">
                                <img src={result.Poster} alt="Search Pic"/>
                                <div className="movie-info">
                                    <span>{result.Title}</span>
                                    <button onClick={()=>this.handleAddToMovies(result)}>Add to Movies</button>
                                </div>
                            </div>
                         </div>
                    }
                </div>
            </div>
        )
    }
}

export default Navbar
