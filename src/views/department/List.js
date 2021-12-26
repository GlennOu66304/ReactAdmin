import React, { Component, Fragment } from 'react'
import { Form, Input, Button, Table, Switch, message } from 'antd';
import { GetList, Delete } from '@api/department'
export default class Department extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWork: '',
            data: [],

            columns: [
                { title: "部门名称", dataIndex: "name", key: "name" },
                {
                    title: "禁启用",
                    dataIndex: "status",
                    key: "status",
                    render: (text, rowData) => {

                        return <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={rowData.status} />

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
                                <Button type="primary">编辑</Button>
                                <Button type="danger" onClick={() => this.onHandleDelete(rowData.id)}>删除</Button>
                            </div>
                        )

                    }

                }
            ],
            pageNumber: 1,
            pageSize: 10,
            selectedRowKeys: []

        };
    }

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
        GetList(requestData).then(res => {
            const resData = res.data.data

            if (resData) {
                this.setState({
                    data: resData.data
                })
            }

        })
    }

    onFinish = (value) => {
        this.setState({
            keyWork: value.username,
            pageNumber: 1,
            pageSize: 10
        })
        this.loadData()
    }
    onHandleDelete = (id) => {
        if (!id) {
            return false
        }
        Delete({ id }).then(res => {
            message.info(res.data.message)
        })
        this.loadData()
    }


    onCheckbox = (selectedRowKeys) => {
        this.setState({
            selectedRowKeys: selectedRowKeys
        })

    }
    render() {
        const { columns, data } = this.state
        const rowSelection = {
            onChange: this.onCheckbox
        }
        return (
            <Fragment>
                <Form layout="inline" onFinish={this.onFinish}>
                    <Form.Item label="部门名称" name="username" >
                        <Input placeholder="请输入部门名称" />
                    </Form.Item>
                    <Form.Item  >
                        <Button type="primary" htmlType="submit">搜索</Button>
                    </Form.Item>
                </Form>
                <div className="table-wrap">
                    <Table rowSelection={rowSelection} rowKey='id' columns={columns} dataSource={data} bordered></Table>
                </div>
            </Fragment>
        )
    }
}
