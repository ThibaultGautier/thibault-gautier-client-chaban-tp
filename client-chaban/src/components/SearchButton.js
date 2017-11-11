import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom';

class SearchButton extends Component{

    constructor(props){
        super(props);
        this.state={
            linkto:this.props.linkto
        }

    }


  render(){
      return(
              <button>
                 <Link to={this.state.linkto}> Rechercher </Link>
              </button>
      )

}

}

export default SearchButton;