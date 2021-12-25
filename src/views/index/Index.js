import React, { Component } from 'react'
import { Layout } from 'antd'
import './layout.scss'
import Aside from './components/aside'
import ContanerMain from '../../components/containerMain'
const { Sider, Header, Content } = Layout

class Index extends Component {
    render() {
        return (
            <Layout className="layout-wrap">
                <Sider width="250px"><Aside /> </Sider>
                <Layout>
                    <Header className="layout-header">Header</Header>
                    <Content className="layout-main"><ContanerMain /></Content>
                </Layout>
            </Layout>

        )
    }
}

export default Index