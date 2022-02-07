import React, { Component, Fragment } from 'react';
import { Form, Input, Button } from 'antd';
export default class FormSearch extends Component {
    onSubmit = (value) => {
        this.props.search(value);
    }
    render() {
        return (
            <Fragment>

                <Form layout="inline" onFinish={this.onSubmit}>
                    <Form.Item label="部门名称" name="username" >
                        <Input placeholder="请输入部门名称" />
                    </Form.Item>
                    <Form.Item  >
                        <Button loading={this.loadingTable} type="primary" htmlType="submit">搜索</Button>
                    </Form.Item>
                </Form>

            </Fragment>

        );
    }
}
