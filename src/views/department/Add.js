import React, { Component } from 'react'
import { Form, Input, Button, InputNumber, Radio, message } from 'antd';
import { departmentApi } from '../../api/department';
export default class DepartmentAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            formLayout: {
                labelCol: { span: 2 },
                wrapperCol: { span: 20 }
            }
        }
    }
    onSubmit = (value) => {
        if (!value.name) {
            message.error("请输入部门名称");
            return false;
        }

        if (!value.number) {
            message.error("请输入部门人员数量");
            return false;
        }

        if (!value.content) {
            message.error("请输入部门描述");
            return false;
        }

        this.setState({
            loading: true
        })


        departmentApi(value).then(res => {
            const data = res.data
            message.info(data.message)
            this.setState({
                loading: false
            })
            this.refs.form.resetFields()
        }).catch(err => {
            this.setState({
                loading: false
            })
        })


    }

    render() {
        return (
            <Form ref="form" onFinish={this.onSubmit} initialValues={{ status: true, number: 0 }} {...this.state.formLayout}>
                <Form.Item label="部门名称" name="name" >
                    <Input />
                </Form.Item>

                <Form.Item label="人员数量" name="number" >
                    <InputNumber min={0} max={100} />
                </Form.Item>

                <Form.Item label="禁启用" name="status" >
                    <Radio.Group defaultValue={true}>
                        <Radio value={false}>禁用</Radio>
                        <Radio value={true}>启用</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="描述" name="content" >
                    <Input.TextArea />
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit" loading={this.state.loading}>确认</Button>
                </Form.Item>

            </Form>
        )
    }
}
