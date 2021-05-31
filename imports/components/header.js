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
            <Header className="header" style={{ backgroundColor:'transparent' }}>
                <Favicon url={window.location.origin + '/hacker32.png'} />
                <Row justify='start'>
                    <Col xs={24}>
                        <div className="layout-logo">
                            <NavLink exact to="/"><h1> <img style={{ height: '30px', width: '30px'}} alt='Hack(EduTech); Logo' src={window.location.origin + '/hacker64.png' }/><span style={{ fontSize:'0.8em', fontFamily:'Quicksand' }}> Hack(EduTech);</span> <sub><span style={{ fontSize: '0.6em', color: 'rgba(255, 255, 255, 0.5)'}}>{'v' + pkg.version}</span></sub></h1></NavLink>
                        </div>
                    </Col>
                </Row>
            </Header>
        </>
    )
}


export default HeaderX;
