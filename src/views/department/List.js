import React, { Component, Fragment } from "react";
import { Button, Switch, message } from "antd";
import { Change } from "../../api/department";
import { Link } from "react-router-dom";
import TableData from "../../components/tableData";
import requestUrl from "../../api/requestUrl";
export default class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWork: "",
      data: [],
      visible: true,
      id: "",
      flag: true,
      loadingTable: false,

      tableConfigs: {
        url: requestUrl.departmentList,

        checkbox: true,
        rowkey: "id", //1.Key value pass logic: 1)From list parent compoment
        method: "post",
        // batchButton: false,

        thead: [
          // 部门名称
          { title: "部门名称", dataIndex: "name", key: "name" },

          //   禁启用

          {
            title: "禁启用",
            dataIndex: "status",
            key: "status",
            render: (status, rowData) => {
              return (
                <Switch
                  onChange={() => this.onHandlerSwitch(rowData)}
                  loading={rowData.id === this.state.id}
                  checkedChildren="开启"
                  unCheckedChildren="关闭"
                  // defaultChecked={status === "1" ? true : false}
                  defaultChecked={status}
                />
              );
              //JavaScript Comparison Operators ===
              // onChange={this.onChange(rowData)} loading={rowData.id === this.state.id} />
            },
          },

          // 人员数量"
          { title: "人员数量", dataIndex: "number", key: "number" },

          // 操作 edit or delete
          {
            title: "操作",
            dataIndex: "operation",
            key: "operation",
            width: 215,
            render: (text, rowData) => {
              return (
                <div className="inline-button">
                  {/* 1.Query Method */}
                  {/* <Button type="primary"><Link to={{ pathname: "/index/department/add", query: { id: rowData.id } }}>编辑</Link></Button> */}
                  {/* 2.router link method:paramas way*/}
                  {/* <Button type="primary"><Link to={'/index/department/add?id=' + rowData.id}>编辑</Link></Button> */}
                  {/* 3.State way to get the data */}
                  {/* edit */}
                  <Button type="primary">
                    <Link
                      to={{
                        pathname: "/index/department/add",
                        state: { id: rowData.id },
                      }}
                    >
                      编辑
                    </Link>
                  </Button>

                  {/* delete */}
                  <Button type="danger" onClick={() => this.Delete(rowData.id)}>
                    删除
                  </Button>
                </div>
              );
            },
          },
        ],
        formItem:[
           // 部门名称
        {
          type: "Input",
          label: "部门名称",
          name: "name",
         
        },

         // 禁启用

         {
          type: "Radio",
          label: "禁启用",
          name: "status",
         
          options: [
            { label: "禁用", value: false },
            { label: "启用", value: true },
          ],
        },


        ]


      },
      pageNumber: 1,
      pageSize: 10,
      selectedRowKeys: [],
    };
  }
  // Check the id
  // finish the insert the dom
  componentDidMount() {}

  getChildRef = (ref) => {
    this.TableData = ref; // 存储子组件
  };

  // delete the element
  Delete = (id) => {
    this.TableData.onHandleDelete(id);
  };

  // change switch the button status

  // status changes
  onHandlerSwitch = (data) => {
    if (!data.status) {
      return false;
    }
    //method2 customize the your switch multiple same time switch
    // if (this.state.flag) { return false }
    // method1 Avoid multiple same time switch with loading component

    const requestData = {
      id: data.id,
      status: data.status === "1" ? false : true,
    };

    this.setState({ id: data.id });

    // this.setState({ flag: true })
    Change(requestData)
      .then((res) => {
        message.info(res.data.message);
        this.setState({ id: "" });
        // this.setState({ flag: false })
      })
      .catch((err) => {
        this.setState({ id: "" });
        // this.setState({ flag: false })
      });
  };

  // chekbox adding

  onCheckbox = (selectedRowKeys) => {
    this.setState({
      selectedRowKeys: selectedRowKeys,
    });
  };

  render() {
    return (
      <Fragment>
        {/* html part */}
        {/* pass the props var config and the value is this.state.tableConfigs to child component TableData*/}
        <TableData onRef={this.getChildRef} config={this.state.tableConfigs} />
      </Fragment>
    );
  }
}
