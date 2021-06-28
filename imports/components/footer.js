import React from 'react';
import { Link } from 'react-router-dom';

import Layout from 'antd/es/layout';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import List from 'antd/es/list';
import Space from 'antd/es/space';
import Button from 'antd/es/button';
import HeartTwoTone from '@ant-design/icons/HeartTwoTone';
import CopyrightOutlined from '@ant-design/icons/CopyrightOutlined';
import RightCircleFilled from '@ant-design/icons/RightCircleFilled';
import SafetyCertificateOutlined from '@ant-design/icons/SafetyCertificateOutlined';
import InstagramOutlined from '@ant-design/icons/InstagramOutlined';
import TwitterOutlined from '@ant-design/icons/TwitterOutlined';
import FacebookOutlined from '@ant-design/icons/FacebookOutlined';
import MailOutlined from '@ant-design/icons/MailOutlined';

const { Footer }  = Layout;

const footerData1 = [
    {
        title:  'Laman Utama',
        href:   '/',
        className:  'footerlink'
    },
    {
        title:  'Tentang Kami',
        href:   '/tentang-kami',
        className:  'footerlink'
    },
    {
        title:  'Dasar Privasi',
        href:   '/sadar-privasi',
        className:  'footerlink'
    },
    {
        title:  'Terma Guna',
        href:   '/terma-guna',
        className:  'footerlink'
    }
]

const footerData2 = [
    {
        title:  'Kongsi Cerita',
        href:   '/cerita',
        className:  'footerlink',
    },
    {
        title: 'Soalan Lazim',
        href:   '/soalan-lazim',
        className:  'footerlink'
    },
    {
        title:  'Hubungi Kami',
        href:   '/hubungi-kami',
        className:  'footerlink'
    }
]

const FooterX = (props) => {

    const currentYear = () => {
        return new Date().getFullYear();
    }

    return (
        <>
            <Footer style={{ textAlign: 'center', color: 'white', backgroundColor: '#007bff', fontSize: '1em'}}>
                <Row justify='center' align="middle" style={{ minHeight: '450px' }}>
                    <Col xs={24} md={20} style={{ backgroundColor: '#0056b3', borderRadius: 5, paddingTop: 10, paddingBottom: 10, height: '95px', marginBottom:20}}>
                        <Row justify='center' align="middle" style={{ height: '-webkit-fill-available' }}>
                            <Col xs={24} md={12} style={{ display: 'table' }}>
                                <SafetyCertificateOutlined style={{ fontSize: 30, verticalAlign:'middle' }}/> 
                                <Link to='/privacy' style={{ paddingLeft:5, paddingRight: 5, verticalAlign: 'middle', color: 'white' }} className='footerlink'>Bagaimana Hack(Edu)Tech melindungi data saya?</Link> <RightCircleFilled style={{ verticalAlign: 'middle' }} />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} md={16}>
                        <Row justify='center' align="top">
                            <Col xs={24} lg={6} style={{ textAlign:'left', paddingBottom: 50, paddingRight: 20 }}>
                                <span style={{ fontFamily: 'Quicksand', fontSize: '1.5em', fontWeight: 'bold' }}>Hack(Edu).Tech</span><sup>TM</sup><br />
                                <span style={{ fontStyle: 'italic', color: '#dadada', fontSize: '0.8em' }}>Laman komuniti pedagogi dan teknologi anda.</span>
                            </Col>
                            <Col xs={24} lg={6}>
                                <List 
                                    dataSource={footerData1}
                                    split={false}
                                    renderItem={item => (
                                        <List.Item>
                                            <Link to={item.href} style={{ color: 'white' }} className={item.className}>{item.title}</Link>
                                        </List.Item>
                                    )}
                                />
                            </Col>
                            <Col xs={24} lg={6}>
                                <List 
                                    dataSource={footerData2}
                                    split={false}
                                    renderItem={item => (
                                        <List.Item>
                                            <Link to={item.href} style={{ color: 'white' }} className={item.className}>{item.title}</Link>
                                        </List.Item>
                                    )}
                                />
                            </Col>
                            <Col xs={24} lg={6} style={{ textAlign:'left', paddingTop: '50px', paddingBottom: '50px' }}>
                                <span>Cari kami di</span><br/>
                                <Space style={{ paddingBottom: 30 }}>
                                    <FacebookOutlined style={{ fontSize: 30 }}/><TwitterOutlined style={{ fontSize: 30 }}/><InstagramOutlined style={{ fontSize: 30 }}/>
                                </Space>
                                <br/>
                                <span>Langgan berita berkala dari kami</span>
                                <Button type="primary" style={{ backgroundColor: 'rgb(105, 225, 165)', color: 'black', borderColor: 'rgb(105, 225, 165)', marginTop:10 }} shape="round" icon={<MailOutlined />} size='large' block> Langgan</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <span style={{ paddingTop: 30 }} >Hack(Edu).Tech™ <CopyrightOutlined /> {currentYear()} Dibangunkan dengan <HeartTwoTone twoToneColor="#eb2f96" /> di Tanjong Malim, Malaysia.</span>
            </Footer>
        </>
        
    )
}

export default FooterX;