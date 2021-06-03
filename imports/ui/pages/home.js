import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';

import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Input from 'antd/es/input';
import Rate from 'antd/es/rate';
import Progress from 'antd/es/progress';
import Badge from 'antd/es/badge';
import Avatar from 'antd/es/avatar';
import Typography from 'antd/es/typography';
import Button from 'antd/es/button';
import Tag from 'antd/es/tag';
import Affix from 'antd/es/affix';

import SearchOutlined from '@ant-design/icons/SearchOutlined';
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';

import './home.css';

const { Paragraph, Title } = Typography;

const data = [
    {
        _id:1,
        type: 'Pedagogi',
        image: '/hero1.jpg',
        title: 'Title 1 Sikit Panjang',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elitstah',
        rating: 4,
        difficulty:30,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200
    },
    {
        _id:2,
        type: 'Teknologi',
        image: '/hero2.jpg',
        title: 'Title 2 Lebih Panjang Lagi',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elit consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elitstah',
        rating: 2.5,
        difficulty:70,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200
    },
    {
        _id:3,
        type: 'Teknologi',
        image: '/hero3.jpg',
        title: 'Title 3 Ini title Panjang sikit Aja Lagi',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elit consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elitstah',
        rating: 4.5,
        difficulty:60,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200
    },
    {
        _id:4,
        type: 'Pedagogi',
        image: '/hero4.jpg',
        title: 'Title 4 Title ni memang saja letak panjang-panjang sebab nak test',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elit consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elitstah',
        rating: 3,
        difficulty:10,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200
    },
    {
        _id:5,
        type: 'Pedagogi',
        image: '/hero3.jpg',
        title: 'Title 5',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elit consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elitstah',
        rating: 3,
        difficulty:10,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200
    },
    {
        _id:6,
        type: 'Pedagogi',
        image: '/hero1.jpg',
        title: 'Title 1 Sikit Panjang',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elitstah',
        rating: 4,
        difficulty:30,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200
    },
    {
        _id:7,
        type: 'Teknologi',
        image: '/hero2.jpg',
        title: 'Title 2 Lebih Panjang Lagi',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elit consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elitstah',
        rating: 2.5,
        difficulty:70,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200
    },
    {
        _id:8,
        type: 'Teknologi',
        image: '/hero3.jpg',
        title: 'Title 3 Ini title Panjang sikit Aja Lagi',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elit consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elitstah',
        rating: 4.5,
        difficulty:60,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200
    },
    {
        _id:9,
        type: 'Pedagogi',
        image: '/hero4.jpg',
        title: 'Title 4 Title ni memang saja letak panjang-panjang sebab nak test',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elit consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elitstah',
        rating: 3,
        difficulty:10,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200
    },
    {
        _id:10,
        type: 'Pedagogi',
        image: '/hero3.jpg',
        title: 'Title 5',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elit consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elitstah',
        rating: 3,
        difficulty:10,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200
    }
]

const Home = () => {

    const [dataClick, setDataClick] = useState({
        _id:1,
        type: 'Pedagogi',
        image: '/hero1.jpg',
        title: 'Title 1 Sikit Panjang',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elitstah',
        rating: 4,
        difficulty:30,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200
    })

    const [ affixed, setAffixed ] = useState(false)

    const changeHeroView = (id) => {
        let [result] = data.filter(res => {
            return res._id === id
        })
        setDataClick(result);
    }

    const toggleAffix = () => {
        setAffixed(!affixed)
    }

    const addMeterTular = (id) => {
        // TODO add Meteor method to call document and add to views
        console.log('bump up views for document with _id: ', id);
    }

    return (
        <>
        <Affix onChange={toggleAffix}>
            <div>
            <Row className='hero' justify='center' align="top" style={{ backgroundSize:'cover', backgroundImage:'url('+`${dataClick.image}`+')'}}>
                <Col className='hero-content' xs={24} md={16} style={ affixed ? { paddingTop:20, paddingBottom:20, transition: 'padding-top 0.5s, padding-bottom 0.5s' } : { paddingTop:50, paddingBottom:50, transition: 'padding-top 0.5s, padding-bottom 0.5s' }}>
                {
                    dataClick.type === 'Teknologi' ?
                    <Tag color="#1890ff">#Teknologi</Tag>
                    :
                    <Tag color="#ff4d4f">#Pedagogi</Tag>
                }
                <Title ellipsis={{ rows: 1, expandable: false, symbol:' ' }} style={{color:'#fff', }}>
                    <span style={{ fontSize:'1em', fontFamily:'Teko', fontWeight:'500', color:'#fff'}}>{dataClick.title}</span>
                </Title>
                    <Row justify='center' align="top">
                        <Col flex='auto' style={ affixed ? { fontSize:'0.9em', transition:'font-size 0.5s' } : {fontSize:'1em', transition:'font-size 0.5s'}}>
                            <div style={{width: 400}}>
                            <Paragraph style={{color:'#fff' }} ellipsis={{ rows: 3, expandable: false, symbol:'...' }}>{dataClick.description}</Paragraph>
                            </div>
                            <span>Nilaian Artikel: </span><Rate allowHalf disabled value={dataClick.rating}/><br/>
                            <span>Meter Kesusahan: </span><Progress percent={dataClick.difficulty} steps={5} style={{color:'white'}} /><br />
                            <span>Meter Tular: <EyeOutlined />{dataClick.views}</span><br />
                            <span style={{ color:'#fff' }} ><Avatar size={18} src={dataClick.authorAvatar}/> {dataClick.author}</span><br />
                            {
                                dataClick.type === 'Teknologi' ?
                                <Link to={{pathname: `/teknologi/${dataClick._id}`}} onClick={() => addMeterTular(dataClick._id)}>
                                    <Button type="primary" style={{ marginTop:20, backgroundColor: '#4db300', borderColor: '#4db300'}}>Baca</Button> <Button type="ghost" style={{ marginTop:20, borderColor:'white', color:'white' }}><PlusOutlined /> Simpan</Button>
                                </Link>
                                :
                                <Link to={{pathname: `/pedagogi/${dataClick._id}`}} onClick={() => addMeterTular(dataClick._id)}>
                                    <Button type="primary" style={{ marginTop:20, backgroundColor: '#4db300', borderColor: '#4db300' }}>Baca</Button> <Button type="ghost" style={{ marginTop:20, borderColor:'white', color:'white'  }}><PlusOutlined /> Simpan</Button>
                                </Link>
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{ width:'100%', height:'5px', backgroundColor:'white' }}>
            </Row>
            </div>
        </Affix>
            <Row justify='center' style={{ maxWidth:'1400px', marginTop:20, marginBottom:20, marginLeft:'auto', marginRight:'auto'}} gutter={[24, 24]}>
            {
                data.map((datum) =>(
                    <Col  xs={{span:24}} sm={{span: 12}} md={{span: 8}} lg={{span:6}} key={datum._id}>
                        {
                            datum.type === 'Teknologi' ?
                            <Link to={{pathname: `/teknologi/${datum._id}`}} onClick={() => addMeterTular(datum._id)} onMouseEnter={() => changeHeroView(datum._id)}>
                                <Badge.Ribbon text={datum.type} style={{ backgroundColor:'#1890ff' }}>
                                    <Row justify='center' align="middle" className='edtech-card' style={{ backgroundSize:'cover', backgroundImage:'url('+`${datum.image}`+')'}}>
                                        <Col flex='auto' style={{ marginLeft: 20, marginRight:20}}>
                                            <Title ellipsis={{ fontSize:'1em', rows: 3, expandable: false, symbol:' ' }} style={{ lineHeight:'1em', fontSize: '2em', textShadow:'0px 0px 3px black', color:'#fff'}}>
                                                <span style={{ fontFamily:'Teko', fontWeight:'300' }}>{datum.title}</span>
                                            </Title>
                                            <Rate style={{ fontSize:'0.8em'}} allowHalf disabled defaultValue={datum.rating}/>

                                        </Col>
                                    </Row>
                                </Badge.Ribbon>
                            </Link>
                            :
                            <Link to={{pathname: `/pedagogi/${datum._id}`}} onClick={() => addMeterTular(datum._id)} onMouseEnter={() => changeHeroView(datum._id)}>
                                <Badge.Ribbon text={datum.type} style={{ backgroundColor:'#ff4d4f', color:'grey' }}>
                                    <Row justify='center' align="middle" className='edtech-card' style={{ backgroundSize:'cover', backgroundImage:'url('+`${datum.image}`+')'}}>
                                        <Col flex='auto' style={{ marginLeft: 20 }}>
                                            <Title ellipsis={{ rows: 3, expandable: false, symbol:' ' }} style={{ lineHeight:'1em', fontSize: '2em', textShadow:'0px 0px 3px black', color:'#fff', fontFamily:'Teko'}}>
                                                <span style={{ fontFamily:'Teko', fontWeight:'300' }}>{datum.title}</span>
                                            </Title>
                                            <Rate style={{ fontSize:'0.8em'}} allowHalf disabled value={datum.rating}/>
                                        </Col>
                                    </Row>
                                </Badge.Ribbon>
                            </Link>
                        }
                    </Col>
                ))
            }
            </Row>
        </>
    )
}
export default Home;