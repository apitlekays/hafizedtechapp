import React from 'react'

import { useCurrentUserProfile } from '../../../client/CurrentUserProfileContext';
import { LottieLoadings } from '../../../imports/components/LottieLoadings';

import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Avatar from 'antd/es/avatar';
import Typography from 'antd/es/typography';
import Tag from 'antd/es/tag';
import Statistic from 'antd/es/statistic';
import Tabs from 'antd/es/tabs';

import EditOutlined from '@ant-design/icons/EditOutlined';
import SaveOutlined from '@ant-design/icons/SaveOutlined';
import LockOutlined from '@ant-design/icons/LockOutlined';
import ReadOutlined from '@ant-design/icons/ReadOutlined';

import Sumbang from '../pages/profileModules/sumbang';
const Admin = React.lazy(() => import('../pages/profileModules/admin'));
const Senarai = React.lazy(() => import('../pages/profileModules/senarai'));
const Cerita = React.lazy(() => import('../pages/profileModules/cerita'));

const Loading = () => (
    <Row justify='space-around' align="middle" style={{ height: '100vh' }}>
      <Col span={4}>
        <LottieLoadings />
      </Col>
    </Row>
);

const { Text } = Typography;
const { TabPane } = Tabs;

const Profile = () => {

    const currentUser = useCurrentUserProfile(); //get the current logged in user
    console.log(currentUser)
    return (
        <Row justify='center' align="top" style={{ maxWidth:'1200px', marginTop:20, marginBottom:20, marginLeft:'auto', marginRight:'auto'}} gutter={[24, 24]}>
            {
                currentUser != undefined ?
                <>
                    <Col xs={24} sm={6} style={{backgroundColor:'white', borderRadius:4, margin:20, paddingBottom: 20}}>
                        <Row justify='center' align="top">
                            <Col style={{ padding: 30,  }}>
                                <Avatar size={90} src={currentUser.avatar} />
                            </Col>
                        </Row>
                        <Row justify='center' align="top" style={{ paddingBottom: 10}}>
                            <Col >
                                <Tag color="#87d068">{currentUser.roles[0]}</Tag>
                            </Col>
                        </Row>
                        <Row justify='center' align="top">
                            <Col>
                                <Text>{currentUser.name}</Text>
                            </Col>
                        </Row>
                        <Row justify='center' align="top">
                            <Col>
                                <Text>{currentUser.email}</Text>
                            </Col>
                        </Row>
                        <Row justify='center' align="top" style={{ marginTop: 30}}>
                            <Col>
                                <Statistic title="Skor Keseluruhan" value={currentUser.overallScore} valueStyle={{ textAlign:'center'}}/>
                            </Col>
                        </Row>
                        <Row justify='center' align="top" style={{ marginTop: 30}}>
                            <Col>
                                <Statistic title="Jumlah Sumbangan Artikel" value={currentUser.idArtikelSendiri.length} valueStyle={{ textAlign:'center'}}/>
                            </Col>
                        </Row>
                        <Row justify='center' align="top" style={{ marginTop: 30}}>
                            <Col>
                                <Statistic title="Jumlah Artikel Disimpan" value={currentUser.idArtikelSimpanan.length} valueStyle={{ textAlign:'center'}}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col flex='auto' style={{backgroundColor:'white', borderRadius:4, margin: 20}}>
                        <Row justify='start' align="top" style={{ marginTop: 20, marginLeft: 10, marginRight:10, marginBottom:10}}>
                            <Col style={{ width:'100%' }}>
                                <Tabs defaultActiveKey="sumbang" >
                                {
                                    currentUser.roles[0] == 'superuser' ?
                                    <TabPane tab={<span><LockOutlined />Admin</span>} key="admin">
                                        <Admin/>
                                    </TabPane>
                                    :''
                                }
                                    <TabPane tab={<span><EditOutlined />Sumbangan Artikel</span>} key="sumbang">
                                        <Sumbang/>
                                    </TabPane>
                                    <TabPane tab={<span><SaveOutlined />Simpanan Artikel</span>} key="simpan">
                                        <Senarai/>
                                    </TabPane>
                                    <TabPane tab={<span><ReadOutlined />Cerita</span>} key="cerita">
                                        <Cerita/>
                                    </TabPane>
                                </Tabs>
                            </Col>
                        </Row>
                    </Col>
                </>




                //loading state
                : <Loading/>
            }
            
            
        </Row>
        
    )
}
export default Profile;