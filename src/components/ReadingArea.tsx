import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { Books } from './Books';
import {AuthorUi} from "./author/userInterface/authorUI";
const ReadingArea = () => {
    return (
        <div>
            <Row className="reading-area">
                <Col >
                    <Books />
                </Col>
                <Col>
                    <AuthorUi AuthorsList={[]} />
                </Col>
            </Row>
        </div>

    );
}

export default ReadingArea;
