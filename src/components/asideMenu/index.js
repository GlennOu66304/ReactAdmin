import React, { Component, Fragment } from "react";
import { Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

// import the router first
import router from "../../router/router";

import { Link, withRouter } from "react-router-dom";

const { SubMenu } = Menu;

class AsideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedKeys: ['/index/user/add'],
      // openKeys: ['/index/user'],
    };
  }
  // componentDidMount() {
  //     const pathName = this.props.location.pathname;
  //     const menuKey = pathName.split('/').slice(0, 3).join('/');
  //     this.setState({
  //         selectedKeys: [pathName],
  //         openKeys: [menuKey],
  //     })

  // small menu option function
  //   this is a function
  renderSubMenu = ({ title, key, child }) => {
    return (
      // subMenu antd
      <SubMenu key={key} icon={<UserOutlined />} title={title}>
        {/* there is a child array and then map the child array */}
        {child &&
          child.map((item) => {
            //  // another sub child array check, sedcon layer check

            return item.child && item.child.length > 0
              ? this.renderSubMenu(item)
              : this.renderMenu(item);

            // return this.renderMenu(item)
          })}
      </SubMenu>
    );
  };

  // big menu option function
  renderMenu = ({ title, key }) => {
    return (
      <Menu.Item key={key}>
        <Link to={key}>
          <span>{title}</span>
        </Link>
      </Menu.Item>
    );
  };

  render() {
    // const { selectedKeys, openKeys } = this.state
    return (
      <Fragment>
        <Menu
          theme="dark"
          mode="inline"
          // selectedKeys={selectedKeys}
          // openKeys={openKeys}
          style={{ height: "100%", borderRight: 0 }}
        >
          {/* render the router content from the router.js file */}
          {
            //   is there is a route and run the router,map function (array,map)

            router &&
              router.map((firstItem) => {
                // ittem has the chile and the chirld's length big than 0
                //    // Array eleemnt is a obejct, if the array element is a object, then you can access
                // object value with array.object name
                // Arrays are Objects
                // https://www.w3schools.com/js/js_arrays.asp

                return firstItem.child && firstItem.child.length > 0
                  ? this.renderSubMenu(firstItem)
                  : this.renderMenu(firstItem);
                // true render the small menu, false render the big menu
              })
          }
        </Menu>
      </Fragment>
    );
  }
}

export default withRouter(AsideMenu);
