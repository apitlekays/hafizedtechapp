import React from 'react';

import Row from 'antd/es/row';
import Col from 'antd/es/col';

const Home = () => {
    return (
        <>
            <Row className='hero' justify='center' align="top" style={{ backgroundImage:'url("/hero.png")', backgroundSize:'cover', height:'100vh', position:'relative', top:'-66px', zIndex:'-1' }}>
                <Col xs={24} md={16} style={{ textAlign:'center', marginTop:200 }}>
                    <span style={{ fontSize:'4em', fontFamily:'Quicksand', fontWeight:'700'}}>Hack(EduTech);</span>
                    <Row justify='center' align="top">
                        <Col xs={24} md={16} style={{ textAlign:'center', fontSize:'1.3em' }}>
                            <p>Misi Hack(EduTech); adalah untuk membantu para pendidik yang ingin mendalami pengetahuan <span style={{ fontSize:'1.4em', backgroundColor:'red', color:'white', padding:5, borderRadius:5}}>teknologi</span> dan <span style={{ fontSize:'1.4em', backgroundColor:'red', color:'white', padding:5, borderRadius:5}}>pedagogi</span> untuk menambahbaik strategi dan teknik pengajaran dan pembelajaran, berbantukan teknologi terkini.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default Home;