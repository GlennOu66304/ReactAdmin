import React, { Component, Fragment } from "react";
import { Table, Button, Pagination, Row, Col } from "antd";
import PropTypes from "prop-types";

// Class Component

export default class TableData2 extends Component {
  // html part

  render() {
    //   deifine  the value
    const {
      columns,
      data,
      total,
      batchButton,
      rowSelection,
      rowkey,//1.Key value pass logic: 3)To chaild component TableData2(UI Component)
      pageNumber,
      onShowSizeChange,
      onChange,
      loadingTable,
      onDelete,
    } = this.props;

    // html part return
    return (
      <Fragment>
        {/* <Table pagination={false} loading={this.state.loadingTable} rowSelection={checkbox ? rowSelection : null} columns={columns} dataSource={data} bordered rowKey='id' /> */}

        {/* data content  */}
        <Table
          rowKey={rowkey} //antd varable name need to be upper calss K(rowKey), then value is from parent component
          pagination={false}
          columns={columns}
          dataSource={data}
          rowSelection={rowSelection}
          bordered
          loading={loadingTable}
          
        />

        {/* bottom row */}
        <Row>
          {/* batch delete */}
          <Col span={8}>
            {{ batchButton } && <Button onClick={onDelete}>批量删除</Button>}
          </Col>

          {/* page number section */}
          <Col span={16}>
            <Pagination
              className="pull-right"
              total={total}
              // hideOnSinglePage={true}
              defaultCurrent={pageNumber}
              showSizeChanger={true}
              onShowSizeChange={onShowSizeChange}
              showQuickJumper
              showTotal={(total) => `Total ${total} items`}
              onChange={onChange}
            />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

// javascipt part

// types
TableData2.propTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.array,
  total: PropTypes.number,
  changePageCurrent: PropTypes.func,
  changePageSize: PropTypes.func,
  batchButton: PropTypes.bool,
  rowSelection: PropTypes.object,

  rowkey: PropTypes.string,//2.Default rowkey value:propsTypes check
  id: PropTypes.string,
};

// default values
TableData2.defaultProps = {
  columns: [],
  dataSource: [],
  total: 0,
  batchButton: false,
  rowkey:"id",//2.Default rowkey value:propsTypes check
  id: "",
};
