import React, { Component } from 'react';
import { Table } from 'antd';
import { TableList } from '../../api/common';
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

        };


    }

    componentDidMount() {
        console.log(this.props.config);
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
                    data: resData.data
                })
            }
            this.setState({ loadingTable: false })
        }).catch(err => {

            this.setState({ loadingTable: false })
        })
    }

    onCheckbox = (Value) => {
        console.log(Value);
    }



    render() {
        const { thead, checkbox, rowkey } = this.props.config
        const rowSelection = {
            onChange: this.onCheckbox
        }
        return <Table loading={this.state.loadingTable} rowSelection={checkbox ? rowSelection : null} columns={thead} dataSource={this.state.data} bordered rowKey='id' />;
    }
}
