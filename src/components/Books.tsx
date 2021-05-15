import React, {useState} from 'react';
import {Edit, Plus, Trash2} from 'react-feather';
import {Container, Row, Col} from 'react-bootstrap';
import CreateBook from "./CreateBook";
import BookList from "./BookList";
import swal from "sweetalert";

type Props = {
    showForm: Boolean;
    onClick: () => void;
}

export const Books = () => {
    const [books, setBooks] = React.useState([
        {name: 'bb 1 name', id: 0},
        {name: 'b 2 name', id: 1},
        {name: 'b 3 name', id: 2}
    ]);
    const [showForm, setShowForm] = useState(false);
    const handleShowForm = () => setShowForm(true);
    const handleHideForm = () => setShowForm(false);

    const [objectIdx,setObjectIdx] = React.useState<any>(null);
    const [enterInput, setEnterInput] = React.useState<any>('');
    const [isCloseForm, setIsCloseForm] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [show, setShow] = React.useState(false);

    const deleteBook = async() =>{
        let authorsTep = books.slice();
        authorsTep.splice(objectIdx,1);
        setBooks(authorsTep)
        await swal("Deleted!", "", "success");
        setObjectIdx(null)
        setShow(false)
    }


    return (
        <Container>
            <Row>
                <Col>
                    <h1>Books</h1>
                </Col>
            </Row>
            {books.length === 0 &&
            <Row>
                <Col>
                    <p className="empty-list"> No books listed here </p>
                </Col>
            </Row>
            }
            {books.length !== 0 &&
            <Row>
                {/*<BookList/>*/}
                <div>
                    <ul className="books-list">
                        {books.map((bookItem, index) => {
                            return (
                                <li>
                                    <Row>
                                        <Col xs={10}>{index + 1}. {bookItem.name}</Col>
                                        <Col className="text-warning edit-update-icon"><Edit/></Col>
                                        <Col className="text-danger edit-update-icon"><Trash2 onClick={() => deleteBook()}/></Col>
                                    </Row>
                                </li>
                            )
                        })}

                    </ul>
                </div>
                <div className='add-column mt-3' onClick={handleShowForm}>
                    <Plus className="add-icon"/>
                    <p className="add-link">Add Book</p>
                </div>
                <CreateBook showForm={showForm} onClick={handleHideForm}/>
            </Row>
            }
        </Container>
    );
}
