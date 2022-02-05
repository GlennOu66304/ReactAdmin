import React, { Component, Fragment } from 'react'
import { message } from 'antd';
import { departmentApi, Detailed, Edit } from '../../api/department';
import FormComponent from '../../components/form/index';
export default class DepartmentAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            formLayout: {
                labelCol: { span: 2 },
                wrapperCol: { span: 20 }
            },
            formItem: [
                //rule method1
                // { type: "Input", label: "部门名称", name: "name", rules: [{ required: 'true', message: '请输入部门名称' }], },
                //Rule Method2
                { type: "Input", label: "部门名称", name: "name", required: true, rules: [{}, {}] },
                { type: "Select", label: "部门名称aaa", name: "name", required: true, rules: [{}, {}] },
                {
                    type: "InputNumber",
                    label: "人员数量",
                    name: "number",
                    required: true,
                    min: 0,
                    max: 100,
                    style: { width: "200px" },
                    placeholder: "请输入人员数量"
                },
                {
                    type: "Radio",
                    label: "禁启用",
                    name: "statue",
                    required: true,
                    options: [
                        { label: "禁用", value: false },
                        { label: "启用", value: true },
                    ]
                },

                { type: "Input", label: "描述", name: "content", }],
            id: ''
        }
    }
    componentWillMount() {
        if (this.props.location.state) {
            this.setState({
                id: this.props.location.state.id
            })
        }

    }

    componentDidMount() {
        // console.log(this.state)
        this.getDetailed()
        // console.log(this.props.location.state.id)
    }

    //load the id data from the server

    getDetailed = () => {
        //check if saved item
        // console.log(this.props.location)
        if (!this.props.location.state) { return false }
        Detailed({ id: this.state.id }).then(res => {
            // message.info(res.data.message)

            //add the inintial value to the form sections
            this.refs.form.setFieldsValue(res.data.data)
        })
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

        if (!value.status) {
            message.error("请输入部门描述");
            return false;
        }

        this.setState({
            loading: true
        })
        //   use the tenary to decide whether to add or edit
        this.state.id ? this.onHandleEdit(value) : this.onHandleAdd(value)

    }

    onHandleAdd = (value) => {
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



    onHandleEdit = (value) => {
        const requestData = value
        //Add Key-Value Pairs to JavaScript Objects
        requestData.id = this.state.id
        Edit(requestData).then(res => {
            const data = res.data
            message.info(data.message)
            this.setState({
                loading: false
            })

        }).catch(err => {
            this.setState({
                loading: false
            })
        })

    }


    render() {
        return (
            <Fragment>
                <FormComponent formItem={this.state.formItem} />



                {/* <Form ref="form" onFinish={this.onSubmit} initialValues={{ status: true, number: 0 }} {...this.state.formLayout}>



                    <Form.Item label="部门名称" name="name" >
                        <Input />
                    </Form.Item>

                    <Form.Item label="人员数量" name="number" >
                        <InputNumber min={0} max={100} />
                    </Form.Item>

                    <Form.Item label="禁启用" name="status" >
                        <Radio.Group >
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

                </Form> */}
            </Fragment>
        )
    }
}
