import * as React from 'react';
import {Row, Col, Container, Form, Button, InputGroup, FormControl, Alert} from 'react-bootstrap';
import {Plus, Edit, Trash2, XCircle} from 'react-feather';
import swal from 'sweetalert';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import {Authors} from "./author/authors";
export  interface  Book {

    BookName:String;
    Price:Number;
    Author:String;

}
export interface BookList{
    BooksList:Array<Book>;
    AuthorsList : Array<Authors>;
}


export const Books: React.FunctionComponent <BookList> = ({BooksList,AuthorsList}: BookList) => {

    const [show, setShow] = React.useState(false);
    const [books, setBooks] = React.useState(BooksList);
    const [authors, setAuthors] = React.useState(AuthorsList);
    const [objectIdx, setObjectIdx] = React.useState<any>(null);
    const [enterInput, setEnterInput] = React.useState<any>({BookName: '', Price: '', Author: ''});
    const [isCloseForm, setIsCloseForm] = React.useState(true);
    const [error, setError] = React.useState(false);

    /** delete book List */
    const deleteBook = async () => {
        let authorsTep = books.slice();
        authorsTep.splice(objectIdx, 1);
        setBooks(authorsTep)
        await swal("Deleted!", "", "success");
        setObjectIdx(null)
        setShow(false)
    }

    /** update book List*/
    const updateBook = async () => {

        let authorsTemp = books.slice();
        if (authorsTemp[objectIdx] !== enterInput) {
            setError(false)
            authorsTemp[objectIdx].BookName = enterInput.BookName;
            authorsTemp[objectIdx].Price = enterInput.Price;
            authorsTemp[objectIdx].Author = enterInput.Author;
            setBooks([...authorsTemp])
            setEnterInput('');
            setObjectIdx(null);
            await swal("Updated!", "", "success");
            setIsCloseForm(!isCloseForm);

        } else {
            await swal("This Book Already Exist!");

        }


    }

    /** create book List*/
    const createBook = async () => {

        let authorsTemp = books.slice();
        if (!authorsTemp.includes(enterInput)) {
            setError(false)
            authorsTemp.push(enterInput)
            setBooks(authorsTemp)
            setEnterInput('');
            await swal("Successful!", "Book created!", "success");
            setIsCloseForm(!isCloseForm);

        } else {
            await swal("This Book Already Exist!");
        }
    }

    const handleSubmit = (event:any) => {
        console.log("me")
        event.preventDefault();
        event.stopPropagation();
        !Object.values(enterInput).includes('') ? (objectIdx !== null ? updateBook() : createBook()) : setError(true)
    };
    const handleChange = (option:any) => {
        setEnterInput({
            BookName: enterInput.BookName,
            Price: enterInput.Price,
            Author: option
        });
        console.log(enterInput)
    }

    return (

        <Container>

            <Row>

                <Col xs={8}>
                    <label id={'a1'}>Books</label>
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
                <div>
                    <ul className={"books-list mt-4"} style={{width: '102%'}}>
                        {books.map((book, index) => {
                            return (

                                <li key={index}>
                                    {show && objectIdx === index ?

                                        <Alert variant="warning">
                                            <Row>

                                                <Col xs={9}>
                                                    <label> Do you want to
                                                        delete {book.BookName} ? </label>
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

                                            <Col xs={10}>
                                                <label>{index + 1}. {book.BookName}</label>
                                            </Col>
                                            <Col>
                                                <Edit className={'text-warning edit-update-icon'} onClick={() => {
                                                    setEnterInput(book);
                                                    setObjectIdx(index);
                                                    setIsCloseForm(false)
                                                }}/>
                                            </Col>
                                            <Col>
                                                <Trash2 className={'text-danger edit-update-icon'}
                                                        onClick={() => {
                                                            setShow(!show);
                                                            setObjectIdx(index);
                                                        }}
                                                />
                                            </Col>

                                        </Row>

                                    }
                                </li>
                            )

                        })}
                    </ul>
                </div>
            </Row>
            }

            <Row>
                <div className='add-column mt-3'>
                    <Plus className="add-icon" onClick={() => {
                        setIsCloseForm(false);
                        setEnterInput({BookName: '', Price: '', Author: ''});
                        setObjectIdx(null);
                    }}/>
                    <p className="add-link">Add Book</p>
                </div>
            </Row>

            {!isCloseForm &&
            <Row>

                <Col xs={8} md={8} className={'mt-5'}>
                    <label id={'l3'}>{objectIdx !== null ? 'Update Book' : 'Create Book'}</label>
                </Col>
                <Col className={'inline mt-5'} >
                    <XCircle className="form-close-btn"
                             onClick={() => {
                                 setIsCloseForm(!isCloseForm);
                                 setEnterInput({BookName: '', Price: '', Author: ''});
                                 setObjectIdx(null);
                                 setError(false)
                             }}/>
                </Col>

            </Row>
            }

            {!isCloseForm &&
            <Row>

                <Col xs={8} className={'form-row'}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Label className={'input-label mb-0'}>Title of the Book</Form.Label>

                        <InputGroup size="sm" className="mb-3">
                            <FormControl className="input" aria-label="Small"
                                         value={enterInput.BookName}
                                         onChange={(e) => setEnterInput({
                                             BookName: e.target.value,
                                             Price: enterInput.Price,
                                             Author: enterInput.Author
                                         })}
                                         aria-describedby="inputGroup-sizing-sm"
                                         style={{borderColor: error && enterInput.BookName === '' ? 'red' : '#989898'}}
                            />
                        </InputGroup>
                        {error && enterInput.BookName === '' &&
                        <Form.Label className={'input-label mt-0'} style={{color: 'red'}}>Please Enter Title of the book
                            Here!</Form.Label>}

                        <Form.Label className={'input-label mb-0'}>Price</Form.Label>

                        <InputGroup size="sm" className="mb-3">
                            <FormControl className="input" aria-label="Small"
                                         value={enterInput.Price}
                                         type={'number'}
                                         min={0}
                                         onChange={(e) => setEnterInput({
                                             BookName: enterInput.BookName,
                                             Price: e.target.value,
                                             Author: enterInput.Author
                                         })}
                                         aria-describedby="inputGroup-sizing-sm"
                                         style={{borderColor: error && enterInput.Price === '' ? 'red' : '#989898'}}
                            />
                        </InputGroup>
                        {error && enterInput.Price === '' &&
                        <Form.Label className={'input-label mt-0'} style={{color: 'red'}}>Please Enter Price
                            Here!</Form.Label>}

                        <Form.Label className={'input-label mb-0'}>Author</Form.Label>

                        <InputGroup size="sm" className="mb-3">
                            <Select
                                className="input row-md-12"
                                style={{border: 2, borderStyle: 'solid', borderColor: '#989898'}}
                                aria-describedby="inputGroup-sizing-sm"
                                components={makeAnimated()}
                                onChange={ handleChange}
                                isMulti = {false}
                                isOptionSelected={enterInput.Author}
                                options={[{label: 'Author1', value: 'Author1'}, {label: 'Author2', value: 'Author2'}, {
                                    label: 'Author3',
                                    value: 'Author3'
                                }]}/>
                        </InputGroup>
                        {error && enterInput.Author === '' &&
                        <Form.Label className={'input-label mt-0'} style={{color: 'red'}}>Please Enter Author
                            Here!</Form.Label>}
                    </Form>
                    <Button className="form-btn"
                            variant="primary"
                            onClick={handleSubmit}
                    >
                        {objectIdx !== null ? 'Update' : 'Create'}
                    </Button>

                </Col>

            </Row>
            }

        </Container>

    )
}