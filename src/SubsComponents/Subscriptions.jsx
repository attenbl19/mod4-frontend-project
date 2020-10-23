import React from "react";

class Subscription extends React.Component {

    handleDelete = (evt) => {
        console.log(this.props)
        fetch(`http://localhost:3001/subscriptions/${this.props.subscriptions.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
            .then(res => res.json())
            .then((deletedObj) => {
            console.log(deletedObj)
                this.props.deleteSubscriptionFromState(deletedObj.id)
            })
    }
render() {
    let {name, image, description, category, date, amount} = this.props.subscriptions
    return (
        <tr>
            <td>{name}
            <br/>
            <img src={image}/>
            </td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{date}</td>
            <td>{amount}</td>
            <td>
            <button className="delButton" onClick={this.handleDelete}>
                delete
            </button>
            </td>
        </tr>
    );
  };
}
export default Subscription;