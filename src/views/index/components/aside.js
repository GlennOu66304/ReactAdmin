import React, { Component, Fragment } from 'react'

import './aside.scss'
import AsideMenu from '../../../components/asideMenu';

class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Fragment>
                <h1 className="logo"><span>Logo</span></h1>
                <AsideMenu />
            </Fragment>
        )

    }
}

export default Aside;