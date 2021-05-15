import * as React from 'react';
import {Row, Col, Container, Form, Button, InputGroup, FormControl,Alert} from 'react-bootstrap';
import '../styles/main.sass';
import {Plus, Edit, Trash2, XCircle} from 'react-feather';

export const AuthorUi : React.FunctionComponent = () => {

const [show, setShow] = React.useState(false);
const [authors, setAuthors] = React.useState([{name :'Author 1 name', id:0},{name :'Author 2 name', id:1} , {name :'Author 3 name', id:2}]);
const [objectIdx,setObjectIdx] = React.useState<any>(null);
const [enterInput, setEnterInput] = React.useState<any>('');
const [isCloseForm, setIsCloseForm] = React.useState(true);

    /** delete Author List */
    const deleteAuthor = () =>{
        let authorsTep = authors.slice();
        authorsTep.splice(objectIdx,1);
        setAuthors(authorsTep)
        setObjectIdx(null)
    }

    /** update Author List*/
    const updateAuthor = () =>{
        console.log()
        let authorsTemp = authors.slice();
        authorsTemp[objectIdx].name = enterInput;
        setAuthors(authorsTemp)
        setEnterInput('');
        setObjectIdx(null);
    }

    return(

    <Container >

                <Row >

                    <Col xs={8}>
                        <label id={'a1'} style={{width:'150%'}}>Authors</label>
                    </Col>

                </Row>

                {authors.length === 0 &&
                <Row>
                    <Col>
                        <p className="empty-list mb-0 mt-3"> No authors listed here </p>
                    </Col>
                </Row>
                }

                {authors.length !== 0 &&
                <Row>
                    <div>
                        <ul className={"books-list mt-4"} style={{width:'110%'}}>
                            {authors.map((authorItem, index) => {
                                return (

                                    <li key ={authorItem.id}>
                                        {show && objectIdx === index ?

                                            <Alert variant="warning">
                                                <Row>

                                                    <Col xs={9}>
                                                        <label className={'warn-style'}> Do you want to
                                                            delete {authorItem.name} ? </label>
                                                    </Col>
                                                    <Col>
                                                        <Button size={'sm'} variant={'primary'}
                                                                onClick={() => setObjectIdx(null)}>No</Button>
                                                    </Col>
                                                    <Col>
                                                        <Button size={'sm'} variant={'danger'}
                                                                onClick={() => deleteAuthor()}>Yes</Button>
                                                    </Col>

                                                </Row>
                                            </Alert>
                                            :

                                            <Row>

                                                <Col xs={10}>
                                                    <label >{index + 1}. {authorItem.name}</label>
                                                </Col>
                                                <Col>
                                                    <Edit className={'text-warning edit-update-icon'} onClick={() => {
                                                        setEnterInput(authorItem.name);
                                                        setObjectIdx(index);
                                                        setIsCloseForm(!isCloseForm)
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
                        <Plus className="add-icon" onClick={() => setIsCloseForm(!isCloseForm)}/>
                        <p className="add-link" >Add Author</p>
                    </div>
                </Row>

                { !isCloseForm &&
                <Row>

                        <Col xs={8} md={8} className={'mt-5'}>
                            <label id={'l3'}>{objectIdx !== null ? 'Update Author' : 'Create Author'}</label>
                        </Col>
                        <Col className={'mt-5'}>
                            <XCircle className="form-close-btn" onClick={()=> setIsCloseForm(!isCloseForm)} />
                        </Col>

                </Row>
                }

                { !isCloseForm &&
                <Row>

                     <Col xs={8} className={'form-row'} >
                          <Form>
                                <Form.Label className={'input-label mb-0'} >Name of Author</Form.Label>
                                <InputGroup size="sm" className="mb-4">
                                    <FormControl className="input" aria-label="Small"
                                                 placeholder={enterInput !== '' ? enterInput : "authorName"}
                                                 onChange={(e)=> setEnterInput(e.target.value)}
                                                 aria-describedby="inputGroup-sizing-sm"
                                    />
                                </InputGroup>
                          </Form>
                          <Button className="form-btn" variant="primary" onClick={()=> enterInput !== '' && updateAuthor()}>Create</Button>
                     </Col>

                </Row>
                }

    </Container>

    )
}