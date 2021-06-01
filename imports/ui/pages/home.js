import React from 'react';

import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Input from 'antd/es/input';
import Rate from 'antd/es/rate';
import Progress from 'antd/es/progress';

import SearchOutlined from '@ant-design/icons/SearchOutlined';

import './home.css';

const style = { background: '#0092ff', padding: '8px 0' };

const data = [
    {
        image: '/hero.png',
        title: 'Title 1',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit',
        rating: 4,
        difficulty:30
    },
    {
        image: '/hero.png',
        title: 'Title 2',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit',
        rating: 2.5,
        difficulty:70
    },
    {
        image: '/hero.png',
        title: 'Title 3',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit',
        rating: 4.5,
        difficulty:60
    },
    {
        image: '/hero.png',
        title: 'Title 4',
        description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit',
        rating: 3,
        difficulty:10
    }
]

const Home = () => {
    return (
        <>
            <Row className='hero' justify='center' align="top" style={{ backgroundImage:'url("/hero.png")', backgroundSize:'cover', minHeight:'50vh', position:'relative'}}>
                <Col xs={24} md={16} style={{ textAlign:'center', marginTop:200 }}>
                    <span style={{ fontSize:'4em', fontFamily:'Quicksand', fontWeight:'700'}}>Hack(EduTech);</span>
                    <Row justify='center' align="top">
                        <Col xs={24} md={16} style={{ textAlign:'center', fontSize:'1.3em' }}>
                            <p>Misi Hack(EduTech); adalah untuk membantu para pendidik yang ingin mendalami pengetahuan <span style={{ fontSize:'1.4em', backgroundColor:'red', color:'white', padding:5, borderRadius:5}}>teknologi</span> dan <span style={{ fontSize:'1.4em', backgroundColor:'red', color:'white', padding:5, borderRadius:5}}>pedagogi</span> untuk menambahbaik strategi dan teknik pengajaran dan pembelajaran, berbantukan teknologi terkini.</p>
                        </Col>
                    </Row>
                    <Row justify='center' align="top" style={{ margin: 20 }}>
                        <Col xs={24} md={12}>
                            <Input className='omni-searchbar' placeholder='Cari aplikasi atau pedagogi' prefix={<SearchOutlined />}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{ marginTop:20, marginLeft:50, marginRight:50, marginBottom:20 }} gutter={[16, 24]}>
            {
                data.map((datum) =>(
                    <Col  xs={{span:24}} sm={{span: 12}} md={{span: 8}} lg={{span:6}}>
                        <div className='edtech-card'>
                            <Row >
                                <Col flex='auto'>
                                    <img src={datum.image} style={{ width:'100%', borderTopLeftRadius: 5, borderTopRightRadius: 5 }}/>
                                </Col>
                            </Row>
                            <Row className='edtech-card-details'>
                                <Col flex='auto'>
                                    <h2>{datum.title}</h2><br />
                                    <p>{datum.description}</p><br />
                                    <span>Ratings: </span><Rate allowHalf disabled defaultValue={datum.rating}/><br/>
                                    <span>Difficulty level: </span><Progress percent={datum.difficulty} showInfo={false} />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                ))
            }
            </Row>
        </>
    )
}
export default Home;