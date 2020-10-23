import React from 'react';
// import UserContainr from "./UserComponents/UserContainer";
import SubscriptionContainer from "./SubsComponents/SubscriptionContainer";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment black inverted">
          <h2>Subs-On-Line Subscriptions</h2>
        </div>
        <SubscriptionContainer />
        {/* <UserContainr /> */}
      </div>
      
    );
  }

}

export default App;
