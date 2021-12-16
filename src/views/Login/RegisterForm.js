import React, { Component, Fragment } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import Code from '../../components/code/index';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    toggleForm = () => {
        this.props.switchForm('login');
    }
    render() {
        return (
            <Fragment>

                <div className="form-header">
                    <h4 className="column">注册</h4>
                    <span onClick={this.toggleForm} type="primary" >账号登录</span>
                </div>

                <div className="form-content">

                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={() => this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="Password" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="Password" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Row gutter={13}>
                                <Col span={15}>
                                    <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="Code" />
                                </Col>
                                <Col span={9}>
                                    <Code />
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

export default RegisterForm;