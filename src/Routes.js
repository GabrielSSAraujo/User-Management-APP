import React, { Component } from "react";
import { Route, BrowserRouter, Switch,Redirect } from "react-router-dom";
import LoginScreen from "./Pages/LoginScreen";
import { history } from "./history";
import {isAuthenticated} from '../src/Auth/auth'
import HomePage from "./Pages/HomePage";

const PrivateRoutes = ({component:Component, ...args})=>(
    <Route
    {...args}
    render = {(arg)=> isAuthenticated() ? (<Component {...args}/>):( 
    <Redirect
        to={{ pathname: "/login", state: { from: arg.location } }}
      />)
    }

    />
);



const Routes = () =>(
    <BrowserRouter history={history}>
        <Switch>
            <PrivateRoutes exact path="/" component={()=><HomePage/>}/>
            <Route exact path="/login" component={()=> <LoginScreen/>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;