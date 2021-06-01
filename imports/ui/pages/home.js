import React from 'react';

import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Input from 'antd/es/input';
import Rate from 'antd/es/rate';
import Progress from 'antd/es/progress';
import Badge from 'antd/es/badge';
import Avatar from 'antd/es/avatar';
import Typography from 'antd/es/typography';

import SearchOutlined from '@ant-design/icons/SearchOutlined';

import './home.css';

const { Paragraph } = Typography;

const data = [
    {
        _id:1,
        type: 'Pedagogi',
        image: '/hero.png',
        title: 'Title 1',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elitstah',
        rating: 4,
        difficulty:30,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png'
    },
    {
        _id:2,
        type: 'Teknologi',
        image: '/hero.png',
        title: 'Title 2',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elit consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elitstah',
        rating: 2.5,
        difficulty:70,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png'
    },
    {
        _id:3,
        type: 'Teknologi',
        image: '/hero.png',
        title: 'Title 3',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elit consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elitstah',
        rating: 4.5,
        difficulty:60,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png'
    },
    {
        _id:4,
        type: 'Pedagogi',
        image: '/hero.png',
        title: 'Title 4',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elit consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elitstah',
        rating: 3,
        difficulty:10,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png'
    },
    {
        _id:5,
        type: 'Pedagogi',
        image: '/hero.png',
        title: 'Title 4',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elit consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elitstah',
        rating: 3,
        difficulty:10,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png'
    }
]

const Home = () => {
    return (
        <>
            <Row className='hero' justify='center' align="top" style={{ backgroundImage:'url("/hero.png")', backgroundSize:'cover', minHeight:'50vh', position:'relative'}}>
                <Col xs={24} md={16} style={{ textAlign:'center', marginTop:200 }}>
                    <span style={{ fontSize:'4em', fontFamily:'Quicksand', fontWeight:'700'}}>Hack(<span style={{ color:'#ff4d4f'}}>Edu</span><span style={{ color:'#007bff'}}>Tech</span>);</span>
                    <Row justify='center' align="top">
                        <Col xs={24} md={16} style={{ textAlign:'center', fontSize:'1.3em' }}>
                            <p style={{ lineHeight:2 }}>Misi Hack(EduTech); adalah untuk membantu anda mendalami pengetahuan <span style={{ fontSize:'1.4em', backgroundColor:'#1890ff', color:'white', padding:5, borderRadius:5}}>teknologi</span> dan <span style={{ fontSize:'1.4em', backgroundColor:'#ff4d4f', color:'white', padding:5, borderRadius:5}}>pedagogi</span> untuk menambahbaik strategi dan teknik pengajaran dan pembelajaran, berbantukan teknologi terkini.</p>
                        </Col>
                    </Row>
                    <Row justify='center' align="top" style={{ margin: 20 }}>
                        <Col xs={24} md={12}>
                            <Input className='omni-searchbar' prefix={<SearchOutlined />}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row justify='center' style={{ marginTop:20, marginLeft:50, marginRight:50, marginBottom:20 }} gutter={[16, 24]}>
            {
                data.map((datum) =>(
                    <Col  xs={{span:24}} sm={{span: 12}} md={{span: 8}} lg={{span:6}} key={datum._id}>
                        {
                            datum.type === 'Teknologi' ?
                            <Badge.Ribbon text={datum.type} style={{ backgroundColor:'#1890ff' }}>
                                <div className='edtech-card'>
                                    <Row>
                                        <Col flex='auto'>
                                            <img src={datum.image} style={{ width:'100%', maxHeight:150, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}/>
                                        </Col>
                                    </Row>
                                    <Row className='edtech-card-details'>
                                        <Col flex='auto'>
                                            <h2>{datum.title}</h2>
                                            <Paragraph ellipsis={{ rows: 3, expandable: false, symbol:'...' }}>{datum.description}</Paragraph>
                                            <span>Nilaian Artikel: </span><Rate allowHalf disabled defaultValue={datum.rating}/><br/>
                                            <span>Meter Kesusahan: </span><Progress percent={datum.difficulty} steps={5} /><br />
                                            <span style={{ color:'#828282', fontSize:'0.9em' }} >Penyumbang: <Avatar size={20} src={datum.authorAvatar}/> {datum.author}</span>
                                        </Col>
                                    </Row>
                                </div>
                            </Badge.Ribbon>
                            :
                            <Badge.Ribbon text={datum.type} style={{ backgroundColor:'#ff4d4f', color:'grey' }}>
                                <div className='edtech-card'>
                                    <Row>
                                        <Col flex='auto'>
                                            <img src={datum.image} style={{ width:'100%', maxHeight:150, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}/>
                                        </Col>
                                    </Row>
                                    <Row className='edtech-card-details'>
                                        <Col flex='auto'>
                                            <h2>{datum.title}</h2>
                                            <Paragraph ellipsis={{ rows: 3, expandable: false, symbol:'...' }}>{datum.description}</Paragraph>
                                            <span>Nilaian Artikel: </span><Rate allowHalf disabled defaultValue={datum.rating}/><br/>
                                            <span>Meter Kesusahan: </span><Progress percent={datum.difficulty} steps={5} /><br />
                                            <span style={{ color:'#828282', fontSize:'0.9em' }} >Penyumbang: <Avatar size={20} src={datum.authorAvatar}/> {datum.author}</span>
                                        </Col>
                                    </Row>
                                </div>
                            </Badge.Ribbon>
                        }
                    </Col>
                ))
            }
            </Row>
        </>
    )
}
export default Home;