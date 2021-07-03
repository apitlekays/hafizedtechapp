import React from 'react';
import TextEditorSimple from './texteditorsimple';

import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Typography from 'antd/es/typography';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import InputNumber from 'antd/es/input-number';
import Alert from 'antd/es/alert';
import Button from 'antd/es/button';
import Upload from 'antd/es/upload';
import Space from 'antd/es/space';
import Divider from 'antd/es/divider';


import MinusCircleOutlined from '@ant-design/icons/MinusCircleOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import UploadOutlined from '@ant-design/icons/UploadOutlined';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';

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

const { Paragraph } = Typography;
const { TextArea } = Input;

const Step2Tutorial = ({onChangeAlatan, fieldsAlatan, fields, onChange, deleteX }) => {

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
          onSuccess("ok");
        }, 0);
    };

    const normFile = (e) => {
        //console.log('Upload event:', e);
      
        if (Array.isArray(e)) {
          return e;
        }
      
        return e && e.fileList;
    };

    const uploadButton = (
        <div>
          <UploadOutlined />
          <div style={{ marginTop: 8 }}>Imej</div>
        </div>
    );
/* 
    const onChange = (data) => {
        console.log(data)
    } */

    return (
        <>
            <h2>Borang Artikel Tutorial</h2>
            <Row justify='start' align="top">
                <Col xs={24} md={12} style={{ padding: 5 }}>
                    <Paragraph>Artikel tutorial dibahagi kepada dua (2) bahagian seperti berikut:
                        <ul>
                            <li>Pengenalan</li>
                            <li>Langkah-Langkah</li>
                        </ul>
                        Gunakan format yang bersesuaian seperti 'quote','bold', dan 'pautan' dimana-mana bahagian teks yang dirasakan perlu.
                    </Paragraph>
                    <Alert
                    message="Isu Plagiat"
                    description={<span style={{ fontStyle:'italic', fontSize:'0.9em' }} >Untuk mengelakkan daripada isu plagiat timbul, anda diminta untuk menyatakan sumber asal bahan dan kandungan pada mana-mana bahagian artikel ini, jika berkenaan.</span>}
                    type="warning"
                    showIcon
                    style={{ marginBottom: 10 }}
                    />
                    <Alert
                        message="CC BY2.0"
                        description={<span style={{ fontStyle:'italic', fontSize:'0.9em' }} > Artikel ini akan diterbitkan di bawah lesen terbuka (<a href='https://creativecommons.org/licenses/by/2.0/'>Creative Commons - Attribution (CC BY 2.0)</a>) yang menggalakkan perkongsian dan percambahan idea yang sihat.</span>}
                        type="info"
                        showIcon
                        style={{ marginBottom: 10 }}
                    />
                </Col>
                <Col xs={24} md={12} style={{ padding: 5 }}>
                    <Form
                        name="basic"
                        fields={fieldsAlatan}
                        onFieldsChange={(_,allFields) =>{
                            onChangeAlatan(allFields);
                        }}
                    >
                    <h3>Senarai Bahan/Peralatan</h3>
                    <Paragraph>Jika tutorial ini melibatkan penggunaan bahan-bahan seperti komputer, projektor, dan aplikasi web, senaraikan bahan/peralatan tersebut dibawah untuk memudahkan pembaca mengikuti dan memahami tutorial anda.</Paragraph>
                        <Form.Item
                            name="bahan/alatan"
                            
                        >
                            <TextEditorSimple />
                        </Form.Item>
                    <h3>Tempoh Masa</h3>
                    <Paragraph>Sila nyatakan tempoh yang akan diambil seseorang untuk selesai mengikuti tutorial ini. Contoh <span style={{ fontStyle:'italic' }}>45 minit.</span></Paragraph>
                        <Form.Item
                            label="Masa"
                            name="masa"
                            rules={[{ required: true, message: 'Sila sertakan anggaran tempoh yang diambil untuk menyelesaikan tutorial ini.' }]}
                        >
                            <InputNumber 
                                formatter={value => `${value} minit`} 
                                
                            />
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            <Row justify='start' align="top">
                <Col xs={24} style={{ padding: 10}}>
                    <h2>Pengenalan & Langkah-langkah</h2>
                    <Form 
                        //fields={fields}
                        name="dynamic_form_nest_item" 
                        autoComplete="off"
                        onFieldsChange={(_,allFields) =>{
                            onChange(allFields);
                        }}
                    >
                        <Form.List name="tutorial" style={{ width: '100%'}}>
                            {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ index, key, name, fieldKey, ...restField }) => (
                                <div key={key}>
                                <Row>
                                    {
                                        name === 0 ?
                                        <Col xs={24} style={{ padding: 5 }}>
                                            <Form.Item
                                            {...restField}
                                            label='Pengenalan'
                                            name={[name, 'pengenalan']}
                                            fieldKey={[fieldKey, 'pengenalan']}
                                            >
                                                {/* <TextArea rows={4} /> */}
                                                <TextEditorSimple/>
                                            </Form.Item>
                                        </Col>
                                        :
                                        <Col xs={24} md={16} style={{ padding: 5 }}>
                                            <Form.Item
                                            {...restField}
                                            label={'Langkah '+ name}
                                            name={[name, 'langkah'+name]}
                                            fieldKey={[fieldKey, 'langkah'+name]}
                                            >
                                                {/* <TextArea rows={4} /> */}
                                                <TextEditorSimple/>
                                            </Form.Item>
                                        </Col>
                                    }
                                    <Col xs={24} md={8} style={{ padding: 5 }}>
                                    {
                                        name === 0 ?
                                        ''
                                        :
                                        <Space align="start">
                                            <Form.Item
                                            {...restField}
                                            name={[name, 'image'+name]}
                                            fieldKey={[fieldKey, 'image'+name]}
                                            valuePropName="fileList"
                                            getValueFromEvent={normFile}
                                            extra="Muat naik satu (1) imej/tangkap layar"
                                            >
                                                <Upload 
                                                    name="image" 
                                                    customRequest={dummyRequest} 
                                                    listType="picture-card" 
                                                    maxCount={1} 
                                                >
                                                    {/* <Button icon={<UploadOutlined />}>Muat naik imej/ tangkap layar</Button> */}
                                                    {uploadButton}
                                                </Upload>
                                            </Form.Item>
                                            <DeleteOutlined onClick={() => { deleteX(name); remove(name); }} style={{ color: 'red'}}/>
                                        </Space>
                                    }
                                    </Col>
                                </Row>
                                <Divider/>
                                </div>
                                ))}
                                <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Tambah Langkah
                                </Button>
                                </Form.Item>
                            </>
                            )}
                        </Form.List>
                    </Form>
                </Col>
            </Row>
        </>
    )
}
export default Step2Tutorial;