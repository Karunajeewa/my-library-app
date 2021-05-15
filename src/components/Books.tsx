import React from 'react';
import {Plus} from 'react-feather';
import {Edit} from 'react-feather';
import {Trash2} from 'react-feather';
import {XCircle} from 'react-feather';
import {Button, Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';

export const Books = () => {
    return (
        //
        <Container>
            <Row>
                <Col>
                    <label id={'a1'}>Books</label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="empty-list"> No authors listed here </p>
                </Col>
            </Row>
            <Row>
                <div>
                    <ul className="books-list">
                        <li>
                            <Row>
                                <Col xs={10}>1. Book1</Col>
                                <Col className="text-warning edit-update-icon"><Edit/></Col>
                                <Col className="text-danger edit-update-icon"><Trash2/></Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col xs={10}>2. Book2</Col>
                                <Col className="text-warning edit-update-icon"><Edit/></Col>
                                <Col className="text-danger edit-update-icon"><Trash2/></Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col xs={10}>3. Book3</Col>
                                <Col className="text-warning "><Edit className="edit-update-icon"/></Col>
                                <Col className="text-danger"><Trash2 className="edit-update-icon"/></Col>
                            </Row>
                        </li>
                    </ul>
                </div>

                <div className='add-column mt-3'>
                    <Plus className="add-icon"/>
                    <p className="add-link">Add Book</p>
                </div>

                <div className="mt-4 m-lg-3">
                    <Row>
                        <Col xs={8} className="form-title">Create Book</Col>
                        <Col className=" mt-2"><XCircle className="form-close-btn"/></Col>
                    </Row>
                    <Row>
                        <Col xs={8} className="input-row">
                            <div>
                                <div className="input-label">
                                    Title of the book
                                </div>
                                <InputGroup size="sm" className="mb-3">
                                    <FormControl className="input" aria-label="Small"
                                                 aria-describedby="inputGroup-sizing-sm"/>
                                </InputGroup>
                            </div>
                            <div>
                                <div className="input-label">
                                    ISBN
                                </div>
                                <InputGroup size="sm" className="mb-3">
                                    <FormControl className="input" aria-label="Small"
                                                 aria-describedby="inputGroup-sizing-sm"/>
                                </InputGroup>
                            </div>
                            <div>
                                <div className="input-label">
                                    Author
                                </div>
                                <InputGroup size="sm" className="mb-3">
                                    <FormControl className="input" aria-label="Small"
                                                 aria-describedby="inputGroup-sizing-sm"/>
                                </InputGroup>
                            </div>
                            <Button className="form-btn" variant="primary">Create</Button>{' '}
                        </Col>
                    </Row>
                </div>

            </Row>
        </Container>

    );
}
