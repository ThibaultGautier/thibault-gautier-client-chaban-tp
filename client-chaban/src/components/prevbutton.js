import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import SinglePage from '../pages/single';
class PrevButton extends Component{
    constructor(props){
        super(props);
        this.state={
            previous_value: this.props.previous_value
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
            <button waves='light'>
           
            <Link to={'/'+ this.state.previous_value} onClick={()=>this.refreshAfterClick()}  >
                    Page Précédente
            </Link></button>
            </Router>
        )
    }
        
}

export default PrevButton;