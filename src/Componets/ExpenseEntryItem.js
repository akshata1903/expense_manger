import { Component } from "react"
//import FormattedDate from "./FormattedDate"
//import FormattedMoney from "./FormattedMoney"
//import "../style/ExpenseEntryItem.css"

export default class ExpenseEntryItem extends Component {
    constructor(props) {
        super(props)
        this.handleMouseoverEnter=this.handleMouseoverEnter.bind(this);
        this.hadleMouseoverLeve=this.handleMouseoverLeve.bind(this)
    }
    handleMouseoverEnter(e){
        e.target.parentNode.classList.add("highlight");
    
    }
    handleMouseoverLeve(e){
        e.target.parentNode.classList.remove("highlight");  
    }

    render() {
        const lists = this.props.item.map((a) => 

             <tr onMouseEnter={this.handleMouseoverEnter} onMouseLeave={this.handleMouseoverLeve} key={a.id}>
                <td>{a.name}</td>
                <td>{a.amount}</td>
                <td>{new Date(a.spendDate).toDateString()}</td>
                <td>{a.category}</td>
            </tr>
        );
        return (
            <div>
                <h1 className="text-center">{this.props.info}</h1>
                <table className="ma-auto">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Amount ss</th>
                            <th>Date</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lists}
                    </tbody>
                </table>

            </div>

        )
    }
}