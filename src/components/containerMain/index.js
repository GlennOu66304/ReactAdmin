import React, { Component } from "react";
import { Switch } from "react-router-dom";
import PrivateRouter from "../privateRouter/index";

import Components from "./components";

export default class ContanerMain extends Component {
  render() {
    return (
      <Switch>
        {Components.map((item) => {
          return (
            <PrivateRouter
              exact
              key={item.path}
              component={item.component}
              path={item.path}
            />
          );
        })}
      </Switch>
    );
  }
}
