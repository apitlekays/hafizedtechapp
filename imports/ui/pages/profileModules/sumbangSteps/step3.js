import React, { useState, useEffect} from 'react';

import Row from 'antd/es/row';
import Col from 'antd/es/col';
import PageHeader from 'antd/es/page-header';
import Tag from 'antd/es/tag';
import Typography from 'antd/es/typography';
import Space from 'antd/es/space';
import Progress from 'antd/es/progress';
import Button from 'antd/es/button';

import CommentOutlined from '@ant-design/icons/CommentOutlined';
import LikeOutlined from '@ant-design/icons/LikeOutlined';
import CheckOutlined from '@ant-design/icons/CheckOutlined';
import DashboardOutlined from '@ant-design/icons/DashboardOutlined';
import BarsOutlined from '@ant-design/icons/BarsOutlined';
import FieldTimeOutlined from '@ant-design/icons/FieldTimeOutlined';

const { Title, Text, Paragraph } = Typography;

const Step3 = (formValue, formValue2, dataAlatan) => {
   // console.log('this is formValue :', formValue);

    const [ tutorial, setTutorial ] = useState();
    const [ mainImage, setMainImage ] = useState();

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    useEffect(() => {
        const tutorialX = () => {
            setTutorial(formValue.formValue.some(e => e.value === 'Tutorial'))
        }
        const getMainImage = () => {
            if(formValue != {}){
                getBase64(formValue.formValue[3].value[0].originFileObj, imageURL => 
                    setMainImage(imageURL)
                )
            }
        }
        tutorialX();
        getMainImage();
    })

    return(
        <>
            {
                tutorial ?
                <>
                <Row justify='center' align="top" style={{ maxWidth:'1400px', marginTop:20, marginBottom:20, marginLeft:'auto', marginRight:'auto'}}>
                    <PageHeader
                        ghost={false}
                        title={formValue.formValue[1].value}
                        tags={<Tag color='blue'>#{formValue.formValue[2].value}</Tag>}
                    >
                        <Row justify='center' align="top">
                            <Col xs={24} sm={12} style={{ textAlign: 'center'}}>
                                <Title>{formValue.formValue[1].value}</Title>
                                <div style={{ color: 'grey', marginTop:10}}>
                                    <span>Ditulis oleh: {formValue.formValue[0].value}</span><br/>
                                <Space size='large'>
                                    <span><CommentOutlined style={{color:'#1975f1'}}/> Komen: 0</span>
                                    <span><LikeOutlined style={{color:'#f9c03e'}}/> Suka: 0</span>
                                    <span><CheckOutlined style={{color:'#33b464'}}/> Selesai: 0</span>
                                </Space>
                                </div>
                            </Col>
                        </Row>
                        <Row justify='center' align="top" style={{ maxWidth:'1200px', marginTop:20, marginBottom:20, marginLeft:'auto', marginRight:'auto' }}>
                            <Col xs={24} sm={12} style={{ padding: 30 }}>
                                <img src={mainImage} style={{ width:'100%', border: '1px solid #e3e8ed', borderRadius:4, padding:10, }}/>
                            </Col>
                            <Col xs={24} sm={12} style={{ padding: 30 }}>
                                <Row style={{ border: '1px solid #e3e8ed', borderRadius:4, padding:10, backgroundColor:'white'}}>
                                    <Col flex={1}><DashboardOutlined style={{ fontSize:'1.15em', marginRight:5}}/> Tahap Kesukaran</Col>
                                    <Col flex={1} style={{ textAlign:'center' }}>
                                        <Progress 
                                            percent={formValue.formValue[4].value} 
                                            steps={6}
                                            format={(percent)=>{
                                                if(percent <= 33){
                                                    return 'Senang'
                                                } else if(percent > 33 && percent <= 66){
                                                    return 'Sederhana'
                                                } else {
                                                    return 'Sukar'
                                                }
                                            }}
                                            strokeColor={
                                                formValue.formValue[4].value <= 33 ?
                                                '#33b464'
                                                : formValue.formValue[4].value > 33 && formValue.formValue[4].value <= 66 ?
                                                '#f9c03e'
                                                : '#c1280b'
                                            }

                                        />
                                    </Col>
                                </Row>
                                {
                                    formValue.dataAlatan[1].value != 0 ?
                                    <Row style={{ border: '1px solid #e3e8ed', borderRadius:4, padding:10, backgroundColor:'white', marginTop:5}}>
                                        <Col flex={1}><FieldTimeOutlined style={{ fontSize:'1.15em', marginRight:5}}/> Masa</Col>
                                        <Col flex={1} style={{ textAlign:'end', marginRight:10 }}>
                                            <span>{formValue.dataAlatan[1].value} minit</span>
                                        </Col>
                                    </Row>
                                    :
                                    ''

                                }
                                <Row justify='end' style={{ marginTop:5}}>
                                    <Space>
                                        <Button type='primary'><LikeOutlined/> Suka</Button>
                                        <Button type='primary' href='#komen'><CommentOutlined/> Komen</Button>
                                    </Space>
                                </Row>
                            </Col>
                        </Row>
                    </PageHeader>
                </Row>
                {/* <Row align="top" style={{ border: '1px solid #e3e8ed', borderRadius:4, padding:10, backgroundColor:'white', maxWidth:'1200px', marginBottom:20, marginLeft:'auto', marginRight:'auto'}}>
                    <Col style={{ padding: 30 }}>
                        <Title>Pengenalan</Title>
                        <Paragraph>
                            {data.description}
                        </Paragraph>
                    </Col>
                </Row> */}
                </>
                :
                <p>Bukan tutorial</p>
            }
        </>
    )
}
export default Step3;