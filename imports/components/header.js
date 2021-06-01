import React from 'react';
import { NavLink } from 'react-router-dom';
import Favicon from 'react-favicon';
import pkg from '../../package.json';

import Layout from 'antd/es/layout'; 
import Row from 'antd/es/row';
import Col from 'antd/es/col';



//creating Layout objects
const { Header } = Layout;

function HeaderX(props){
    
    return (
        <>
            <Header className="header" style={{ backgroundColor:'transparent', zIndex: 1, position:'relative' }}>
                <Favicon url={window.location.origin + '/hacker32.png'} />
                <Row justify='center' align="top">
                    <Col flex='300'>
                        <div className="layout-logo">
                            <NavLink exact to="/"><h1> <img style={{ height: '30px', width: '30px'}} alt='Hack(EduTech); Logo' src={window.location.origin + '/hacker64.png' }/><span style={{ fontSize:'0.8em', fontFamily:'Quicksand' }}> Hack(<span style={{ color:'#ff4d4f'}}>Edu</span><span style={{ color:'#007bff'}}>Tech</span>);</span> <sub><span style={{ fontSize: '0.6em', color: 'grey'}}>{'v' + pkg.version}</span></sub></h1></NavLink>
                        </div>
                    </Col>
                </Row>
            </Header>
        </>
    )
}


export default HeaderX;
