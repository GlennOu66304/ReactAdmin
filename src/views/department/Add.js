import React, { Component, Fragment } from "react";
import { message } from "antd";
import { departmentApi, Detailed, Edit } from "../../api/department";
import FormComponent from "../../components/form/index";
// import Store from "../../store/index";

export default class DepartmentAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,

      formLayout: {
        labelCol: { span: 2 },
        wrapperCol: { span: 20 },
      },

      formConfig: {
        url: "/department/add",
        initialValues: {
          number: 0,
          status: true,
        },

        setFiledValue: "",
      },

      formItem: [
        //rule method1
        // { type: "Input", label: "部门名称", name: "name", rules: [{ required: 'true', message: '请输入部门名称' }], },
        //Rule Method2

        // 部门名称
        {
          type: "Input",
          label: "部门名称",
          name: "name",
          required: true,
          rules: [{}, {}],
        },

        // {
        //     type: "Select", label: "部门名称aaa", name: "name", required: true, rules: [{}, {}], options: [
        //         { value: 1, label: '研发部' },
        //         { value: 2, label: '人事部 ' },
        //     ]
        // },

        // 人员数量
        {
          type: "InputNumber",
          label: "人员数量",
          name: "number",
          required: true,
          min: 0,
          max: 100,
          placeholder: "请输入人员数量",
        },

        // 禁启用

        {
          type: "Radio",
          label: "禁启用",
          name: "status",
          required: true,
          options: [
            { label: "禁用", value: false },
            { label: "启用", value: true },
          ],
        },

        // 描述
        { type: "Input", label: "描述", name: "content" },
      ],

      id: "",
    };
  }

  //   before insert the dom
  componentWillMount() {
    //   react路由传参(3种方式):3state传参(刷新页面后参数不消失，state传的参数是加密的)
    // you can find this configurantion from the list option:
    // this.state.tableConfigs.method.thead.操作 edit or delete.edit.Button
    if (this.props.location.state) {
      this.setState({
        id: this.props.location.state.id,
      });
    }
  }

  // after finish the dom insert element
  componentDidMount() {
    // console.log(this.state)

    // lcoa the function getDetailed
    this.getDetailed();
    // console.log(this.props.location.state.id)
    // console.log(Store.getState());
  }

  //load the id data from the server
  // this function will be load after the dom finish the insert

  getDetailed = () => {
    //check if saved item
    // console.log(this.props.location)

    //  if there is no id, then stop the function

    if (!this.props.location.state) {
      return false;
    }

    // or if there is a id, then load the this id's data

    // load this id's specific information :axios get the data

    Detailed({ id: this.state.id }).then((res) => {
      // message.info(res.data.message)

      //   update the formConfig data

      this.setState({
        formConfig: {
          ...this.state.formConfig,
          setFiledValue: res.data.data,
        },
      });

      //add the inintial value to the form sections
      // this.refs.form.setFieldsValue(res.data.data)
    });
  };

  // onHandleEdit
  onHandleEdit = (value) => {
    const requestData = value;
    //Add Key-Value Pairs to JavaScript Objects
    requestData.id = this.state.id;

    Edit(requestData)
      .then((res) => {
        const data = res.data;
        message.info(data.message);
        this.setState({
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
        });
      });
  };

  //   Add the data to department list
  onHandleAdd = (value) => {
    // call the api action
    const requestData = value
    departmentApi(requestData)
      .then((res) => {
        const data = res.data;

        message.info(data.message);
        // stop the loading
        this.setState({
          loading: false,
        });
      })

      .catch((err) => {
        this.setState({
          loading: false,
        });
      });
  };

  // submet the field value
  onHandleSubmit = (value) => {
    // console.log(value);

    if (this.state.id) {
      // call onHandleEdit function
      this.onHandleEdit(value);
    } else {
      // call onHandleAdd function
      this.onHandleAdd(value);
    }
  };

  //   html part

  render() {
    return (
      <Fragment>
        {/* load the FormComponent component */}
        <FormComponent
          // leftorm Config part will be given into the child component, tight part is the actul value from the state
          formConfig={this.state.formConfig}
          formItem={this.state.formItem}
          //   call the onSubmit function
          submit={this.onHandleSubmit}
        />
      </Fragment>
    );
  }
}
