import React from "react";

class Subscription extends React.Component {

    handleDelete = (evt) => {
        console.log(this.props)
        fetch(`http://localhost:3000/subscriptions/${this.props.subscriptions.id}`, {
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

    handleUpdate = (evt) => {
        fetch(`http://localhost:3000/subscriptions/${this.props.subscriptions.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "Application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                category: this.props.subscriptions.id
            })
        })
            .then(res => res.json())
            .then(updatedSubscription => {
                this.props.updateSubscriptionFromState(updatedSubscription.id)
            })
    }


render() {
    let {name, image, description, category, date, amount} = this.props.subscriptions
    return (
        <tr>
            <td>{name}
            
           <td> <img src={image}/></td>
            </td>
            <td>{description}</td>
            <td>{category}
            <button className="update"
             onClick={this.handleUpdate}>edit</button>
             </td>
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