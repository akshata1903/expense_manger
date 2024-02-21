import { Component } from "react";
//import React{Component} from 'react';

export default class FormattedMoney extends Component {
    constructor(props){
        super(props)
    }
    format(amount) {
        return parseFloat(amount).toFixed(2)
    }
    render(){
        return(
            <>
            <span>{this.format(this.props.amount)}</span>
            </>
        )
    }
}