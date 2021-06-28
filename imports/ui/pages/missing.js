import React from 'react'
import { Link } from 'react-router-dom';

import Result from 'antd/es/result';
import Button from 'antd/es/button';
import Row from 'antd/es/row';
import Col from 'antd/es/col';

const Missing = (props) => {
    return (
        <Row className='hero' justify='center' align="middle" style={{ height: '90vh'}}>
            <Col>
                <Result 
                    status='404'
                    title='404'
                    subTitle='Maaf, laman yang anda cari tiada dalam database kami.'
                    extra={
                    <Link to={{pathname:'/'}}>
                        <Button type='primary'>Kembali ke Laman Utama</Button>
                    </Link>
                    }
                />
            </Col>
        </Row>
    )
}
export default Missing;