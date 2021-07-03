import React from 'react';
import { useCurrentUserProfile } from '../../../../../client/CurrentUserProfileContext';

import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Button from 'antd/es/button';
import Typography from 'antd/es/typography';
import Select from 'antd/es/select';
import Upload from 'antd/es/upload';
import Slider from 'antd/es/slider';


import UploadOutlined from '@ant-design/icons/UploadOutlined';

import './steps.css';

const { Option } = Select;
const { Text, Paragraph } = Typography;

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
};
const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 },
    },
};

const Step1 = ({onChange, fields }) => {
    const currentUser = useCurrentUserProfile(); //get current user
    const normFile = (e) => {
        console.log('Upload event:', e);
      
        if (Array.isArray(e)) {
          return e;
        }
      
        return e && e.fileList;
    };

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
          onSuccess("ok");
        }, 0);
    };

    return (
        <>
            <h2>Butiran Asas</h2>
            <Paragraph>Hack(Edu).Tech memerlukan beberapa butiran asas bagi setiap artikel yang ingin diterbitkan. </Paragraph>
            <Form
                name="basic"
                fields={fields}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ author: `${currentUser.name}` }}
                onFieldsChange={(_,allFields) =>{
                    onChange(allFields);
                }}
            >
            {
                currentUser != undefined ?
                    <Form.Item
                        hasFeedback
                        label="Pengarang"
                        name="author"
                    ><Input disabled/>
                </Form.Item>
                :''
            }
                
                    
                <Form.Item
                    hasFeedback
                    label="Tajuk Artikel"
                    name="tajuk"
                    rules={[{ required: true, message: 'Sertakan tajuk bagi artikel ini.' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    hasFeedback
                    name="kategori"
                    label="Kategori Artikel"
                    rules={[{ required: true, message: 'Pilih salah satu dari kategori berikut.' }]}
                >
                    <Select placeholder="Pilih kategori artikel">
                        <Option value="Teknologi">Teknologi</Option>
                        <Option value="Pedagogi">Pedagogi</Option>
                        <Option value="Tutorial">Tutorial</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    hasFeedback
                    name="image"
                    label="Imej Utama"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra="Muat naik satu (1) imej dengan dimensi sekurang-kurangnya 760x350 pixel."
                    rules={[{ required: true, message: 'Muat naik satu imej.' }]}
                >
                    <Upload name="logo" customRequest={dummyRequest} listType="picture" maxCount={1} >
                    <Button icon={<UploadOutlined />}>Klik untuk muat naik</Button>
                    </Upload>
                </Form.Item>
                <Form.Item 
                    name="tahapSukar" 
                    label="Tahap Kesukaran"
                    rules={[{ required: true, message: 'Beri indikator tahap kesukaran untuk mengaplikasikan idea ini' }]}
                >
                    <Slider
                    marks={{
                        33: (<span style={{ color:'green' }}>Senang</span>),
                        66: (<span style={{ color:'orange' }}>Sederhana</span>),
                        100: (<span style={{ color:'red' }}>Sukar</span>),
                    }}
                    />
                </Form.Item>
            </Form>
        </>
    )
}
export default Step1;