import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCurrentUserProfile } from '../../../client/CurrentUserProfileContext';
import { SuperSEO } from 'react-super-seo';

import Row from 'antd/es/row';
import Col from 'antd/es/col';
import PageHeader from 'antd/es/page-header';
import Button from 'antd/es/button';
import Typography from 'antd/es/typography';
import Tag from 'antd/es/tag';
import Space from 'antd/es/space';
import Progress from 'antd/es/progress';
import Avatar from 'antd/es/avatar';
import Tooltip from 'antd/es/tooltip';
import Popconfirm from 'antd/es/popconfirm';
import Divider from 'antd/es/divider';
import Input from 'antd/es/input';
import Empty from 'antd/es/empty';

import CommentOutlined from '@ant-design/icons/CommentOutlined';
import LikeOutlined from '@ant-design/icons/LikeOutlined';
import CheckOutlined from '@ant-design/icons/CheckOutlined';
import DashboardOutlined from '@ant-design/icons/DashboardOutlined';
import BarsOutlined from '@ant-design/icons/BarsOutlined';
import FieldTimeOutlined from '@ant-design/icons/FieldTimeOutlined';
import SmileOutlined from '@ant-design/icons/SmileOutlined';

const { Paragraph, Title, Text} = Typography; 
const { TextArea } = Input;

const data = {
        _id:'adsfasF',
        title:'Tutorial 1',
        tags:'Pedagogi', //or Teknologi
        author:'Najwa Mansor',
        authorId:'asfa',
        authorAvatar:'/hacker32.png',
        mainImage:'/hero1.jpg',
        tahapKesusahan: 50,
        description:'Ant Design interprets the color system into two levels: a system-level color system and a product-level color system.',
        steps:[
            {
                _id: '124ads5',
                title: 'Langkah 1',
                content: 'Ant Design interprets the color system into two levels: a system-level color system and a product-level color system.',
                image:'/hero2.jpg'
            },
            {
                _id: '12vre45',
                title: 'Langkah 2',
                content: 'Ant Design interprets the color system into two levels: a system-level color system and a product-level color system.',
                image:'/hero3.jpg'
            },
            {
                _id: '12ervb45',
                title: 'Langkah 3',
                content: 'Ant Design interprets the color system into two levels: a system-level color system and a product-level color system.',
                image:'/hero4.jpg'
            }
        ],
        completions:20,
        comments:[
            {
                _id:'qwrq',
                commentOwnerAvatar: '/hacker32.png',
                commentOwnerName: 'HafizHanif',
                commentOwnerId: 'wqe',
                comment: 'adsfgsdgasg',
            }
        ],
        likes: 69,
        masa: 45,
}



const Tutorial = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const history = useHistory();
    const currentUser = useCurrentUserProfile(); //get the current logged in user
    console.log(currentUser);
    const dubSteps = data.steps.map((items) => (
        <Row align="top" style={{ maxWidth:'1200px', marginLeft:'auto', marginRight:'auto'}} key={items._id}>
            <Col style={{ marginTop: 10, padding: 20 }}>
            <Title style={{ fontSize:'1.3em' }}>{items.title}</Title>
            <Row justify='center' align="top" style={{border: '1px solid #e3e8ed', borderRadius:4, padding:10, backgroundColor:'white'}}>
                <Col xs={24} sm={12} >
                    <img src={items.image} style={{ width:'100%', padding:20}}/>
                </Col>
                <Col xs={24} sm={12} style={{ padding: 20 }}>
                    <Paragraph>
                        {items.content}
                    </Paragraph>
                </Col>
            </Row>
            </Col>
        </Row>
    ))

    const handleCommentDelete = () => {
        console.log('delete that comment!')
    }

    const handleCommentSubmit = () => {
        console.log('submit');
    }

    const handleCommentChange = () => {
        console.log('commentchange')
    }

    const comments = data.comments.map((comment) => (
        currentUser != undefined ?
        <div key={comment._id} style={{ marginTop: 20 }}>
        <Row style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Col flex='auto' style={{ marginRight: 5 }}>
                <Space>
                    <Avatar src={comment.commentOwnerAvatar} size={30} style={{ boxShadow:'0 0 0 3pt white' }}/>
                    <span>{comment.commentOwnerName}</span>
                </Space>
            </Col>
            {
                comment.commentOwnerId === currentUser.owner ?
                <Col flex='auto' style={{ textAlign:'right', color:'#929292', fontSize:'0.7em', paddingTop:10, paddingRight:10, userSelect:'none' }}>
                    <Tooltip placement='top' title='Delete comment'>
                        <span style={{ cursor:'pointer' }} onClick={() => handleCommentDelete()}><DeleteOutlined/></span>
                    </Tooltip>
                </Col>
                : comment.commentOwnerId != data.authorId ?
                <Col flex='auto' style={{ textAlign:'right', color:'#929292', fontSize:'0.7em', paddingTop:10, paddingRight:10, userSelect:'none' }}>
                    <Tooltip placement='top' title='Rate this comment'>
                        <Popconfirm placement="topLeft" title='Give a star rating' /* onConfirm={() => handlePostDelete(kelasruumData.kelasruumCode, data.postID)}  */okText="Yes" cancelText="No">
                            <span style={{ cursor:'pointer' }}>Rate this response</span>
                        </Popconfirm>
                    </Tooltip>
                </Col>
                :''
            }
        </Row>
        <Row style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Col flex='auto' style={{ backgroundColor:'white', borderRadius: 10, padding:' 10px 0' }}>
                <span style={{ marginLeft: 20, fontSize:'0.9em', color:'dimgrey' }}>{comment.comment}</span>
            </Col>
        </Row>
        </div>
        :''
    ))

    return (
        <>
        <SuperSEO
            title={`${data.title}`+' | Hack(Edu)Tech;'}
            description={data.description}
            lang="ms"
            openGraph={{
                ogImage: {
                ogImage:`${data.mainImage}`,
                ogImageAlt: `${data.title}`,
                ogImageWidth: 1200,
                ogImageHeight: 630,
                ogImageType: "image/jpeg",
                },
            }}
            twitter={{
                twitterSummaryCard: {
                summaryCardImage: `${data.mainImage}`,
                summaryCardImageAlt: `${data.title}`,
                summaryCardSiteUsername: `${data.title}`+' | Hack(Edu)Tech;',
                },
            }}
        />
        <Row justify='center' align="top" style={{ maxWidth:'1400px', marginTop:20, marginBottom:20, marginLeft:'auto', marginRight:'auto'}}>
            <PageHeader
                ghost={false}
                title={data.title}
                tags={<Tag color='blue'>#{data.tags}</Tag>}
                avatar={data.avatar}
                onBack={() => history.goBack()}
            >
                <Row justify='center' align="top">
                    <Col xs={24} sm={12} style={{ textAlign: 'center'}}>
                        <Title>{data.title}</Title>
                        {
                            data.subTitle ?
                            <Text type="secondary">{data.subTitle}</Text>
                            :''
                        }
                        <div style={{ color: 'grey', marginTop:10}}>
                            <span>Ditulis oleh: {data.author}</span><br/>
                        <Space size='large'>
                            <span><CommentOutlined style={{color:'#1975f1'}}/> Komen: {data.comments.length}</span>
                            <span><LikeOutlined style={{color:'#f9c03e'}}/> Suka: {data.likes}</span>
                            <span><CheckOutlined style={{color:'#33b464'}}/> Selesai: {data.completions}</span>
                        </Space>
                        </div>
                    </Col>
                </Row>
                <Row justify='center' align="top" style={{ maxWidth:'1200px', marginTop:20, marginBottom:20, marginLeft:'auto', marginRight:'auto' }}>
                    <Col xs={24} sm={12} style={{ padding: 30 }}>
                        <img src={data.mainImage} style={{ width:'100%', border: '1px solid #e3e8ed', borderRadius:4, padding:10, }}/>
                    </Col>
                    <Col xs={24} sm={12} style={{ padding: 30 }}>
                        <Row style={{ border: '1px solid #e3e8ed', borderRadius:4, padding:10, backgroundColor:'white'}}>
                            <Col flex={1}><DashboardOutlined style={{ fontSize:'1.15em', marginRight:5}}/> Tahap Kesukaran</Col>
                            <Col flex={1} style={{ textAlign:'center' }}>
                                <Progress 
                                    percent={data.tahapKesusahan} 
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
                                        data.tahapKesusahan <= 33 ?
                                        '#33b464'
                                        : data.tahapKesusahan > 33 && data.tahapKesusahan <= 66 ?
                                        '#f9c03e'
                                        : '#c1280b'
                                    }

                                />
                            </Col>
                        </Row>
                        <Row style={{ border: '1px solid #e3e8ed', borderRadius:4, padding:10, backgroundColor:'white', marginTop:5}}>
                            <Col flex={1}><BarsOutlined style={{ fontSize:'1.15em', marginRight:5}}/> Bilangan Langkah</Col>
                            <Col flex={1} style={{ textAlign:'end', marginRight:10 }} >
                                <span>{data.steps.length} Langkah</span>
                            </Col>
                        </Row>
                        <Row style={{ border: '1px solid #e3e8ed', borderRadius:4, padding:10, backgroundColor:'white', marginTop:5}}>
                            <Col flex={1}><FieldTimeOutlined style={{ fontSize:'1.15em', marginRight:5}}/> Masa</Col>
                            <Col flex={1} style={{ textAlign:'end', marginRight:10 }}>
                                <span>{data.masa} minit</span>
                            </Col>
                        </Row>
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
        <Row align="top" style={{ border: '1px solid #e3e8ed', borderRadius:4, padding:10, backgroundColor:'white', maxWidth:'1200px', marginBottom:20, marginLeft:'auto', marginRight:'auto'}}>
            <Col style={{ padding: 30 }}>
                <Title>Pengenalan</Title>
                <Paragraph>
                    {data.description}
                </Paragraph>
            </Col>
        </Row>
        <Row align="top" style={{ maxWidth:'1200px', marginLeft:'auto', marginRight:'auto'}}>
            <Col xs={24} sm={16}>
                {dubSteps}
                <div style={{ margin:20, textAlign:'center' }}>
                    <Button style={{ backgroundColor:'#33b464', borderColor:'#33b464', color:'white' }}><SmileOutlined /> Saya sudah selesai mengikuti tutorial ini!</Button>
                </div>
            </Col>
            <Col xs={24} sm={8}>
            <Title style={{ fontSize:'1.3em', marginTop:20 }} id='komen'>Komen</Title>
                {
                    comments.length > 0 ?
                    comments
                    :
                    <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description={
                        <span>Kosong...</span>
                        }
                    />
                }
                {
                    currentUser != undefined ?
                    <>
                        <Divider orientation='left' style={{ margin: '5px 0px 0px 0px' }}><span style={{ fontSize:'0.7em', fontWeight:500 }}>Komen</span></Divider>
                        <Row style={{ paddingLeft: 20, paddingRight: 20 }}>
                            <Col xs={24}>
                                <TextArea autoSize style={{ borderRadius:5 }} placeholder='Tinggalkan komen anda disini...' onChange={(e) => handleCommentChange(e.target.value, data.postID)} onPressEnter={(e) => handleCommentSubmit(e, data.postID)}/>
                            </Col>
                        </Row>
                    </>
                    :
                    <span style={{ fontStyle: 'italic'}}>Anda perlu login/daftar sebelum boleh meninggalkan maklumbalas di sini</span>
                }
            </Col>
        </Row>
        </>
        
    )
}
export default Tutorial;