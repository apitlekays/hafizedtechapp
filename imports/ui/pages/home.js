import React, {useState} from 'react';
import { Link } from 'react-router-dom';

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
        title: 'Title 3 Ini title Pangjang sikit Aja Lagi',
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
    }
]

const addMeterTular = (id) => {
    // TODO add Meteor method to call document and add to views
    console.log('bump up views for document with _id: ', id);
}

const Home = () => {

    const [dataClick, setDataClick] = useState({
        _id:1,
        type: 'Pedagogi',
        image: '/hero1.jpg',
        title: 'Title 1',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elitstah',
        rating: 4,
        difficulty:30,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200
    })

    const changeHeroView = (id) => {
        let [result] = data.filter(res => {
            return res._id === id
        })
        setDataClick(result);
    }

    return (
        <>
            <Row className='hero' justify='center' align="top" style={{ backgroundSize:'cover', backgroundImage:'url('+`${dataClick.image}`+')'}}>
                <Col className='hero-content' xs={24} md={16} style={{ marginTop:100 }}>
                <Title ellipsis={{ rows: 1, expandable: false, symbol:' ' }}>
                    <span style={{ fontSize:'2em', fontFamily:'Quicksand', fontWeight:'700', color:'#fff'}}>{dataClick.title}</span><br />
                </Title><br/>
                    {
                        dataClick.type === 'Teknologi' ?
                        <Tag color="#1890ff">#Teknologi</Tag>
                        :
                        <Tag color="#ff4d4f">#Pedagogi</Tag>
                    }
                    
                    <Row justify='center' align="top">
                        <Col flex='auto' style={{ fontSize:'1.3em' }}>
                            <div style={{width: 400}}>
                            <Paragraph style={{color:'#fff'}} ellipsis={{ rows: 3, expandable: false, symbol:'...' }}>{dataClick.description}</Paragraph>
                            </div>
                            <span>Nilaian Artikel: </span><Rate allowHalf disabled value={dataClick.rating}/><br/>
                            <span>Meter Kesusahan: </span><Progress percent={dataClick.difficulty} steps={5} style={{color:'white'}} /><br />
                            <span>Meter Tular: <EyeOutlined />{dataClick.views}</span><br />
                            <span style={{ color:'#fff', fontSize:'0.7em' }} >Penyumbang: <Avatar size={20} src={dataClick.authorAvatar}/> {dataClick.author}</span><br />
                            {
                                dataClick.type === 'Teknologi' ?
                                <Link to={{pathname: `/teknologi/${dataClick._id}`}} onClick={() => addMeterTular(dataClick._id)}>
                                    <Button type="primary" style={{ marginTop:20 }}>Baca</Button> <Button type="ghost" style={{ marginTop:20, borderColor:'white', color:'white' }}><PlusOutlined /> Simpan</Button>
                                </Link>
                                :
                                <Link to={{pathname: `/pedagogi/${dataClick._id}`}} onClick={() => addMeterTular(dataClick._id)}>
                                    <Button type="primary" style={{ marginTop:20 }}>Baca</Button> <Button type="ghost" style={{ marginTop:20, borderColor:'white', color:'white'  }}><PlusOutlined /> Simpan</Button>
                                </Link>
                            }
                        </Col>
                    </Row>
                    <Row justify='center' align="top" style={{ margin: 20 }}>
                        <Col xs={24} md={12}>
                            <Input className='omni-searchbar' prefix={<SearchOutlined />}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row justify='center' style={{ maxWidth:'1400px', marginTop:20, marginBottom:20, marginLeft:'auto', marginRight:'auto'}} gutter={[24, 24]}>
            {
                data.map((datum) =>(
                    <Col  xs={{span:24}} sm={{span: 12}} md={{span: 8}} lg={{span:6}} key={datum._id}>
                        {
                            datum.type === 'Teknologi' ?
                            <Link to={{pathname: `/teknologi/${datum._id}`}} onClick={() => addMeterTular(datum._id)} onMouseEnter={() => changeHeroView(datum._id)}>
                                <Badge.Ribbon text={datum.type} style={{ backgroundColor:'#1890ff' }}>
                                    <Row justify='center' align="middle" className='edtech-card' style={{ backgroundSize:'cover', backgroundImage:'url('+`${datum.image}`+')'}}>
                                        <Col flex='auto' style={{ marginLeft: 20}}>
                                            <span style={{ lineHeight:'1em', textShadow:'0px 0px 3px black', color:'#fff', fontWeight:700, fontSize:'2em', fontFamily:'Quicksand'}}>{datum.title}</span><br/>
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
                                            <span style={{ lineHeight:'1em', textShadow:'0px 0px 3px black', color:'#fff', fontWeight:700, fontSize:'2em', fontFamily:'Quicksand'}}>{datum.title}</span><br />
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