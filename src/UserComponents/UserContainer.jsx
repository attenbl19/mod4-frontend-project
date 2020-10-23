// import React from 'react';
// import Form from '../UserComponents/Form'
// import Home from '../UserComponents/Home'
// import NavBar from '../UserComponents/NavBar'


// import {Switch, Route, withRouter} from 'react-router-dom'


// class UserContainer extends React.Component {

//     state = {
//         id: 0,
//         name: "",
//         email: ""
       
//     }


//     handleLoginSubmit = (userInfo) => {
//         console.log("Login form has been submitted")
    
//         fetch("http://localhost:3000/users/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "Application/json"
//           },
//           body: JSON.stringify({
//             name: userInfo.name,
//             email: userInfo.email,
//             password: userInfo.password
//           })
//         })
//         .then(res => res.json()) 
//         .then((res) => {
//             if(res.error){
//                 console.error(res.error)
//             }else {


//                 this.setState({
//                     id: res.id,
//                     name: res.name
//                 })
//                 this.props.history.push("/SubscriptionContainer")
//             }
        
//         })

//     }

//     renderForm = (routerProps) => {
//         if(routerProps.location.pathname === "/login"){
//             return <Form
//                 formName="Login Form"
//                 handleSubmit={this.handleLoginSubmit}
//             />
//         } else if (routerProps.location.pathname === "/register") {
//             return <Form
//                 formName="Register Form"
//                 handleSubmit={this.handleRegisterSubmit}
//             />
//         }
//     }


//     render(){
//         return (
//             <div>
//                 <NavBar/>
//                 <Switch>
//                     <Route path="/login" render={ this.renderForm } />
//                     <Route path="/register" render={ this.renderForm } />
//                     <Route path="/" exact component={Home} />
//                     <Route render={ () => <p>Page not Found</p> } />
//                 </Switch>
//             </div>
//         );
//     }
    
    
    
// }

// let magicalComponent = withRouter(UserContainer)
// export default magicalComponent