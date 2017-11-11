import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom';
import SearchButton from './SearchButton'

class SearchInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            from: this.props.from,
            to: this.props.to,
            placeholder: this.props.placeholder,
            search_from: "",
            search_to: ""
        }

    }

    setContentValue(event){
        if(this.state.from){
            this.setState({
                search_from: "from="+ event.target.value,
            });
        }
        else if(this.state.to){
            this.setState({
                search_to: "to="+ event.target.value,
            });
        }

        console.log(this.state.search_from)
        console.log(this.state.search_to)
    }

    render(){

        return(
         <div className="inputs">
            <input type="text" placeholder={this.state.placeholder} from={this.state.from} to={this.state.to} onChange={this.setContentValue.bind(this)} />
            <SearchButton linkto={`/?${this.state.search_from}&${this.state.search_to}`} />
        </div>
        )
    };


}

export default SearchInput;