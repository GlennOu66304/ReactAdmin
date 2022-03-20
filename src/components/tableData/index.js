import React, { Component, Fragment } from "react";
import { TableList } from "../../api/common";
import { Delete } from "../../api/department";
import PropTypes from "prop-types";
import TableData2 from "./TableData2";
import { Modal, message,Row,Col } from "antd";
import FormSearch from "../../components/formSearch/index";
export default class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWork: "",
      data: [],
      pageNumber: 1,
      pageSize: 10,
      checkboxValue: [],
      rowkey: "id",
      loadingTable: false,
      toal: 0,
      visible: false,
      id: "",
    };
  }

  // finish the dom insert
  componentDidMount() {
    // console.log(this.props.config);
    // this is from the parent compoent List html part
    //  <TableData onRef={this.getChildRef} config={this.state.tableConfigs} />

    // load the data
    this.loadData();
    this.props.onRef(this);
  }

  // Form search
  search = (value) => {
    console.log(value);
    if (this.state.loadingTable) {
      return false;
    }

    this.setState({
      keyWork: value.username,
      pageNumber: 1,
      pageSize: 10,
    });
    this.loadData();
  };

  // reload the data
  loadData = () => {
    const { pageNumber, pageSize, keyWork } = this.state;

    const requestData = {
      url: this.props.config.url,
      method: this.props.config.method,
      data: {
        name: keyWork,
        pageNumber: pageNumber,
        pageSize: pageSize,
      },
    };
    if (keyWork) {
      requestData.data.keyWork = keyWork;
    }
    TableList(requestData)
      .then((res) => {
        const resData = res.data.data;

        if (resData) {
          this.setState({
            data: resData.data,
            total: resData.total,
          });
        }
        // console.log(resData)
        this.setState({ loadingTable: false });
      })
      .catch((err) => {
        this.setState({ loadingTable: false });
      });
  };

  //Page size change
  onChangePagesize = (value, page) => {
    // console.log(value);
    // console.log(page);
    this.setState(
      {
        pageNumber: 1,
        pageSize: page,
      },
      () => {
        this.loadData();
      }
    );
  };

  //pagination
  onChangeCurrentPage = (value) => {
    // console.log(value);
    this.setState(
      {
        pageNumber: value,
      },
      () => {
        this.loadData();
      }
    );
  };

  // delete the row and load the pop up window to confirm the action.
  onHandleDelete = (id) => {
    this.setState({ visible: true });
    if (id) {
      this.setState({ id: [id] });
    }
  };

  //confirm the cancel
  // confirm delete
  handleOk = () => {
    Delete({ id: this.state.id.join() }).then((res) => {
      message.info(res.data.message);

      this.setState({
        visible: false,
        selectedRowKeys: [],
        id: "",
      });
      this.loadData();
    });
  };

  // close the window
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  // check box
  onCheckbox = (Value) => {};

  // html part code

  render() {
    const { thead, checkbox, rowkey, formItem} =
    this.props.config;
    // const { thead, checkbox, rowkey } = this.props.config;

    // console.log({ rowkey });

    const rowSelection = {
      onChange: this.onCheckbox,
    };

    return (
      <Fragment>

          <FormSearch formItem={formItem} search={this.search} />

       

        {/* table content */}
        <div className="table-wrap">
          {/* table data part UI */}
          <TableData2
            columns={thead}
            data={this.state.data}
            total={this.state.total}
            loaddingTbale={this.state.loadingTable}
            bastchButton={true}
            rowSelection={checkbox ? rowSelection : null}
            rowkey={rowkey} //1.Key value pass logic:2)To chald component Table Data(state Component)
            onShowSizeChange={this.onChangePagesize}
            onChange={this.onChangeCurrentPage}
            onDelete={this.onHandleDelete}
          />

          {/* <Table loading={this.state.loadingTable} rowSelection={rowSelection} rowKey='id' columns={columns} dataSource={data} bordered></Table> */}

          {/* Modal section */}
          <Modal
            title="提示"
            visible={this.state.visible}
            okText="确认"
            cancelText="取消"
            onCancel={this.handleCancel}
            onOk={this.handleOk}
          >
            <p>
              确定删除此选项？<strong>删除后将无法修复</strong>
            </p>
          </Modal>
        </div>
      </Fragment>
    );
  }
}

TableData.propTypes = {
  config: PropTypes.object,
  id: PropTypes.string,
};

TableData.defaultProps = {
  batchButton: false,
  id: "",
};
