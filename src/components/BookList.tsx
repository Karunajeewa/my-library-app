import {Col, Row} from "react-bootstrap";
import {Edit, Trash2} from "react-feather";
import CreateBook from "./CreateBook";
import React, {useState} from "react";
import UpdateBook from "./UpdateBook";

type Props = {
    showForm: Boolean;
    onClick: () => void;
}

const BookList = () => {

    const [showForm, setShowForm] = useState(false);
    const handleShowForm = () => setShowForm(true);
    const handleHideForm = () => setShowForm(false);

    return (
        <div>
            <ul className="books-list">
                <li>
                    <Row>
                        <Col xs={10}>1. Book1</Col>
                        <Col className="text-warning edit-update-icon" onClick={handleShowForm}><Edit/></Col>
                        <Col className="text-danger edit-update-icon"><Trash2/></Col>
                    </Row>
                </li>
                <li>
                    <Row>
                        <Col xs={10}>2. Book2</Col>
                        <Col className="text-warning edit-update-icon" onClick={handleShowForm}><Edit/></Col>
                        <Col className="text-danger edit-update-icon"><Trash2/></Col>
                    </Row>
                </li>
                <li>
                    <Row>
                        <Col xs={10}>3. Book3</Col>
                        <Col className="text-warning edit-update-icon" onClick={handleShowForm}><Edit/></Col>
                        <Col className="text-danger"><Trash2 className="edit-update-icon"/></Col>
                    </Row>
                </li>
                <UpdateBook showForm={showForm} onClick={handleHideForm}/>
            </ul>
        </div>
    );
}

export default BookList;
