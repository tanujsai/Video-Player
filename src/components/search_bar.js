import React, { Component } from 'react';


//Class Based Component Designing 
class SearchBar extends Component {

    constructor(props) {
        super(props);
        //State What we declered 

        this.state = { term: 'Kokok' };
    }
    render() {
        return (
            <div className="search-bar">
                <input 
                value = {this.state.term}
                onChange={event => this.onInputChange(event.target.value) } />
            </div>
        );
    }

    onInputChange(term) {
     //   console.log(eventObj.target.value);
     this.setState({term});
     this.props.onSearchTermChange(term);
    }
}


// Function Based Component 
// const SearchBar = () => {
//     return <input />;
// };

export default SearchBar;