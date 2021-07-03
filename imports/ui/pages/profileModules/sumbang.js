import React, { useState, useEffect } from 'react';

import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Select from 'antd/es/select';
import Steps from 'antd/es/steps';
import Button from 'antd/es/button';
import Table from 'antd/es/table';
import Tag from 'antd/es/tag';
import Space from 'antd/es/space';
import Modal from 'antd/es/modal';
import message from 'antd/es/message';

import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import BarChartOutlined from '@ant-design/icons/BarChartOutlined';
import EyeOutlined from '@ant-design/icons/EyeOutlined';

import Step1 from './sumbangSteps/step1';
import Step2 from './sumbangSteps/step2';
//import Step2Tutorial from './sumbangSteps/step2tutorial';
import Step3 from './sumbangSteps/step3';

const { Step } = Steps;
const { Option } = Select;

//article submission steps
const steps = [
    {
        title: 'Butiran',

    },
    {
      title: 'Kandungan',

    },
    {
      title: 'Pratonton',

    },
];

//article list Table
const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Tajuk Artikel',
      dataIndex: 'tajuk',
      key: 'tajuk',
    },
    {
      title: 'Kategori',
      key: 'kategori',
      dataIndex: 'kategori',
      render: kategori => (
        <>
          {kategori.map(kat => {
            let color = kat == 'Teknologi' ? 'geekblue' : 'green';
            if (kat === 'Tutorial') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={kat}>
                {kat.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
        title: (<BarChartOutlined/>),
        dataIndex: 'impak',
        key: 'impak',
    },
    {
        title: (<EyeOutlined />),
        dataIndex: 'tontonan',
        key: 'tontonan',
    },
    {
      title:(<DeleteOutlined style={{ color: 'red'}}/>),
      key: 'arahan',
      render: (text, record) => (
        <Space size="middle">
          <DeleteOutlined style={{ color: 'red', cursor:'pointer'}}/>
        </Space>
      ),
    },
];

const dataTable = [
    {
        key: '1',
        id: '12412415',
        tajuk: 'Pendekatan Flipped Classroom',
        kategori: ['Pedagogi'],
        impak:4.5,
        tontonan: 245
    },
    {
        key: '2',
        id: '12454615',
        tajuk: 'Canva',
        kategori: ['Teknologi'],
        impak: 2.2,
        tontonan: 590
    }
];

let locale = {
    emptyText: 'Anda belum menyumbang apa-apa artikel.'
}

const Sumbang = () => {

    const [ toggleModal, setToggleModal ] = useState(false);
    const [ current, setCurrent ] = useState(0);
    const [ formValue, setFormValue ] = useState([]);
    const [ dataAlatan, setDataAlatan ] = useState([]);
    const [ formValue2, setFormValue2 ] = useState([]);
    const [ errorForm, setErrorForm ] = useState(false);

    const openModal = () => {
        setToggleModal(true)
    }

    const handleOk = () => {
        console.log('OK');
    }
    
    const handleCancel = () => {
        setToggleModal(false);
        setCurrent(0);
    }

    const next = () => {
        setCurrent(current + 1);
    };
    
    const prev = () => {
        setCurrent(current - 1);
    };

    useEffect(() => {
        console.log('fv: ',formValue);
        console.log('dta: ',dataAlatan);
        console.log('fv2: ', formValue2);
        const errorCheck = () => {
            if(formValue.length === 0){
                setErrorForm(true)
            } else {
                if(current === 0){
                    if(formValue.some(e => e.value === undefined || e.value === '' || e.value === 0 || e.value.length === 0 )){
                        setErrorForm(true)
                    } else {
                        setErrorForm(false)
                    }
                }
                if(current === 1){
                    //console.log('triggered 1')
                    if(formValue2.length === 0){
                        setErrorForm(true)
                    } else {
                        if(formValue2.some(e => e.value === "<p><br></p>")){
                            setErrorForm(true)
                        } else {
                            setErrorForm(false)
                        } 
                    }
                }
                
            }
        }
        errorCheck();
    },[formValue, dataAlatan, formValue2, current])

    const deleteY = (data) => { setFormValue2(formValue2 => formValue2.filter(obj => !obj.name.includes(data)));}

    return (
        <>
        <Row justify='center' align="top" style={{ paddingBottom: 10}}>
            <Col xs={24}>
                <Row justify='center' align="top">
                    <Button style={{ marginBottom:20 }} onClick={() => openModal()}><PlusOutlined/> Tambah Artikel</Button>
                </Row>
                <Table locale={locale} columns={columns} dataSource={dataTable} />
            </Col>
        </Row>
        <Modal
            maskClosable={false}
            visible={toggleModal}
            width={1000}
            title="Tambah Artikel"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <Row justify='center' align="top" style={{ padding: 10}}>
                <Col>
                    {
                        current === 0 ? 
                            <Step1 fields={formValue} onChange={(newFields) => {setFormValue(newFields)}}/>
                        : current === 1 ?
                            <Step2 fields={formValue2} fieldsAlatan={dataAlatan} onChangeAlatan={(newData) => {setDataAlatan(newData)}} onChange={(newFields) => {setFormValue2(newFields)}}/>
                        : current === 2 ?
                            <Step3 formValue={formValue} formValue2={formValue2} dataAlatan={dataAlatan} />
                        :''
                    }
                </Col>
            </Row>
            <div className="steps-action" style={{ textAlign:'right' }}>
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Kembali
                    </Button>
                )}
                {current < steps.length - 1 && (
                    <Button 
                        type="primary" 
                        onClick={() => next()} 
                        disabled={errorForm}
                    >
                        Seterusnya
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Selesai & Simpan
                    </Button>
                )}
            </div>
        </Modal>
        </>
    )
}
export default Sumbang;