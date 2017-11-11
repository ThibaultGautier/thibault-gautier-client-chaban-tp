import React, { Component } from 'react';
import SearchInput from './search-input';

class Search extends Component{

    render(){
        return(
         <div className="inputs">
            <SearchInput placeholder="From : date" from={true} to={false} />
            <SearchInput placeholder="To : date"  from={false} to={true} />
        </div>

        )
    }

}

export default Search;