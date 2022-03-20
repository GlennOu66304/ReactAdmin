import React, { Component } from "react";
import { Form, Input, Button, InputNumber, Radio, Select } from "antd";
const { Option } = Select;
export default class FormComponent extends Component {
  //   props value get
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(this.props)
  }

  // jasvscript write

  // render the site and receive the props from the parent component add.js from the department views DepartmentAdd
  // componentWillReceiveProps is a function
  componentWillReceiveProps({ formConfig }) {
    this.refs.form.setFieldsValue(formConfig.setFiledValue);
  }

  //   rules
  rules = (item) => {
    let rules = [];

    // message content
    // let message = item.message || `${item.label}` + "不能为空";
    let message = "不能为空";
    // item require pop up message item need to be filed
    if (item.required) {
      rules.push({ required: true, message });
    }
    // console.log(rules)

    // combine rules together
    if (item.rules && item.rules.length > 0) {
      rules = rules.concat(item.rules);
    }

    // console.log(rules)
    return rules;
  };

  // // 部门名称输入 和描述填写 inputItem
  inputItem = (item) => {
    const rules = this.rules(item);
    return (
      //Way 1
      // <Form.Item label={item.label} name={item.name} key={item.name} rules={item.rules} >
      //     <Input />
      // </Form.Item>

      <Form.Item
        label={item.label}
        name={item.name}
        key={item.name}
        rules={rules}
      >
        <Input />
      </Form.Item>
    );
  };

  // 人员数量增加或减少1 selectElem
  selectElem = (item) => {
    let rules = this.rules(item);
    return (
      <Form.Item
        label={item.label}
        name={item.name}
        key={item.name}
        rules={rules}
      >
        <Select>
          {item.options &&
            item.options.map((item) => {
              return <Option value={item.value}>{item.label}</Option>;
            })}
        </Select>
      </Form.Item>
    );
  };

  // 人员数量输入 inputNumberElem
  inputNumberElem = (item) => {
    // let rules = this.rules(item);
    return (
      <Form.Item label={item.label} name={item.name} key={item.name}>
        <InputNumber min={item.min} max={item.max} />
      </Form.Item>
    );
  };

  // 禁启用选择  radioElem
  radioElem = (item) => {
    return (
      <Form.Item label={item.label} name={item.name} key={item.name}>
        <Radio.Group>
          {item.options &&
            item.options.map((elem) => {
              return (
                <Radio value={elem.value} key={elem.value}>
                  {elem.label}
                </Radio>
              );
            })}
        </Radio.Group>
      </Form.Item>
    );
  };

  //seprate the props from the parent component with map method
  //   init the formItem start area
  initformItem = () => {
    const { formItem } = this.props;
    // console.log(formItem)
    let formList = [];

    formItem.map((item) => {
      //   call the inputItem function
      // 部门名称输入和底部的描述填写
      if (item.type === "Input") {
        formList.push(this.inputItem(item));
      }

      // 人员数量增加或是减少按钮 call the  selectElem function
      if (item.type === "Select") {
        formList.push(this.selectElem(item));
      }

      //   call the inputNumberElem function
      // 人员数量输入
      if (item.type === "InputNumber") {
        // item.options = this.props.config[item.optionsKey];
        formList.push(this.inputNumberElem(item));
      }

      // radioElem function
      // 禁启用选择 按钮
      if (item.type === "Radio") {
        formList.push(this.radioElem(item));
      }
      
      return formList;
    });

    return formList;
  };

  //   submit the items function
  onSubmit = (value) => {
    // get the props value from the parent component Add.js

    if (this.props.submit) {
      // call the prop's submit function

      this.props.submit(value);

      return false;
    }
  };
  // html part write
  render() {
    return (
      <Form
        ref="form"
        // submit the form, call the onSubmit function,
        onFinish={this.onSubmit}
        initialValues={this.props.formConfig.initialValues}
        {...this.state.formLayout}
      >
        {/* 

according to the api. only when you choose the status value true, that can submit the form,
request successfully.

1.you submit the form, will trigget the  this.onSubmit;
2.then onSumit will trigger the props function  this.props.submit from the parent component(onHandleSubmit())
Add.sj 
3.base on the value then run the onHandleSubmit in add.js;
4. then run the onHandleAdd(value) function in Add.js
*/}

        {/* initFormItem project */}
        {/* start area */}
        {this.initformItem()}

        {/* FormItem  button section*/}
        <Form.Item>
          {/* Button */}
          <Button type="primary" htmlType="submit" loading={this.state.loading}>
            确认
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
