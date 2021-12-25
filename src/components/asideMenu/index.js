import React, { Component, Fragment } from 'react'
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import router from '../../router/router'
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;


export default class AsideMenu extends Component {

    renderMenu = ({ title, key }) => {
        return (
            <Menu.Item key={key}>
                <Link to={key}>
                    <span>{title}</span>
                </Link>
            </Menu.Item>

        )
    }
    renderSubMenu = ({ title, key, child }) => {

        return (
            <SubMenu key={key} icon={<UserOutlined />} title={title}>
                {
                    child && child.map(item => {

                        return item.child && item.child.length > 0 ? this.renderSubMenu(item) : this.renderMenu(item)
                    }
                    )
                }
            </SubMenu>
        )


    }
    render() {
        return (
            <Fragment>
                <Menu
                    theme='dark'
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                >
                    {
                        router && router.map(firstItem => {
                            return (
                                firstItem.child && firstItem.child.length > 0 ? this.renderSubMenu(firstItem) : this.renderMenu(firstItem)
                            )

                        })
                    }
                </Menu>

            </Fragment>
        )
    }
}
