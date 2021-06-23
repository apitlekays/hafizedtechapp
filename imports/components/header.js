import React from 'react';
import { Meteor } from 'meteor/meteor';
import { NavLink, useHistory, Link } from 'react-router-dom';
import Favicon from 'react-favicon';
import pkg from '../../package.json';

import { ServiceConfiguration } from 'meteor/service-configuration';
import { useCurrentUserProfile } from '../../client/CurrentUserProfileContext';

import Layout from 'antd/es/layout'; 
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Popover from 'antd/es/popover';
import Button from 'antd/es/button';
import message from 'antd/es/message';
import Avatar from 'antd/es/avatar';
import Modal from 'antd/es/modal';

import QuestionCircleOutlined from '@ant-design/icons/QuestionCircleOutlined';
import GoogleOutlined from '@ant-design/icons/GoogleOutlined';
import LogoutOutlined from '@ant-design/icons/LogoutOutlined';
import ExclamationCircleOutlined from '@ant-design/icons/ExclamationCircleOutlined';

//creating Layout objects
const { Header } = Layout;

const content = (
    <div style={{ width: '300px' }}>
        <span>Misi Hack(EduTech); adalah untuk membantu anda mendalami pengetahuan teknologi dan pedagogi untuk menambahbaik strategi dan teknik pengajaran dan pembelajaran, berbantukan teknologi terkini</span>
    </div>
)

const contentProfile = (
    <div style={{ width: '80px', textAlign: 'center', cursor: 'pointer' }}>
        <span>Buka profil</span>
    </div>
)

const HeaderX = (props) =>{
    const history = useHistory();
    const currentUser = useCurrentUserProfile(); //get the current logged in user
    const { confirm } = Modal;

    const googleLogin = () => {
        const {scope} = ServiceConfiguration.configurations.findOne({service: 'google'});
        Meteor.loginWithGoogle(
            {requestPermissions: scope, requestOfflineToken: true },
            error => {
              if (error) {
                  console.log(error);
                  if (error.errorType === 'Accounts.LoginCancelledError') return;
                  message.error(error.reason);
              } else {
                  message.success('Selamat Datang ke platform Hack(Edu)Tech! \u{1F604}')
              }
            }
          );
    }

    const showConfirm = () => {
        confirm({
            title: 'Serius nak keluar? \u{1f61f}',
            icon: <ExclamationCircleOutlined />,
            content: 'Data yang belum disimpan akan hilang.',
            okText: 'Ok',
            okType: 'danger',
            cancelText: 'Batal',
            onOk() {
                history.push('/');
                Meteor.logout((e) => {
                    if(e){
                        message.error(e)
                    } else {
                        history.push('/')
                        message.info('Jumpa lagi! \u{1F604}')
                    }
                });
            },
            onCancel() {
                console.log('Cancelled logout');
            },
        })
    }
    
    return (
        <>
            <Header className="header" style={{ backgroundColor:'white', zIndex: 1, position:'relative' }}>
                <Favicon url={window.location.origin + '/hacker32.png'} />
                <Row justify='center' align="top">
                    <Col flex='300'>
                        <div className="layout-logo">
                            <NavLink exact to="/"><h1> <img style={{ height: '30px', width: '30px'}} alt='Hack(Edu)Tech; Logo' src={window.location.origin + '/hacker64.png' }/><span style={{ fontSize:'0.8em', fontFamily:'Quicksand' }}> Hack(<span style={{ color:'#ff4d4f'}}>Edu</span>)<span style={{ color:'#007bff'}}>Tech</span>; <Popover placement="bottomRight" content={content}> <QuestionCircleOutlined style={{color:'lightgrey', fontSize:'0.7em'}}/></Popover></span></h1></NavLink>
                        </div>
                    </Col>
                    <Col flex='auto'>
                    {
                        Meteor.userId()?
                        <Button 
                        style={{ backgroundColor:'rgb(77, 179, 0)', borderColor:'rgb(77, 179, 0)', color:'white' }}
                        onClick={showConfirm}
                        >
                            <LogoutOutlined />
                            Logout
                        </Button>
                        :
                        <Button 
                        style={{ backgroundColor:'rgb(77, 179, 0)', borderColor:'rgb(77, 179, 0)', color:'white' }}
                        onClick={googleLogin}
                        >
                            <GoogleOutlined />
                            Login
                        </Button>
                    }
                    </Col>
                    {
                        currentUser ? 
                        <Col flex='auto'>
                            <Link to={{pathname: `/profil/${currentUser._id}`}}>
                                <Popover placement="bottomRight" content={contentProfile}>
                                    <Avatar size={40} src={currentUser.avatar} style={{ border: 'solid 3px rgb(77, 179, 0)', marginLeft: 10}} />
                                </Popover>     
                            </Link>
                        </Col>
                        :''
                    }
                </Row>
            </Header>
        </>
    )
}


export default HeaderX;
