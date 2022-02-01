import React, { Component, Fragment } from 'react'

import { Table, Button, Pagination, Row, Col } from 'antd';


import { TableList } from '../../api/common';
import PropTypes from 'prop-types';

export default class TableData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWork: '',
            data: [],
            pageNumber: 1,
            pageSize: 10,
            checkboxValue: [],
            rowKey: '',
            loadingTable: false,
            toal: 0

        };


    }

    componentDidMount() {
        // console.log(this.props.config);
        this.loadData()

    }

    loadData = () => {
        const { pageNumber, pageSize } = this.state

        const requestData = {
            url: this.props.config.url,
            method: this.props.config.method,
            data: {
                pageNumber: pageNumber,
                pageSize: pageSize
            }
        }

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
        console.log(value);
        this.setState({
            pageNumber: value
        }, () => {
            this.loadData()
        })

    }
    //Page size chang
    onChangePagesize = (value, page) => {
        // console.log(value);
        this.setState({
            pageNumber: 1,
            pageSize: page
        }, () => {
            this.loadData()
        })

    }

    render() {
        const { thead, checkbox, batchButton, rowkey } = this.props.config
        const rowSelection = {
            onChange: this.onCheckbox
        }
        return (
            <Fragment>
                <Table pagination={false} loading={this.state.loadingTable} rowSelection={checkbox ? rowSelection : null} columns={thead} dataSource={this.state.data} bordered rowKey='id' />

                <Row>
                    <Col span={8} >
                        {/* // Way 1  */}
                        {/* {batchButton && <Button >批量删除</Button>} */}
                        {/* // Way 2  */}
                        {this.props.batchButton && <Button >批量删除</Button>}
                    </Col>
                    <Col span={16} >
                        <Pagination
                            className="pull-right"
                            total={this.state.total}
                            // hideOnSinglePage={true}
                            showSizeChanger={this.onChangePagesize}
                            showQuickJumper
                            showTotal={total => `Total ${total} items`}
                            onChange={this.onChangeCurrentPage}
                        />
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

TableData.propTypes = {
    config: PropTypes.object
}

TableData.defaultProps = {
    batchButton: false
}