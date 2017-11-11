import React, { Component } from 'react';
import BackButton from './backbutton';
import PrevButton from './prevbutton';
import NextButton from './nextbutton';

class HeaderSingle extends Component {

    constructor(props){
        super(props);
        this.state = {
            previous_page: this.props.page_id_preview,
            next_page: this.props.page_id_next
        }
    }

    render(){
        return(
            <div className="single_header">
                <BackButton />
                <PrevButton previous_value = {this.state.previous_page} />
                <NextButton next_value= {this.state.next_page} />
            </div>
        )
    }
}

export default HeaderSingle;