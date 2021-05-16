import React, {useState} from 'react';
import {Edit, Plus, Trash2} from 'react-feather';
import {Container, Row, Col, Alert, Button} from 'react-bootstrap';
import CreateBook from "./CreateBook";

import swal from "sweetalert";

export const Books = () => {
    const [books, setBooks] = React.useState([
        {bookName: 'bb 1 name', id: 0, author:'author1' ,price:'100' },
        {bookName: 'b 2 name', id: 1, author:'author1', price:'200'},
        {bookName: 'b 3 name', id: 2, author:'author1', price: '300'},
    ]);
    const [showForm, setShowForm] = useState(false);
    const handleShowForm = () => setShowForm(true);
    const  handleHideForm = () => setShowForm(false);

    const [objectIdx,setObjectIdx] = React.useState<any>(null);
    const [enterInput, setEnterInput] = React.useState<any>({});
    const [show, setShow] = React.useState(false);

    const deleteBook = async() =>{
        let authorsTep = books.slice();
        authorsTep.splice(objectIdx,1);
        setBooks(authorsTep)
        setShow(!show)
        await swal("Deleted!", "", "success");
        setObjectIdx(null)

    }

    const handleInput = (input:string, key:string ) => {

        let getInput = enterInput ;
        getInput[key] =input
        setEnterInput(getInput);

    }

    const handleSubmit = (prop:string) => {

        if(prop === 'create') {
            let getInput = enterInput;
            getInput['id'] = books[books.length - 1].id + 1;
            getInput['author'] = 'author1';

            let getBooks = books;
            getBooks.push(getInput)
            setBooks(getBooks);
            setEnterInput({})
        }else{
            handleHideForm()
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <label id={'a1'} >Books</label>
                </Col>
            </Row>
            {books.length === 0 &&
            <Row>
                <Col>
                    <p className="empty-list mb-0 mt-3"> No books listed here </p>
                </Col>
            </Row>
            }
            {books.length !== 0 &&
            <Row>
                {/*<BookList/>*/}
                <div>
                    <ul className="books-list mt-4">
                        {books.map((bookItem, index) => {
                            return (
                                <li key = {index}>
                                    {show && objectIdx === index ?

                                        <Alert variant="warning">
                                            <Row>

                                                <Col xs={9}>
                                                    <label> Do you want to
                                                        delete {bookItem.bookName} ? </label>
                                                </Col>
                                                <Col>
                                                    <Button size={'sm'} variant={'primary'}
                                                            onClick={() => {
                                                                setObjectIdx(null);
                                                                setShow(false);
                                                            }}>No</Button>
                                                </Col>
                                                <Col>
                                                    <Button size={'sm'} variant={'danger'}
                                                            onClick={() => deleteBook()}>Yes</Button>
                                                </Col>

                                            </Row>
                                        </Alert>
                                        :
                                        <Row>
                                            <Col xs={10}>{index + 1}. {bookItem.bookName}</Col>
                                            <Col className="text-warning edit-update-icon"><Edit/></Col>
                                            <Col className="text-danger edit-update-icon"><Trash2
                                                onClick={() => {
                                                    setShow(!show);
                                                    setObjectIdx(index);
                                                }}/></Col>
                                        </Row>
                                         }
                                </li>
                            )
                        })}

                    </ul>
                </div>
                <div className='add-column mt-3' onClick={handleShowForm}>
                    <Plus className="add-icon"/>
                    <p className="add-link">Add Book</p>
                </div>
                <CreateBook showForm={showForm} onClick={handleSubmit}  onChangeInput = {handleInput}/>
            </Row>
            }
        </Container>
    );
}
