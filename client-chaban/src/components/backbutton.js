import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BackButton extends Component{

    render(){
        return(
            <button>
            <Link to={`/`} >
                 Retour
            </Link></button>
        )
    }
        
    
}

export default BackButton;