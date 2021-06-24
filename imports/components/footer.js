import React from 'react';

import Layout from 'antd/es/layout';
import HeartTwoTone from '@ant-design/icons/HeartTwoTone';
import CopyrightOutlined from '@ant-design/icons/CopyrightOutlined';

const { Footer }  = Layout;


const FooterX = (props) => {

    const currentYear = () => {
        return new Date().getFullYear();
    }

    return (
        <>
            <Footer className='footer' style={{ textAlign: 'center', backgroundColor: 'rgb(215,228,255)' }}>
                Hack(Edu)Tech™ <CopyrightOutlined /> {currentYear()} Dibangunkan dengan <HeartTwoTone twoToneColor="#eb2f96" /> di Tanjong Malim, Malaysia.
            </Footer>
        </>
        
    )
}

export default FooterX;