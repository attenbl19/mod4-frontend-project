import React, { Component } from "react";

class AddSubscriptionForm extends Component {

        state = {
            name: "",
            image: "", 
            description: "",
            category: "",
            date: "",
            amount: 0
        }
      
        handleInputChange = (evt) => {
            this.setState({
                [evt.target.name] : evt.target.value
            })
        }

        handleSubmit = (evt) => {
            evt.preventDefault()
        
        fetch("http://localhost:3000/subscriptions", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                image: this.state.image,
                description: this.state.description,
                category: this.state.category,
                date: this.state.date,
                amount: this.state.amount
            })
        })
            .then(res => res.json())
            .then((newlyCreatedSubscription)=> {
                this.props.addSubscriptionToState(newlyCreatedSubscription)
            })
        }


    render() {
        return (
            <div className="ui segment" >
                <form className="new form" onSubmit={this.handleSubmit}>
                    <div className="inline fields">
                        <input type="name" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.handleInputChange}
                        />

                        <input type="description"
                        name="description" 
                        placeholder="Description"
                        value={this.state.description} 
                        onChange={this.handleInputChange}
                        />

                        <input type="category"
                        name="category" 
                        placeholder="Category"
                        value={this.state.category} 
                        onChange={this.handleInputChange} 
                        />

                        <input type="date" 
                        name="date"
                        value={this.state.date} 
                        onChange={this.handleInputChange} 
                        />
                        <input type="number" 
                        name="amount" 
                        placeholder="Amount" 
                        step="0.00"
                        value={this.state.amount} 
                        onChange={this.handleInputChange} 
                        />
                    </div>
                        <button className="add button" type="submit">
                            Add Sub
                        </button>
                </form>
            </div>
        );
    }
}

export default AddSubscriptionForm;