import React, { Component, Fragment } from 'react';
import { Form, Input, Button, InputNumber, Radio, Select } from 'antd';
const { Option } = Select;
export default class FormComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
        // console.log(this.props)
    }
    componentWillReceiveProps({ formConfig }) {
        this.refs.form.setFieldsValue(formConfig.setFiledValue)

    }

    rules = (item) => {
        let rules = []
        let message = item.message || `${item.label}` + "不能为空"
        if (item.required) {
            rules.push({ required: true, message })
        }
        // console.log(rules)

        if (item.rules && item.rules.length > 0) {
            rules = rules.concat(item.rules)
        }
        // console.log(rules)
        return rules

    }
    inputItem = (item) => {
        const rules = this.rules(item)
        return (
            //Way 1
            // <Form.Item label={item.label} name={item.name} key={item.name} rules={item.rules} >
            //     <Input />
            // </Form.Item>

            <Form.Item label={item.label} name={item.name} key={item.name} rules={rules} >
                <Input />
            </Form.Item>
        )

    }

    // input
    inputNumberElem = (item) => {
        const rules = this.rules(item)
        return (
            <Form.Item label={item.label} name={item.name} key={item.name} min={item.min} max={item} placeholder={item.placeholder}>
                <InputNumber />
            </Form.Item>
        )
    }
    // select
    selectElem = (item) => {
        const rules = this.rules(item)
        return (
            <Form.Item label={item.label} name={item.name} key={item.name} rules={rules} >

                <Select>
                    {item.options && item.options.map(item => {
                        return <Option value={item.value}>{item.label}</Option>
                    })

                    }

                </Select>

            </Form.Item>
        )
    }
    // // select
    radioElem = (item) => {

        return (
            <Form.Item label={item.label} name={item.name} key={item.name} >
                <Radio.Group>
                    {
                        item.options && item.options.map(elem => {
                            return <Radio value={elem.value} key={elem.value}>{elem.label}</Radio>
                        })
                    }
                </Radio.Group>
            </Form.Item>
        )
    }

    //seprate the props from the parent component with map method
    initformItem = () => {
        const { formItem } = this.props
        // console.log(formItem)
        let formList = []
        formItem.map(item => {
            if (item.type === "Input") {
                formList.push(
                    this.inputItem(item))
            }
            if (item.type === "Select") { formList.push(this.selectElem(item)); }
            if (item.type === "InputNumber") { formList.push(this.inputNumberElem(item)); }
            if (item.type === "Radio") { formList.push(this.radioElem(item)); }


        })
        // console.log(formList)
        return formList

    }

    onSubmit = (value) => {
        if (this.props.submit) {
            this.props.submit(value)
            return false
        }
    }

    render() {

        return (

            <Form ref="form" onFinish={this.onSubmit} initialValues={this.props.formConfig.initialValues} {...this.state.formLayout}>
                {this.initformItem()}

                <Form.Item >
                    <Button type="primary" htmlType="submit" loading={this.state.loading}>确认</Button>
                </Form.Item>


            </Form>




        );
    }
}
