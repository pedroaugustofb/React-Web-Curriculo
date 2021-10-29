import React from 'react';
import { Switch, Route, Redirect,BrowserRouter } from "react-router-dom";

import HomeController from './controllers/HomeController'
import Curriculo from './views/Curriculo/Curriculo';


const RedirectRouter = ({ component:  Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        return props.location.pathname !== "/" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/home", state: { from: props.location } }}
          />
        );
      }}
    />
  );
  
  const App = () => {
    return (
        <BrowserRouter>
                <Switch>
                    <RedirectRouter exact path={["/home", "/"]} component={HomeController} />
                    <Route exact path={"/curriculo"} component={Curriculo} />
                </Switch>
        </BrowserRouter>
    );
  };
  
  export default App;