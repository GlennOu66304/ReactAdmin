import React, { Component, Fragment } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import { validate_password } from '../../utils/validate';
import { Login } from '../../api/account';
import Code from '../../components/code/index';
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',

        };
    }
    toggleForm = () => {
        this.props.switchForm('register');
    }

    onFinish = (values) => {
        Login(values).then(res => {
            console.log(res)
        }).catch(err => { })

        console.log('Received values of form: ', values);
    }

    inputChange = (e) => {

        let value = e.target.value
        this.setState({
            username: value
        })
    }

    render() {
        const { username } = this.state
        return (
            <Fragment>

                <div className="form-header">
                    <h4 className="column">登录</h4>
                    <span onClick={this.toggleForm} >账号注册</span>
                </div>

                <div className="form-content">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                { required: true, message: '邮箱不能为空' },
                                { type: "email", message: '邮箱格式不正确' }
                            ]}
                        >
                            <Input onChange={this.inputChange} value={username} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入邮箱" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={
                                [{ required: true, message: '密码不能为空!' }, {
                                    pattern: validate_password, message: '请输入大于6位小于20位的数字+密码'
                                }
                                ]}
                        >
                            <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="请输入密码" />
                        </Form.Item>

                        <Form.Item
                            name="code"
                            rules={[
                                { required: true, message: '验证码不能为空!' }
                                , { len: 6, message: '请输入6位的验证码' }

                            ]}
                        >
                            <Row gutter={13}>
                                <Col span={15}>
                                    <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="请输入代码" />
                                </Col>
                                <Col span={9}>
                                    <Code username={username} module={module} />
                                </Col>
                            </Row>

                        </Form.Item>




                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" block>
                                登录
                            </Button>

                        </Form.Item>
                    </Form>
                    ;
                </div>

            </Fragment>
        );


    }
}

export default LoginForm;