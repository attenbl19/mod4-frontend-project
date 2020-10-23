import React, { Component } from "react";
import SubscriptionsList from "../SubsComponents/SubscriptionsList";
import Search from "../SubsComponents/Search";
import AddSubscriptionForm from "../SubsComponents/AddSubscriptionForm"
// import {BrowserRouter,withRouter} from 'react-router-dom';

class SubscriptionContainer extends Component {
    state = {
        subscriptions: [],
        searchTerm: ""
    }
    changeSearchTerm = (termFromChild) => {
        this.setState({
        searchTerm: termFromChild
        })
    }
    componentDidMount(){
        fetch("http://localhost:3000/subscriptions")
        .then(r => r.json())
        .then((arrayOfSubscriptions) => {
            this.setState({
                subscriptions: arrayOfSubscriptions
        })
    })
}
    addSubscriptionToState = (newlyCreatedSubscription) => {
        let copyOfSubscriptions = [...this.state.subscriptions, newlyCreatedSubscription]
        this.setState({
        subscriptions: copyOfSubscriptions
    })
    }
    deleteSubscriptionFromState = (deletedID) => {
        let copyOfSubscriptions = this.state.subscriptions.filter(subscriptionObj => {
            return subscriptionObj.id !== deletedID
        })
    this.setState({
        subscriptions: copyOfSubscriptions
    })
}


    updateStoreFromState = (updatedObj) => {
        let copyOfSubscriptions = this.state.subscriptions.map((subscription) => {
        if(subscription.id === updatedObj.id){
            return updatedObj
        } else {
            return subscription
        }
        })

        this.setState({
        subscriptions: copyOfSubscriptions
        })

    }

    render() {
        let {subscriptions, searchTerm} = this.state
        let filteredArray = subscriptions.filter((subscription) => {
            return subscription.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
        console.log(filteredArray)
        console.log(this.state)
        // this.props.history.push("/SubscriptionContainer")
        return (
            <div>
                <Search seachTerm={this.state.searchTerm} 
                changeSearchTerm={this.changeSearchTerm} 
                />
                <AddSubscriptionForm addSubscriptionToState={this.addSubscriptionToState}/>
                <SubscriptionsList 
                    subscriptions={this.state.subscriptions} 
                    deleteSubscriptionFromState={this.deleteSubscriptionFromState} 
                    subscriptions={filteredArray}
                    updateSubscriptionFromState={this.updateSubscriptionFromState}
                    /> 
            </div>
        );                                             
    }
}

export default SubscriptionContainer;

// let magicalComponent = withRouter(SubscriptionContainer)
// export default magicalComponent;

// subscriptions={filteredArray}