import React, {useState} from 'react';
import {Plus} from 'react-feather';
import {Container, Row, Col} from 'react-bootstrap';
import CreateBook from "./CreateBook";
import BookList from "./BookList";

type Props = {
    showForm: Boolean;
    onClick: () => void;
}

export const Books = () => {

    const [showForm, setShowForm] = useState(false);
    const handleShowForm = () => setShowForm(true);
    const handleHideForm = () => setShowForm(false);

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Books</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="empty-list"> No books listed here </p>
                </Col>
            </Row>
            <Row>
                <BookList/>
                <div className='add-column mt-3' onClick={handleShowForm}>
                    <Plus className="add-icon"/>
                    <p className="add-link">Add Book</p>
                </div>
                <CreateBook showForm={showForm} onClick={handleHideForm}/>
            </Row>
        </Container>
    );
}
