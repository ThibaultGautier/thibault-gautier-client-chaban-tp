import React, { Component } from 'react';

class Detail extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div>{this.props.date}</div>
                <div>{this.props.from}{this.props.to}</div>
                <div>{this.props.raison}</div>
            </div>
        )
    }
}

export default Detail;