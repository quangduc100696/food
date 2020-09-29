import React, { useEffect, useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
import RequestUtils from '../../util/RequestUtils'
import UpdateFood from './UpdateFood';
const originData = [
    {
        food_id: '',
        name: '',
        price: '',
        status: '',
        image: '',
    }
];
const Food = () => {

    useEffect(() => {
        const reques = RequestUtils.Get("http://127.0.0.1:8080/admin/food");
        console.log(reques);
    }, []);
 
    const EditableCell = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
    }) => {
        const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;//?
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{
                            margin: 0,
                        }}
                        rules={[
                            {
                                required: true,
                                message: `Please Input ${title}!`,
                            },
                        ]}
                    >
                        {inputNode}
                    </Form.Item>
                ) : (
                        children
                    )}
            </td>
        );
    };

    const EditableTable = () => {
        const [form] = Form.useForm();
        // const [data, setData] = useState(originData);
        const [editingKey, setEditingKey] = useState('');
        const [reques, setReques] = useState(originData);

        const isEditing = (record) => record.food_id === editingKey;

        const edit = (record) => {
            form.setFieldsValue({
                food_id: '',
                name: '',
                price: '',
                status: '',
                image: '',
                ...record,
            });
            setEditingKey(record.food_id);
        };

        const cancel = () => {
            setEditingKey('');
        };

        const save = async (key) => {
            try {
                const row = await form.validateFields();
                const newReques = [...reques];
                const index = newReques.findIndex((item) => key === item.food_id);

                if (index > -1) {
                    const item = newReques[index];
                    newReques.splice(index, 1, { ...item, ...row });
                    setReques(newReques);
                    setEditingKey('');
                } else {
                    newReques.push(row);
                    setReques(newReques);
                    setEditingKey('');
                }
            } catch (errInfo) {
                console.log('Validate Failed:', errInfo);
            }
        };

        const columns = [
            {
                title: 'Tên món ăn',
                dataIndex: `name`,
                width: '25%',
                editable: true,
            },
            {
                title: 'Giá',
                dataIndex: `price`,
                width: '15%',
                editable: true,
            },
            {
                title: 'status',
                dataIndex: `status`,
                width: '20%',
                editable: true,

            },

            {
                title: 'image',
                dataIndex: `image`,
                width: '20%',
                editable: true,

            },

            {
                title: 'operation',
                dataIndex: 'operation',
                render: (_, record) => {
                    const editable = isEditing(record);
                    return editable ? (
                        <span>
                            <a
                                href="javascript:;"
                                onClick={() => save(record.food_id)}
                                style={{
                                    marginRight: 8,
                                }}
                            >
                                Save
                    </a>
                            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                                <a>Cancel</a>
                            </Popconfirm>
                        </span>
                    ) : (
                            <a disabled={editingKey !== ''} onClick={() => edit(record)}>
                                Edit
                            </a>
                        );
                },
            },
        ];
        const mergedColumns = columns.map((col) => {
            if (!col.editable) {
                return col;
            }

            return {
                ...col,
                onCell: (record) => ({
                    record,
                    inputType: col.dataIndex === 'age' ? 'number' : 'text',//?
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: isEditing(record),
                }),
            };
        });
        return (
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={reques}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                />
            </Form>
        );
    };

    return <>
        <UpdateFood />
        <EditableTable />
    </>
}

export default Food
