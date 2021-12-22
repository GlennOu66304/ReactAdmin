import React, { Component, Fragment } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import { validate_password } from '../../utils/validate';
import { Login } from '../../api/account';
import Code from '../../components/code/index';
import CryptoJs from 'crypto-js'
import { withRouter } from 'react-router-dom';
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: "",
            code: "",
            module: 'login',
            loading: false

        };
    }
    toggleForm = () => {
        this.props.switchForm('register');
    }

    onFinish = (values) => {
        const requestData = {
            username: this.state.username,
            password: CryptoJs.MD5(this.state.password).toString(),
            code: this.state.code
        }
        this.setState({
            loading: true
        })
        Login(requestData).then(res => {
            this.setState({
                loading: true
            })
            this.props.history.push('/index')
        }).catch(err => {
            this.setState({
                loading: false
            })
        })
    }

    inputChangeUsername = (e) => {

        let value = e.target.value
        this.setState({
            username: value
        })
    }

    inputChangePassword = (e) => {

        let value = e.target.value
        this.setState({
            password: value
        })
    }
    inputChangeCode = (e) => {

        let value = e.target.value
        this.setState({
            code: value
        })
    }

    render() {
        const { username, loading } = this.state
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
                            <Input onChange={this.inputChangeUsername} value={username} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入邮箱" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={
                                [{ required: true, message: '密码不能为空!' }, {
                                    pattern: validate_password, message: '请输入大于6位小于20位的数字+密码'
                                }
                                ]}
                        >
                            <Input onChange={this.inputChangePassword} prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="请输入密码" />
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
                                    <Input onChange={this.inputChangeCode} prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="请输入代码" />
                                </Col>
                                <Col span={9}>
                                    <Code username={username} module={module} />
                                </Col>
                            </Row>

                        </Form.Item>




                        <Form.Item>
                            <Button loading={loading} type="primary" htmlType="submit" className="login-form-button" block>
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

export default withRouter(LoginForm);