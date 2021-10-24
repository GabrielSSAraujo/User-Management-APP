import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import LoginScreen from "./Pages/LoginScreen";
import { history } from "./history";

const Routes = () =>(
    <BrowserRouter history={history}>
        <Switch>
            <Route exact path="/" component={()=><h1>home</h1>}/>
            <Route path="/login" component={()=> <LoginScreen/>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;