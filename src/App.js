import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import { router } from "./router";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <Switch>
          {router.map((route, index) => (
            <Route key={index} path={route.path} exact component={route.main} />
          ))}
        </Switch>
      </div>
    );
  }
}
