import React, { Component, Fragment } from 'react';
import { Table, Button, Pagination, Row, Col } from 'antd';
import PropTypes from 'prop-types';
export default class TableData2 extends Component {

    render() {

        const { columns, data, total, batchButton, rowSelection, rowkey, pageNumber, onShowSizeChange, onChange, loadingTable, onDelete } = this.props

        return (
            <Fragment>

                {/* <Table pagination={false} loading={this.state.loadingTable} rowSelection={checkbox ? rowSelection : null} columns={columns} dataSource={data} bordered rowKey='id' /> */}

                <Table pagination={false} columns={columns} dataSource={data} rowSelection={rowSelection} bordered loading={loadingTable} rowkey={rowkey} />

                <Row>
                    <Col span={8} >
                        {{ batchButton } && <Button onClick={onDelete} >批量删除</Button>}

                    </Col>
                    <Col span={16} >
                        <Pagination
                            className="pull-right"
                            total={total}
                            // hideOnSinglePage={true}
                            defaultCurrent={pageNumber}
                            showSizeChanger={true}
                            onShowSizeChange={onShowSizeChange}
                            showQuickJumper
                            showTotal={total => `Total ${total} items`}
                            onChange={onChange}
                        />
                    </Col>
                </Row>
            </Fragment>
        )



    }

}
TableData2.propTypes = {
    columns: PropTypes.array,
    dataSource: PropTypes.array,
    total: PropTypes.number,
    changePageCurrent: PropTypes.func,
    changePageSize: PropTypes.func,
    batchButton: PropTypes.bool,
    rowSelection: PropTypes.object,
    rowKey: PropTypes.string,
    id: PropTypes.string,
}

TableData2.defaultProps = {

    columns: [],
    dataSource: [],
    total: 0,
    batchButton: false,
    id: '',


}