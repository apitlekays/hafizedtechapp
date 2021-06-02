import React from 'react'

import Row from 'antd/es/row';
import Col from 'antd/es/col';

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

const DetailedView = (props) => {
    //console.log(props.match.params)
    let id = props.match.params._id
    return (
        <>
           <Row justify='center' style={{ maxWidth:'1400px', marginTop:20, marginBottom:20, marginLeft:'auto', marginRight:'auto'}}>
               <Col flex='auto'>
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
               <Col flex='auto'>
                    <p>column 2</p>
               </Col>
           </Row>
        </>
    )
}
export default DetailedView;