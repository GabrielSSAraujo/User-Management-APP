import React, { Component } from "react";
import { Route, BrowserRouter, Switch,Redirect } from "react-router-dom";
import LoginScreen from "./Pages/LoginScreen";
import { history } from "./history";
import {isAuthenticated} from '../src/Auth/auth'

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
            <PrivateRoutes exact path="/" component={()=><h1>home</h1>}/>
            <Route exact path="/login" component={()=> <LoginScreen/>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;