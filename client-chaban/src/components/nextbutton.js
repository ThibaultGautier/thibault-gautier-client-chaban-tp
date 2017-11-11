import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import SinglePage from '../pages/single';

class NextButton extends Component{
    constructor(props){
        super(props);
        this.state={
            next_value: this.props.next_value
        }


    }

    refreshAfterClick(next){
        setTimeout(()=>{
            window.location.reload();
        }, 500);
        next();
    }

    render(){

        
        return(
            <Router>
            <button>
           
            <Link to={'/'+ this.state.next_value} onClick={ () =>this.refreshAfterClick()}  >
                 Page Suivante
            </Link></button>
            </Router>
        )
    }
        
}

export default NextButton;