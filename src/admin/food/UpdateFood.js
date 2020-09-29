import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

class DrawerForm extends React.Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <>
                <Button type="primary" onClick={this.showDrawer}>
                    <PlusOutlined /> Thêm mới
        </Button>
                <Drawer
                    title="New Food"
                    width={720}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    footer={
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >
                            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                                Cancel
                            </Button>
                            <Button onClick={this.onClose} type="primary">
                                Submit
                            </Button>
                        </div>
                    }
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    label="Tên món ăn"
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Nhập tên món ăn',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Nhập tên món ăn" />
                                </Form.Item>
                            </Col>

                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="Price"
                                    label="giá"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Nhập giá bán',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Nhập giá bán">
                                    </Input>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="image"
                                    label="image"
                                >
                                    <Input type="file" placeholder="chọn ảnh">
                                    </Input>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="status"
                                    label="status"
                                >
                                    <Input.TextArea rows={4} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Drawer>
            </>
        );
    }
}

const UpdateFood = () => {
    return (
        <DrawerForm />
    );
};

export default UpdateFood;