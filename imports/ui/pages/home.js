import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Rate from 'antd/es/rate';
import Progress from 'antd/es/progress';
import Badge from 'antd/es/badge';
import Avatar from 'antd/es/avatar';
import Typography from 'antd/es/typography';
import Button from 'antd/es/button';
import Tag from 'antd/es/tag';
import Affix from 'antd/es/affix';

import EyeOutlined from '@ant-design/icons/EyeOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import BarChartOutlined from '@ant-design/icons/BarChartOutlined';

import './home.css';
import { Divider } from 'antd';

const { Paragraph, Title } = Typography;

const data = [
    {
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
        het_impact: 1.3
    },
    {
        _id:2,
        type: 'Teknologi',
        image: '/hero2.jpg',
        title: 'Padlet',
        description: 'A flipped classroom is an instructional strategy and a type of blended learning, which aims to increase student engagement and learning by having students complete readings at their home and work on live problem-solving during class time. It moves activities, including those that may have traditionally been considered homework, into the classroom. In a flipped classroom, students watch online lectures, collaborate in online discussions, or carry out research at home while engaging in concepts in the classroom with the guidance of a mentor. In the traditional model of classroom instruction, the teacher is typically the central focus of a lesson and the primary disseminator of information during the class period. The teacher responds to questions while students defer directly to the teacher for guidance and feedback. In a classroom with a traditional style of instruction, individual lessons may be focused on an explanation of content using a lecture style. Student engagement in the traditional model may be limited to activities in which students work independently or in small groups on an application task designed by the teacher. Class discussions are typically centered on the teacher, who controls the flow of the conversation.[2] Typically, this pattern of teaching also involves giving students the task of reading from a textbook or practicing a concept by working on a problem set, for example, outside school. The flipped classroom intentionally shifts instruction to a learner-centered model in which time in the classroom is used to explore topics in greater depth and create meaningful learning opportunities while students are initially introduced to new topics outside of the classroom. In a flipped classroom, "content delivery" may take a variety of forms. Often, video lessons prepared by the teacher or third parties are used to deliver content, although online collaborative discussions, digital research, and text readings may be used. It has been claimed that the ideal length for the video lesson is eight to twelve minutes.[4][5][6]',
        rating: 2.5,
        difficulty:70,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200,
        het_impact: 1.3
    },
    {
        _id:3,
        type: 'Teknologi',
        image: '/hero3.jpg',
        title: 'Canva',
        description: 'A flipped classroom is an instructional strategy and a type of blended learning, which aims to increase student engagement and learning by having students complete readings at their home and work on live problem-solving during class time. It moves activities, including those that may have traditionally been considered homework, into the classroom. In a flipped classroom, students watch online lectures, collaborate in online discussions, or carry out research at home while engaging in concepts in the classroom with the guidance of a mentor. In the traditional model of classroom instruction, the teacher is typically the central focus of a lesson and the primary disseminator of information during the class period. The teacher responds to questions while students defer directly to the teacher for guidance and feedback. In a classroom with a traditional style of instruction, individual lessons may be focused on an explanation of content using a lecture style. Student engagement in the traditional model may be limited to activities in which students work independently or in small groups on an application task designed by the teacher. Class discussions are typically centered on the teacher, who controls the flow of the conversation.[2] Typically, this pattern of teaching also involves giving students the task of reading from a textbook or practicing a concept by working on a problem set, for example, outside school. The flipped classroom intentionally shifts instruction to a learner-centered model in which time in the classroom is used to explore topics in greater depth and create meaningful learning opportunities while students are initially introduced to new topics outside of the classroom. In a flipped classroom, "content delivery" may take a variety of forms. Often, video lessons prepared by the teacher or third parties are used to deliver content, although online collaborative discussions, digital research, and text readings may be used. It has been claimed that the ideal length for the video lesson is eight to twelve minutes.[4][5][6]',
        rating: 4.5,
        difficulty:60,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200,
        het_impact: 1.3
    },
    {
        _id:4,
        type: 'Pedagogi',
        image: '/hero4.jpg',
        title: 'Pendekatan Peer Instruction',
        description: 'A flipped classroom is an instructional strategy and a type of blended learning, which aims to increase student engagement and learning by having students complete readings at their home and work on live problem-solving during class time. It moves activities, including those that may have traditionally been considered homework, into the classroom. In a flipped classroom, students watch online lectures, collaborate in online discussions, or carry out research at home while engaging in concepts in the classroom with the guidance of a mentor. In the traditional model of classroom instruction, the teacher is typically the central focus of a lesson and the primary disseminator of information during the class period. The teacher responds to questions while students defer directly to the teacher for guidance and feedback. In a classroom with a traditional style of instruction, individual lessons may be focused on an explanation of content using a lecture style. Student engagement in the traditional model may be limited to activities in which students work independently or in small groups on an application task designed by the teacher. Class discussions are typically centered on the teacher, who controls the flow of the conversation.[2] Typically, this pattern of teaching also involves giving students the task of reading from a textbook or practicing a concept by working on a problem set, for example, outside school. The flipped classroom intentionally shifts instruction to a learner-centered model in which time in the classroom is used to explore topics in greater depth and create meaningful learning opportunities while students are initially introduced to new topics outside of the classroom. In a flipped classroom, "content delivery" may take a variety of forms. Often, video lessons prepared by the teacher or third parties are used to deliver content, although online collaborative discussions, digital research, and text readings may be used. It has been claimed that the ideal length for the video lesson is eight to twelve minutes.[4][5][6]',
        rating: 3,
        difficulty:10,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200,
        het_impact: 1.3
    },
    {
        _id:5,
        type: 'Pedagogi',
        image: '/hero3.jpg',
        title: 'Pendekatan Pembelajaran Masteri',
        description: 'A flipped classroom is an instructional strategy and a type of blended learning, which aims to increase student engagement and learning by having students complete readings at their home and work on live problem-solving during class time. It moves activities, including those that may have traditionally been considered homework, into the classroom. In a flipped classroom, students watch online lectures, collaborate in online discussions, or carry out research at home while engaging in concepts in the classroom with the guidance of a mentor. In the traditional model of classroom instruction, the teacher is typically the central focus of a lesson and the primary disseminator of information during the class period. The teacher responds to questions while students defer directly to the teacher for guidance and feedback. In a classroom with a traditional style of instruction, individual lessons may be focused on an explanation of content using a lecture style. Student engagement in the traditional model may be limited to activities in which students work independently or in small groups on an application task designed by the teacher. Class discussions are typically centered on the teacher, who controls the flow of the conversation.[2] Typically, this pattern of teaching also involves giving students the task of reading from a textbook or practicing a concept by working on a problem set, for example, outside school. The flipped classroom intentionally shifts instruction to a learner-centered model in which time in the classroom is used to explore topics in greater depth and create meaningful learning opportunities while students are initially introduced to new topics outside of the classroom. In a flipped classroom, "content delivery" may take a variety of forms. Often, video lessons prepared by the teacher or third parties are used to deliver content, although online collaborative discussions, digital research, and text readings may be used. It has been claimed that the ideal length for the video lesson is eight to twelve minutes.[4][5][6]',
        rating: 3,
        difficulty:10,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200,
        het_impact: 1.3
    },
    {
        _id:6,
        type: 'Pedagogi',
        image: '/hero1.jpg',
        title: 'Pendekatan Drill & Practice',
        description: 'A flipped classroom is an instructional strategy and a type of blended learning, which aims to increase student engagement and learning by having students complete readings at their home and work on live problem-solving during class time. It moves activities, including those that may have traditionally been considered homework, into the classroom. In a flipped classroom, students watch online lectures, collaborate in online discussions, or carry out research at home while engaging in concepts in the classroom with the guidance of a mentor. In the traditional model of classroom instruction, the teacher is typically the central focus of a lesson and the primary disseminator of information during the class period. The teacher responds to questions while students defer directly to the teacher for guidance and feedback. In a classroom with a traditional style of instruction, individual lessons may be focused on an explanation of content using a lecture style. Student engagement in the traditional model may be limited to activities in which students work independently or in small groups on an application task designed by the teacher. Class discussions are typically centered on the teacher, who controls the flow of the conversation.[2] Typically, this pattern of teaching also involves giving students the task of reading from a textbook or practicing a concept by working on a problem set, for example, outside school. The flipped classroom intentionally shifts instruction to a learner-centered model in which time in the classroom is used to explore topics in greater depth and create meaningful learning opportunities while students are initially introduced to new topics outside of the classroom. In a flipped classroom, "content delivery" may take a variety of forms. Often, video lessons prepared by the teacher or third parties are used to deliver content, although online collaborative discussions, digital research, and text readings may be used. It has been claimed that the ideal length for the video lesson is eight to twelve minutes.[4][5][6]',
        rating: 4,
        difficulty:30,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200,
        het_impact: 1.3
    },
    {
        _id:7,
        type: 'Teknologi',
        image: '/hero2.jpg',
        title: 'Moodle',
        description: 'A flipped classroom is an instructional strategy and a type of blended learning, which aims to increase student engagement and learning by having students complete readings at their home and work on live problem-solving during class time. It moves activities, including those that may have traditionally been considered homework, into the classroom. In a flipped classroom, students watch online lectures, collaborate in online discussions, or carry out research at home while engaging in concepts in the classroom with the guidance of a mentor. In the traditional model of classroom instruction, the teacher is typically the central focus of a lesson and the primary disseminator of information during the class period. The teacher responds to questions while students defer directly to the teacher for guidance and feedback. In a classroom with a traditional style of instruction, individual lessons may be focused on an explanation of content using a lecture style. Student engagement in the traditional model may be limited to activities in which students work independently or in small groups on an application task designed by the teacher. Class discussions are typically centered on the teacher, who controls the flow of the conversation.[2] Typically, this pattern of teaching also involves giving students the task of reading from a textbook or practicing a concept by working on a problem set, for example, outside school. The flipped classroom intentionally shifts instruction to a learner-centered model in which time in the classroom is used to explore topics in greater depth and create meaningful learning opportunities while students are initially introduced to new topics outside of the classroom. In a flipped classroom, "content delivery" may take a variety of forms. Often, video lessons prepared by the teacher or third parties are used to deliver content, although online collaborative discussions, digital research, and text readings may be used. It has been claimed that the ideal length for the video lesson is eight to twelve minutes.[4][5][6]',
        rating: 2.5,
        difficulty:70,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200,
        het_impact: 1.3
    },
    {
        _id:8,
        type: 'Teknologi',
        image: '/hero3.jpg',
        title: 'Facebook',
        description: 'A flipped classroom is an instructional strategy and a type of blended learning, which aims to increase student engagement and learning by having students complete readings at their home and work on live problem-solving during class time. It moves activities, including those that may have traditionally been considered homework, into the classroom. In a flipped classroom, students watch online lectures, collaborate in online discussions, or carry out research at home while engaging in concepts in the classroom with the guidance of a mentor. In the traditional model of classroom instruction, the teacher is typically the central focus of a lesson and the primary disseminator of information during the class period. The teacher responds to questions while students defer directly to the teacher for guidance and feedback. In a classroom with a traditional style of instruction, individual lessons may be focused on an explanation of content using a lecture style. Student engagement in the traditional model may be limited to activities in which students work independently or in small groups on an application task designed by the teacher. Class discussions are typically centered on the teacher, who controls the flow of the conversation.[2] Typically, this pattern of teaching also involves giving students the task of reading from a textbook or practicing a concept by working on a problem set, for example, outside school. The flipped classroom intentionally shifts instruction to a learner-centered model in which time in the classroom is used to explore topics in greater depth and create meaningful learning opportunities while students are initially introduced to new topics outside of the classroom. In a flipped classroom, "content delivery" may take a variety of forms. Often, video lessons prepared by the teacher or third parties are used to deliver content, although online collaborative discussions, digital research, and text readings may be used. It has been claimed that the ideal length for the video lesson is eight to twelve minutes.[4][5][6]',
        rating: 4.5,
        difficulty:60,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200,
        het_impact: 1.3
    },
    {
        _id:9,
        type: 'Pedagogi',
        image: '/hero4.jpg',
        title: 'Pendekatan Problem Based Learning',
        description: 'A flipped classroom is an instructional strategy and a type of blended learning, which aims to increase student engagement and learning by having students complete readings at their home and work on live problem-solving during class time. It moves activities, including those that may have traditionally been considered homework, into the classroom. In a flipped classroom, students watch online lectures, collaborate in online discussions, or carry out research at home while engaging in concepts in the classroom with the guidance of a mentor. In the traditional model of classroom instruction, the teacher is typically the central focus of a lesson and the primary disseminator of information during the class period. The teacher responds to questions while students defer directly to the teacher for guidance and feedback. In a classroom with a traditional style of instruction, individual lessons may be focused on an explanation of content using a lecture style. Student engagement in the traditional model may be limited to activities in which students work independently or in small groups on an application task designed by the teacher. Class discussions are typically centered on the teacher, who controls the flow of the conversation.[2] Typically, this pattern of teaching also involves giving students the task of reading from a textbook or practicing a concept by working on a problem set, for example, outside school. The flipped classroom intentionally shifts instruction to a learner-centered model in which time in the classroom is used to explore topics in greater depth and create meaningful learning opportunities while students are initially introduced to new topics outside of the classroom. In a flipped classroom, "content delivery" may take a variety of forms. Often, video lessons prepared by the teacher or third parties are used to deliver content, although online collaborative discussions, digital research, and text readings may be used. It has been claimed that the ideal length for the video lesson is eight to twelve minutes.[4][5][6]',
        rating: 3,
        difficulty:10,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200,
        het_impact: 1.3
    },
    {
        _id:10,
        type: 'Pedagogi',
        image: '/hero3.jpg',
        title: 'Pendekatan Constructivism',
        description: 'A flipped classroom is an instructional strategy and a type of blended learning, which aims to increase student engagement and learning by having students complete readings at their home and work on live problem-solving during class time. It moves activities, including those that may have traditionally been considered homework, into the classroom. In a flipped classroom, students watch online lectures, collaborate in online discussions, or carry out research at home while engaging in concepts in the classroom with the guidance of a mentor. In the traditional model of classroom instruction, the teacher is typically the central focus of a lesson and the primary disseminator of information during the class period. The teacher responds to questions while students defer directly to the teacher for guidance and feedback. In a classroom with a traditional style of instruction, individual lessons may be focused on an explanation of content using a lecture style. Student engagement in the traditional model may be limited to activities in which students work independently or in small groups on an application task designed by the teacher. Class discussions are typically centered on the teacher, who controls the flow of the conversation.[2] Typically, this pattern of teaching also involves giving students the task of reading from a textbook or practicing a concept by working on a problem set, for example, outside school. The flipped classroom intentionally shifts instruction to a learner-centered model in which time in the classroom is used to explore topics in greater depth and create meaningful learning opportunities while students are initially introduced to new topics outside of the classroom. In a flipped classroom, "content delivery" may take a variety of forms. Often, video lessons prepared by the teacher or third parties are used to deliver content, although online collaborative discussions, digital research, and text readings may be used. It has been claimed that the ideal length for the video lesson is eight to twelve minutes.[4][5][6]',
        rating: 3,
        difficulty:10,
        author:'Hafiz Hanif',
        authorAvatar: '/hacker32.png',
        views: 200,
        het_impact: 1.3
    }
]

const Home = () => {

    const [dataClick, setDataClick] = useState({
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
        het_impact: 1.3
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
                            <span style={{ color:'#fff', fontStyle:'italic' }} ><Avatar size={18} src={dataClick.authorAvatar}/> {dataClick.author}</span><br />
                            <Paragraph style={{color:'#fff', paddingTop:10 }} ellipsis={{ rows: 3, expandable: false, symbol:'...' }}>{dataClick.description}</Paragraph>
                            </div>
                            <span>Nilaian Artikel: </span><Rate allowHalf disabled value={dataClick.rating}/><br/>
                            <span>Meter Kesusahan: </span><Progress percent={dataClick.difficulty} steps={5} style={{color:'white'}} /><br />
                            <span>Meter Tular: <EyeOutlined />{dataClick.views}</span><br />
                            <Tag icon={<BarChartOutlined />} color="#87d068" style={{color:'black', fontStyle:'italic', marginTop:5}}>HET Impak: {dataClick.het_impact}</Tag><br/>
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
            <Row style={{ width:'100%', height:'5px', backgroundColor:'#f0f2f5' }}>
            </Row>
            </div>
        </Affix>
            <Row justify='center' style={{ maxWidth:'1400px', marginTop:20, marginBottom:20, marginLeft:'auto', marginRight:'auto'}} gutter={[24, 24]}>
            <Divider style={{ fontSize:'2em', fontFamily:'Quicksand'}} dashed orientation='left'>Artikel Terkini</Divider>
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
                                            <Rate style={{ fontSize:'0.8em'}} allowHalf disabled defaultValue={datum.rating}/><br/>
                                            <Tag icon={<BarChartOutlined />} color="#87d068" style={{color:'black', fontStyle:'italic', marginTop:5}}>{datum.het_impact}</Tag>
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
                                            <Rate style={{ fontSize:'0.8em'}} allowHalf disabled value={datum.rating}/><br/>
                                            <Tag icon={<BarChartOutlined />} color="#87d068" style={{color:'black', fontStyle:'italic', marginTop:5}}>{datum.het_impact}</Tag>
                                        </Col>
                                    </Row>
                                </Badge.Ribbon>
                            </Link>
                        }
                    </Col>
                ))
            }
            </Row>
            <Row justify='center' style={{ maxWidth:'1400px', marginTop:20, marginBottom:20, marginLeft:'auto', marginRight:'auto'}} gutter={[24, 24]}>
            <Divider style={{ fontSize:'2em', fontFamily:'Quicksand'}} dashed orientation='left'>Sesuai PdPR</Divider>
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
                                            <Rate style={{ fontSize:'0.8em'}} allowHalf disabled defaultValue={datum.rating}/><br/>
                                            <Tag icon={<BarChartOutlined />} color="#87d068" style={{color:'black', fontStyle:'italic', marginTop:5}}>{datum.het_impact}</Tag>
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
                                            <Rate style={{ fontSize:'0.8em'}} allowHalf disabled value={datum.rating}/><br/>
                                            <Tag icon={<BarChartOutlined />} color="#87d068" style={{color:'black', fontStyle:'italic', marginTop:5}}>{datum.het_impact}</Tag>
                                        </Col>
                                    </Row>
                                </Badge.Ribbon>
                            </Link>
                        }
                    </Col>
                ))
            }
            </Row>
            <Row justify='center' style={{ maxWidth:'1400px', marginTop:20, marginBottom:20, marginLeft:'auto', marginRight:'auto'}} gutter={[24, 24]}>
            <Divider style={{ fontSize:'2em', fontFamily:'Quicksand'}} dashed orientation='left'>Teknologi Mudah</Divider>
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
                                            <Rate style={{ fontSize:'0.8em'}} allowHalf disabled defaultValue={datum.rating}/><br/>
                                            <Tag icon={<BarChartOutlined />} color="#87d068" style={{color:'black', fontStyle:'italic', marginTop:5}}>{datum.het_impact}</Tag>
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
                                            <Rate style={{ fontSize:'0.8em'}} allowHalf disabled value={datum.rating}/><br/>
                                            <Tag icon={<BarChartOutlined />} color="#87d068" style={{color:'black', fontStyle:'italic', marginTop:5}}>{datum.het_impact}</Tag>
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