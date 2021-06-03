import React from 'react'
import { useParams } from 'react-router-dom';

import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Typography from 'antd/es/typography';

import './detailedview.css';

const data = {
    _id:5,
    type: 'Pedagogi',
    image: '/hero.png',
    title: 'Title 4',
    description: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elit consectetur adipiscing elit lorem ipsum dolor sit amet lorem, consectetur adipiscing elitstah',
    rating: 3,
    difficulty:10,
    author:'Hafiz Hanif',
    authorAvatar: '/hacker32.png',
    views: 200
}

const { Paragraph, Title } = Typography;

const DetailedView = (props) => {
    //console.log(props.match.params)
    let id = props.match.params._id // this to get id from url
    let { _id } = useParams(); // this to get id from url

    return (
        <>  
            <Row justify='center' align="top" className='hero-detailed' style={{ backgroundSize:'cover', backgroundImage:'url('+`${data.image}`+')', height:'350px' }}>
                <Col xs={24} md={16} className='hero-detailed-contents'>
                    <Title >
                        <span style={{ fontFamily:'Teko', fontSize: '2em', color:'#fff' }} >{data.title}</span>
                    </Title>
                </Col>
            </Row>
            <Row justify='center' align="top" style={{ maxWidth:'1400px', marginTop:20, marginBottom:20, marginLeft:'auto', marginRight:'auto'}}>
                <Col xs={24} md={16} className='article-main'>
                        <Row>
                            <Col flex='auto'>
                                <p>Logo</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col flex='auto'>
                                <p>link & mylist</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col flex='auto'>
                                <p>likes & dislike</p>
                            </Col>
                        </Row>
                </Col>
            </Row>
        </>
    )
}
export default DetailedView;