import React, { Component, ChangeEvent } from 'react'
import { Dispatch, AnyAction } from 'redux';
import { handleMovieSearch } from '../../actions';

interface Props{
    dispatch: Dispatch<AnyAction>
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

    handleSearch = () => {
        const {searchText} = this.state;

        this.props.dispatch(handleMovieSearch(searchText));
    }

    handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            searchText: e.currentTarget.value
        });
    }

    render() {
        return (
            <div className="nav">
                <div className="search-container">
                    <input type="text" onChange={this.handleChange}/>
                    <button className="search-btn" onClick={this.handleSearch}>Search</button>
                </div>
            </div>
        )
    }
}

export default Navbar
