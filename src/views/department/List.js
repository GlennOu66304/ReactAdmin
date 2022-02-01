import React, { Component, Fragment } from 'react'
import { Form, Input, Button, Switch, message, Modal } from 'antd';
import { GetList, Delete, Change } from '../../api/department'
import { Link } from "react-router-dom";
import TableData from '../../components/tableData';
import requestUrl from '../../api/requestUrl';
export default class Department extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWork: '',
            data: [],
            visible: false,
            id: "",
            flag: true,
            loadingTable: false,
            tableConfigs: {
                url: requestUrl.departmentList,
                checkbox: true,
                method: 'post',
                thead: [

                    { title: "部门名称", dataIndex: "name", key: "name" },
                    {
                        title: "禁启用",
                        dataIndex: "status",
                        key: "status",
                        render: (text, rowData) => {

                            return <Switch defaultChecked={rowData.status} checkedChildren="开启" unCheckedChildren="关闭"
                                //JavaScript Comparison Operators ===
                                onChange={this.onChange(rowData)} loading={rowData.id === this.state.id} />

                        }
                    },
                    { title: "人员数量", dataIndex: "number", key: "number" },
                    {
                        title: "操作",
                        dataIndex: "operation",
                        key: "operation", width: 215,
                        render: (text, rowData) => {
                            return (
                                <div className="inline-button">
                                    {/* 1.Query Method */}
                                    {/* <Button type="primary"><Link to={{ pathname: "/index/department/add", query: { id: rowData.id } }}>编辑</Link></Button> */}
                                    {/* 2.router link method:paramas way*/}
                                    {/* <Button type="primary"><Link to={'/index/department/add?id=' + rowData.id}>编辑</Link></Button> */}
                                    {/* 3.State way to get the data */}
                                    <Button type="primary"><Link to={{ pathname: "/index/department/add", state: { id: rowData.id } }}>编辑</Link></Button>
                                    <Button type="danger" onClick={() => this.onHandleDelete(rowData.id)}>删除</Button>
                                </div>
                            )

                        }

                    }
                ],

            },
            pageNumber: 1,
            pageSize: 10,
            selectedRowKeys: []

        };
    }
    // Check the id
    componentDidMount() {
        this.loadData()

    }

    loadData = () => {
        const { pageNumber, pageSize, keyWork } = this.state
        const requestData = {
            pageNumber: pageNumber,
            pageSize: pageSize
        }
        if (keyWork) { requestData.name = keyWork }
        this.setState({ loadingTable: true })
        GetList(requestData).then(res => {
            const resData = res.data.data

            if (resData) {
                this.setState({
                    data: resData.data
                })
            }
            this.setState({ loadingTable: false })
        }).catch(err => {
            message.error(err.message)
            this.setState({ loadingTable: false })
        })
    }

    onFinish = (value) => {
        //Search loading logic finish
        if (this.state.loadingTable) {
            return false
        }

        this.setState({
            keyWork: value.username,
            pageNumber: 1,
            pageSize: 10,

        })
        this.loadData()

    }

    // click this delete button, then show the pop up window
    onHandleDelete = (id) => {
        // console.log(this.state.selectedRowKeys)
        // bulk delete check conditions
        if (!id) {
            if (this.state.selectedRowKeys.length === 0) { return false }
            // string join
            id = this.state.selectedRowKeys.join()

        }
        console.log(id)
        this.setState({ visible: true, id })
        console.log(typeof (this.state.id))

    }

    // close the window
    handleCancel = () => {
        this.setState({
            visible: false,
        })
    }

    //confirm the cancel

    handleOk = () => {

        Delete({ id: this.state.id }).then(res => {
            message.info(res.data.message)

            this.setState({
                visible: false,
                selectedRowKeys: [],
                id: ""
            })
            this.loadData()
        })
    }
    // status changes
    onChange = (data) => {
        if (!data.status) { return false }
        //method2 customize the your switch multiple same time switch 
        // if (this.state.flag) { return false }
        // method1 Avoid multiple same time switch with loading component
        this.setState({ id: data.id })
        // this.setState({ flag: true })
        Change({ id: data.id, status: data.status }).then(res => {
            message.info(res.data.message)
            this.setState({ id: '' })
            // this.setState({ flag: false })

        }).catch(err => {
            this.setState({ id: '' })
            // this.setState({ flag: false })
        })

    }


    onCheckbox = (selectedRowKeys) => {
        this.setState({
            selectedRowKeys: selectedRowKeys
        })

    }
    render() {

        return (
            <Fragment>
                <Form layout="inline" onFinish={this.onFinish}>
                    <Form.Item label="部门名称" name="username" >
                        <Input placeholder="请输入部门名称" />
                    </Form.Item>
                    <Form.Item  >
                        <Button loading={this.loadingTable} type="primary" htmlType="submit">搜索</Button>
                    </Form.Item>
                </Form>
                <div className="table-wrap">
                    <TableData config={this.state.tableConfigs} />
                    {/* <Table loading={this.state.loadingTable} rowSelection={rowSelection} rowKey='id' columns={columns} dataSource={data} bordered></Table> */}
                    <Button type="primary" onClick={() => this.onHandleDelete()}>批量删除</Button>

                    <Modal
                        title="提示"
                        visible={this.state.visible}
                        okText="确认"
                        cancelText="取消"
                        onCancel={this.handleCancel}
                        onOk={this.handleOk}
                    >
                        <p>确定删除此选项？<strong>删除后将无法修复</strong></p>

                    </Modal>
                </div>
            </Fragment>
        )
    }
}
