import React from "react";
import {Col, Image, Row,} from "react-bootstrap";
import backgroundImg from '../assets/images/backgroundImg.png'

const Welcome:React.FC = () => {
    return(
        <Row className='welcome mw-100' >
            <Col xs={12} className='text-center py-2'>
                <h1>My Library</h1>
            </Col>
            <Col  className=' lib-img bg-danger '>
                <Image className='vw-100' src ={backgroundImg}/>
            </Col>
            <Col xs={12} className='photo-credit'>
                Photo by <a href='https://unsplash.com/photos/ajE5goOGzZc'>Anna Hunko</a>
                on <a href='https://unsplash.com/photos/ajE5goOGzZc'>Unsplash</a>
            </Col>
        </Row>
    )
};

export default Welcome;