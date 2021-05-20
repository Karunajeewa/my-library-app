import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import welcomeImg from '../images/welcome-img.png';

const Welcome = () => {
    return (
        <div className="welcome-section">
            <Row>
                <Col className="welcome-title text-center">
                    My Library
                </Col>
            </Row>
            <Row>
                <Col className="img-container">
                    <img src={welcomeImg} alt="img"/>
                </Col>
            </Row>
            <Row>
                <Col className="img-credit text-end">
                    Photo by <a
                    href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anna
                    Hunko</a> on <a
                    href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </Col>
            </Row>
        </div>
    );
}

export default Welcome;
