import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import backgroundImg from '../assets/styles/images/backgroundImg.png'

const Welcome:React.FC = () => {
    return(
        <Row className='welcome'>
            <Col xs={12} className='text-center py-2'>
                <h1>My Library</h1>
            </Col>
            <Col xs={12} className='text-center container-fluid'>
                <Image src={backgroundImg} fluid/>
            </Col>
            <Col xs={12} className='text-right py-2'>
                    Photo by <a href=""/>
            </Col>
        </Row>
    )
};

export default Welcome;