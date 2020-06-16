import React, { Component, ChangeEvent } from 'react'
import { handleMovieSearch, addMovieToList } from '../../actions';
import { SearchStateType, RootStateType, MovieType } from '../../types';
import { connect } from 'react-redux';

interface StateProps{
    search: SearchStateType
}


interface DispatchProps{
    handleMovieSearch: (searchText: string) => void,
    addMovieToList: (movie: MovieType) => void
}

interface OwnProps{

}

type Props = StateProps & DispatchProps & OwnProps;

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
        this.props.addMovieToList(movie);
        console.log('To add: ', movie);
        this.setState(initialState);
    }

    handleSearch = () => {
        const {searchText} = this.state;

        this.props.handleMovieSearch(searchText);
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
                                    <button id="#search-btn" onClick={()=>this.handleAddToMovies(result)}>Add to Movies</button>
                                </div>
                            </div>
                         </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: RootStateType):StateProps => {
    return {
        search: state.search
    }
}

const mapDispatchToProps:DispatchProps = {
    addMovieToList: addMovieToList,
    handleMovieSearch: handleMovieSearch
}

export default connect<StateProps, DispatchProps, OwnProps, RootStateType>(mapStateToProps, mapDispatchToProps)(Navbar)
