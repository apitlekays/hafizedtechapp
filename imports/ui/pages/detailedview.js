import React from 'react'
import { useParams } from 'react-router-dom';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import './detailedview.css';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import PlusOutlined from '@ant-design/icons/PlusOutlined';
import MessageOutlined from '@ant-design/icons/MessageOutlined';
import LikeOutlined from '@ant-design/icons/LikeOutlined';
import StarOutlined from '@ant-design/icons/StarOutlined';
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import QuestionCircleOutlined from '@ant-design/icons/QuestionCircleOutlined';
import BarChartOutlined from '@ant-design/icons/BarChartOutlined';
import ShareAltOutlined from '@ant-design/icons/ShareAltOutlined';

import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Typography from 'antd/es/typography';
import Avatar from 'antd/es/avatar';
import Button from 'antd/es/button';
import Space from 'antd/es/space';
import Carousel from 'antd/es/carousel';
import List from 'antd/es/list';
import Divider from 'antd/es/divider';
import Tag from 'antd/es/tag';
import Badge from 'antd/es/badge';
import Anchor from 'antd/es/anchor';

const data = {
    _id:1,
    type: 'Pedagogi',
    image: '/hero1.jpg',
    title: 'Pendekatan Flipped Classroom',
    description: 'A flipped classroom is an instructional strategy and a type of blended learning, which aims to increase student engagement and learning by having students complete readings at their home and work on live problem-solving during class time. It moves activities, including those that may have traditionally been considered homework, into the classroom. In a flipped classroom, students watch online lectures, collaborate in online discussions, or carry out research at home while engaging in concepts in the classroom with the guidance of a mentor. In the traditional model of classroom instruction, the teacher is typically the central focus of a lesson and the primary disseminator of information during the class period. The teacher responds to questions while students defer directly to the teacher for guidance and feedback. In a classroom with a traditional style of instruction, individual lessons may be focused on an explanation of content using a lecture style. Student engagement in the traditional model may be limited to activities in which students work independently or in small groups on an application task designed by the teacher. Class discussions are typically centered on the teacher, who controls the flow of the conversation.[2] Typically, this pattern of teaching also involves giving students the task of reading from a textbook or practicing a concept by working on a problem set, for example, outside school. The flipped classroom intentionally shifts instruction to a learner-centered model in which time in the classroom is used to explore topics in greater depth and create meaningful learning opportunities while students are initially introduced to new topics outside of the classroom. In a flipped classroom, "content delivery" may take a variety of forms. Often, video lessons prepared by the teacher or third parties are used to deliver content, although online collaborative discussions, digital research, and text readings may be used. It has been claimed that the ideal length for the video lesson is eight to twelve minutes.[4][5][6]',
    rating: 4,
    difficulty:30,
    author:'Hafiz Hanif',
    authorAvatar: '/hacker32.png',
    views: 200,
    het_impact: 1.25
}

const listTutorialData = [
    {
        href: 'https://ant.design',
        image: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
        title: `Flipped Classroom PdPR`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:'Hack(EduTech);',
        content:'Bagaimana untuk menggunakan pendekatan Flipped Classroom dalam pengajaran dan pembelajaran semasa PdPR',
    },
    {
        href: 'https://ant.design',
        image: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
        title: `Pembelajaran Berbalik Menggunakan Teknologi`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:'Hack(EduTech);',
        content:'Dalam artikel ini, anda akan disajikan dengan cara bagaimana menggunakan strategi pembelajaran berbalik ini dalam keadaan pandemik dengan menggunakan beberapa pilihan pelantar teknologi.',
    },
    {
        href: 'https://ant.design',
        image: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
        title: `tutorial part 3`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:'Hack(EduTech);',
        content:'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
]

const { Paragraph, Title } = Typography;
const { Link } = Anchor;

const DetailedView = (props) => {
    //console.log(props.match.params)
    let id = props.match.params._id // this to get id from url
    let { _id } = useParams(); // this to get id from url

    const IconText = ({ icon, text }) => (
        <Space>
          {React.createElement(icon)}
          {text}
        </Space>
    );

    return (
        <>  
            <Row justify='center' align="top" className='hero-detailed' style={{ backgroundSize:'cover', backgroundImage:'url('+`${data.image}`+')', height:'350px' }}>
                <Col xs={24} md={16} className='hero-detailed-contents'>
                    <Title >
                        <span style={{ fontFamily:'Teko', fontSize: '2em', color:'#fff',textShadow:'0px 0px 5px grey' }} >{data.title}</span>
                    </Title>
                    <Avatar size={20} src={data.authorAvatar}/><span style={{textShadow:'0px 0px 2px grey'}}> {data.author}</span><br/>
                    
                </Col>
                <Row justify='center' align="bottom" style={{ zIndex:1, height:'80px', width:'100%' }}>
                    <Col xs={24} md={12} style={{ height:'50px', width:'100%', padding: '0 20px', textAlign:'right', color:'#FFFF'}}>
                    <Space>
                        <Button type='ghost' style={{ color:'#fff' }}><PlusOutlined/> My List</Button>
                        <Button type='primary'><ShareAltOutlined /> Share</Button>
                        <Button type='primary'><LikeOutlined/> Like</Button>
                    </Space>
                    </Col>
                </Row>
                <div className='hero-detailed-accessory-container' style={{ position:'absolute', backgroundColor:'yellow', width:'350px', height:'350px', backgroundSize:'cover', backgroundImage:'url('+`${data.image}`+')', clipPath:'polygon(0 0, 55% 0, 79% 50%, 55% 100%, 60% 100%, 84% 50%, 60% 0, 74% 0, 99% 50%, 75% 100%, 0 100%, 25% 50%)', left:'50px'}} >
                </div>
            </Row>
            <Row justify='center' align="top" style={{ maxWidth:'1400px', marginTop:20, marginBottom:20, marginLeft:'auto', marginRight:'auto'}}>
                    <Col xs={24} md={16} className='article-main'>
                            <Row>
                                <Col flex='auto'>
                                <Badge.Ribbon style={data.type === 'Teknologi' ? {backgroundColor:'#1890ff'} : {backgroundColor:'#ff4d4f', color:'grey' }} text={data.type}>
                                    <Carousel dotPosition='bottom' autoplay>
                                        <div className='carousel-image'>
                                            <div style={{backgroundImage:'url(/hero1.jpg)', backgroundSize:'cover', height:'350px' }}>
                                            </div>
                                        </div>
                                        <div className='carousel-image' style={{backgroundColor:'blue'}}>
                                            <div style={{backgroundImage:'url(/hero2.jpg)', backgroundSize:'cover', height:'350px' }}>
                                            </div>
                                        </div>
                                        <div className='carousel-image' style={{backgroundColor:'green'}}>
                                            <div style={{backgroundImage:'url(/hero3.jpg)', backgroundSize:'cover', height:'350px' }}>
                                            </div>
                                        </div>
                                    </Carousel>
                                </Badge.Ribbon>
                                </Col>
                            </Row>
                            <Row style={{marginTop:20}}>
                                <Col xs={{span:24, order:2}} lg={{span:16, order:1}} style={{ padding: 20 }}>
                                    <Title id="pengenalan">
                                        Pengenalan
                                    </Title>
                                    <Paragraph>
                                        {data.description}<br/>
                                    </Paragraph>
                                    <Divider/>
                                    <Title id="tutorial">
                                        Tutorial
                                    </Title>
                                    <List
                                        itemLayout="vertical"
                                        size="small"
                                        pagination={{
                                        onChange: page => {
                                            console.log(page);
                                        },
                                        pageSize: 2,
                                        }}
                                        dataSource={listTutorialData}
                                        footer={
                                        <div>
                                            <Button type='primary'>Sumbang tutorial baru tentang {data.title}</Button>
                                        </div>
                                        }
                                        renderItem={item => (
                                        <List.Item
                                            key={item.title}
                                            actions={[
                                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                            ]}
                                            extra={
                                            <img
                                                width={150}
                                                alt="logo"
                                                src={item.image}
                                            />
                                            }
                                        >
                                            <List.Item.Meta
                                            avatar={<Avatar src={item.avatar} />}
                                            title={<a href={item.href}>{item.title}</a>}
                                            description={item.description}
                                            />
                                            {item.content}
                                        </List.Item>
                                        )}
                                    />
                                    <Divider/>
                                    <Title id="video">
                                        Video
                                    </Title>
                                    <LiteYouTubeEmbed 
                                        id="bpqgFUE2h5A"
                                        title="PdPR"
                                    />
                                </Col>
                                <Col xs={{span:24, order:1}} lg={{span:8, order: 2}} style={{ padding: 20 }}>
                                    <Paragraph>
                                        <span>Kategori: {data.type}</span><br/>
                                        <span>Keterlihatan: <EyeOutlined /> {data.views}</span><br/>
                                        <Tag icon={<BarChartOutlined />} color="#87d068" style={{color:'black', fontStyle:'italic', marginTop:5}}>HET Impak: {data.het_impact}</Tag><br />
                                        <Space style={{ marginTop:10, marginBottom:10 }}>
                                            <Button type='primary' size='small'><PlusOutlined/> My List</Button>
                                            <Button type='primary' size='small'><ShareAltOutlined /> Share</Button>
                                            <Button type='primary' size='small'><LikeOutlined/> Like</Button>
                                        </Space><br/>
                                        <span>Artikel berkaitan:</span>
                                        <Divider/>
                                        <h4>Isi Kandungan</h4>
                                        <Anchor className="kandungan" affix={true} showInkInFixed={true} offsetTop={30}>
                                            <Link href="#pengenalan" title="Pengenalan"/>
                                            <Link href="#tutorial" title="Tutorial"/>
                                            <Link href="#video" title="Video"/>
                                        </Anchor>
                                    </Paragraph>
                                </Col>
                            </Row>
                    </Col>
            </Row>
        </>
    )
}
export default DetailedView;