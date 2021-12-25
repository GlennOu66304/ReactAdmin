import React, { Component } from 'react'
import { Layout } from 'antd'
import './layout.scss'
import Aside from './components/aside'
import ContanerMain from '../../components/containerMain'

import { MenuFoldOutlined } from '@ant-design/icons'
const { Sider, Header, Content } = Layout

class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        }
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });

    }
    render() {
        return (
            <Layout className="layout-wrap">
                <Sider width="250px" collapsed={this.state.collapsed} > <Aside /> </Sider>
                <Layout>
                    <Header className="layout-header" >
                        <span onClick={this.toggleCollapsed} className="collapsed-icon" style={{ fontSize: '20px' }}>< MenuFoldOutlined /></span>
                    </Header>
                    <Content className="layout-main"><ContanerMain /></Content>
                </Layout>
            </Layout>

        )
    }
}

export default Index