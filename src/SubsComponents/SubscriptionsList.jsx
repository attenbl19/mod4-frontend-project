import React from "react";
import Subscription from "../SubsComponents/Subscriptions";


const SubscriptionsList = (props) => {
    let arrayOfComponents = props.subscriptions.map((subscriptionObj) => {
        return <Subscription
            key={subscriptionObj.id}
            subscriptions={subscriptionObj} // two key value pairs which are key = id and subs=subs obj
            deleteSubscriptionFromState={props.deleteSubscriptionFromState}
        />
    })
    return(
        <table className="ui celled striped padded table">
            <tbody>
                <tr>
                    <th>
                    <h3 className="ui center aligned header">Name</h3>
                    </th>
                    <th>
                    <h3 className="ui center aligned header">Description</h3>
                    </th>
                    <th>
                    <h3 className="ui center aligned header">Category</h3>
                    </th>
                    <th>
                    <h3 className="ui center aligned header">Date</h3>
                    </th>
                    <th>
                    <h3 className="ui center aligned header">Amount</h3>
                    </th>
                </tr>
                { arrayOfComponents }
            </tbody>
        </table>
    );
}
export default SubscriptionsList;