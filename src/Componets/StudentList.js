import { Component } from "react";

 export default class StudentList extends Component{
    constructor(props){
        super(props)
    }
    student(list){
        return list.map(function(a){
            return <tr><td>{a.roll}</td><td>{a.name}</td><td>{a.address}</td><td>{a.marks}</td></tr>;

        })
    }
    render(){
        return(
            <>
            <div className="container"></div>
            <table className=" table-borderdd table" >{this.student(this.props.list)}</table>
            </>
        )

    }
}