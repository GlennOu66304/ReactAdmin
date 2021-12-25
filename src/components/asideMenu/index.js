import React, { Component, Fragment } from 'react'
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import router from '../../router/router'
import { Link, withRouter } from 'react-router-dom';
const { SubMenu } = Menu;


class AsideMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // selectedKeys: ['/index/user/add'],
            // openKeys: ['/index/user'],
        }
    }
    // componentDidMount() {
    //     const pathName = this.props.location.pathname;
    //     const menuKey = pathName.split('/').slice(0, 3).join('/');
    //     this.setState({
    //         selectedKeys: [pathName],
    //         openKeys: [menuKey],
    //     })


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
        // const { selectedKeys, openKeys } = this.state
        return (
            <Fragment>
                <Menu
                    theme='dark'
                    mode="inline"
                    // selectedKeys={selectedKeys}
                    // openKeys={openKeys}
                    style={{ height: '100%', borderRight: 0 }}
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

export default withRouter(AsideMenu)