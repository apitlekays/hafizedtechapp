import React, { useState, useEffect } from 'react';
import { useCurrentUserProfile } from '../../../../../client/CurrentUserProfileContext';
import TextEditor from './texteditor';
import TextEditorSimple from './texteditorsimple';

import Typography from 'antd/es/typography';
import Form from 'antd/es/form';
import Alert from 'antd/es/alert';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import InputNumber from 'antd/es/input-number';
import Select from 'antd/es/select';

const { Option } = Select;
const { Text, Paragraph } = Typography;

const Step2 = ({onChange, fields, onChangeAlatan, fieldsAlatan}) => {
    const currentUser = useCurrentUserProfile(); //get current user

    return (
        <>
            <h2>Isi Kandungan</h2>
            <Row justify='center' align="top">
                <Col xs={24} md={12} style={{ padding: 5 }}>
                    <Paragraph>Artikel boleh dibahagi kepada beberapa bahagian seperti berikut:
                        <ul>
                            <li>Pengenalan</li>
                            <li>Latar Belakang</li>
                            <li>Langkah-langkah <span style={{ fontStyle: 'italic'}}>(jika artikel ini jenis 'tutorial')</span></li>
                            <li>Rujukan</li>
                        </ul>
                        Anda boleh menambah mana-mana bahagian baharu mengikut keperluan dan kesesuaian artikel yang dikarang. Gunakan format yang bersesuaian seperti 'quote',<span style={{ fontWeight: 800 }}> bold</span>, dan <a href='#'>pautan</a> dimana-mana bahagian teks yang dirasakan perlu.
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
                    <Paragraph>Jika artikel teknologi/pedagogi ini melibatkan penggunaan bahan-bahan seperti komputer, projektor, dan aplikasi web, senaraikan bahan/peralatan/sistem tersebut dibawah untuk memudahkan pembaca mengikuti dan memahami artikel atau tutorial anda.</Paragraph>
                        <Form.Item
                            name="bahan/alatan"
                        >
                            <TextEditorSimple />
                        </Form.Item>
                    <h3>Tempoh Masa</h3>
                    <Paragraph>Sila nyatakan tempoh yang akan diambil seseorang untuk selesai mengikuti artikel/tutorial ini. Contoh <span style={{ fontStyle:'italic' }}>45 minit.</span></Paragraph>
                        <Form.Item
                            label="Masa"
                            name="masa"
                        >
                            <InputNumber 
                                formatter={value => `${value} minit`} 
                                keyboard='true'
                                step={5}
                            />
                        </Form.Item>
                    <h3>Kaitan Artikel Sedia Ada</h3>
                    <Paragraph>Sila pilih mana-mana artikel tersedia yang berkait rapat dengan artikel/tutorial ini.</Paragraph>
                        <Form.Item
                            name="artikel-berkait"
                            label="Artikel Berkaitan"
                        >
                            <Select placeholder="Pilih artikel">
                                <Option value="articleID1">Pendekatan Flipped Classroom</Option>
                                <Option value="articleID2">Canva</Option>
                                <Option value="articleID3">Plotagon</Option>
                            </Select>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            <Form
                name="basic"
                fields={fields}
                onFieldsChange={(_,allFields) =>{
                    onChange(allFields);
                }}
            >
            <h3>Deraf Artikel :</h3>
                <Form.Item
                    name="artikel"
                >
                    <TextEditor />
                </Form.Item>
            </Form>
        </>
    )
}
export default Step2;