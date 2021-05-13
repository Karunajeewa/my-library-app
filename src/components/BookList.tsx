import {Col, Row} from "react-bootstrap";
import {Edit, Trash2} from "react-feather";
import React from "react";

const BookList = () => {
    return (
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
    );
}

export default BookList;
