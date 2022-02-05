import React, { Component, Fragment } from 'react'
import { TableList } from '../../api/common';
import { Delete } from '../../api/department'
import PropTypes from 'prop-types';
import TableData2 from './TableData2'
import { Button, Modal, Form, Input, message } from 'antd';
export default class TableData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWork: '',
            data: [],
            pageNumber: 1,
            pageSize: 10,
            checkboxValue: [],
            rowKey: 'id',
            loadingTable: false,
            toal: 0,
            visible: false,
            id: '',

        };


    }

    componentDidMount() {
        // console.log(this.props.config);
        this.loadData()
        this.props.onRef(this);

    }

    loadData = () => {
        const { pageNumber, pageSize, keyWork } = this.state

        const requestData = {
            url: this.props.config.url,
            method: this.props.config.method,
            data: {
                name: keyWork,
                pageNumber: pageNumber,
                pageSize: pageSize
            }
        }
        if (keyWork) { requestData.data.keyWork = keyWork }
        TableList(requestData).then(res => {
            const resData = res.data.data

            if (resData) {
                this.setState({
                    data: resData.data,
                    total: resData.total
                })
            }
            // console.log(resData)
            this.setState({ loadingTable: false })
        }).catch(err => {

            this.setState({ loadingTable: false })
        })
    }

    onCheckbox = (Value) => {

    }

    //pagination
    onChangeCurrentPage = (value) => {
        // console.log(value);
        this.setState({
            pageNumber: value
        }, () => {
            this.loadData()
        })

    }
    //Page size chang
    onChangePagesize = (value, page) => {
        // console.log(value);
        // console.log(page);
        this.setState({
            pageNumber: 1,
            pageSize: page
        }, () => {
            this.loadData();
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
    onHandleDelete = (id) => {
        this.setState({ visible: true })
        if (id) { this.setState({ id: [id] }); }
    }
    //confirm the cancel

    handleOk = () => {

        Delete({ id: this.state.id.join() }).then(res => {
            message.info(res.data.message)

            this.setState({
                visible: false,
                selectedRowKeys: [],
                id: ""
            })
            this.loadData()
        })
    }

    // close the window
    handleCancel = () => {
        this.setState({
            visible: false,
        })
    }

    render() {
        const { thead, checkbox, rowkey } = this.props.config
        // console.log({ thead })
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
                        <Button loading={this.loadingTable} type="primary" htmlType="submit">搜索</Button>
                    </Form.Item>
                </Form>

                <div className="table-wrap">
                    <TableData2
                        columns={thead}
                        data={this.state.data}
                        total={this.state.total}
                        loaddingTbale={this.state.loadingTable}
                        bastchButton={true}
                        rowSelection={checkbox ? rowSelection : null}
                        rowkey={rowkey}
                        onShowSizeChange={this.onChangePagesize}
                        onChange={this.onChangeCurrentPage}
                        onDelete={this.onHandleDelete}
                    />


                    {/* <Table loading={this.state.loadingTable} rowSelection={rowSelection} rowKey='id' columns={columns} dataSource={data} bordered></Table> */}


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

TableData.propTypes = {
    config: PropTypes.object,
    id: PropTypes.string,
}

TableData.defaultProps = {
    batchButton: false,
    id: ''
}