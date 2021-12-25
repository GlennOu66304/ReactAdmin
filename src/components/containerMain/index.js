import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import PrivateRouter from '../privateRouter/index';
import User from '../../views/user/index';
import Add from '../../views/user/Add.js';
export default class ContanerMain extends Component {
    render() {
        return (
            <Switch>
                <PrivateRouter exact component={User} path="/index/user/list" />
                <PrivateRouter exact component={Add} path="/index/user/add" />
            </Switch>
        )
    }
}
