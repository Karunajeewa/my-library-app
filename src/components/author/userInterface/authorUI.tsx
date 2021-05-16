import * as React from 'react';
import {Row, Col, Container, Form, Button, InputGroup, FormControl,Alert} from 'react-bootstrap';
import '../../../styles/main.sass';
import {Plus, Edit, Trash2, XCircle} from 'react-feather';
import {Authors} from "../authors";
import swal from 'sweetalert';

export const AuthorUi : React.FunctionComponent<Authors> = ({AuthorsList}:Authors) => {

const [show, setShow] = React.useState(false);
const [authors, setAuthors] = React.useState(AuthorsList);
const [objectIdx,setObjectIdx] = React.useState<any>(null);
const [enterInput, setEnterInput] = React.useState<any>('');
const [isCloseForm, setIsCloseForm] = React.useState(true);
const [error, setError] = React.useState(false);

    /** delete Author List */
    const deleteAuthor = async() =>{

        const authorsTep = authors.slice();
        authorsTep.splice(objectIdx,1);
        setAuthors(authorsTep)
        setShow(false)
        await swal("Deleted!", "", "success");
        setObjectIdx(null)

    }

    /** update Author List*/
    const updateAuthor = async () => {

        let authorsTemp = authors.slice();
        if(authorsTemp[objectIdx] !== enterInput ){
            setError(false)
            authorsTemp[objectIdx] = enterInput;
            setAuthors(authorsTemp)
            setEnterInput('');
            setObjectIdx(null);
            await swal("Updated!", "", "success");
            setIsCloseForm(!isCloseForm);

        }else{
            await swal("This Author Already Exist!");

        }


    }

    /** create Author List*/
    const createAuthor = async() =>{

        let authorsTemp = authors.slice();
        if(!authorsTemp.includes(enterInput)){
            setError(false)
            authorsTemp.push(enterInput)
            setAuthors(authorsTemp)
            setEnterInput('');
            await swal("Successful!", "Author created!", "success");
            setIsCloseForm(!isCloseForm);

        }else {
            await swal("This Author Already Exist!");
        }
    }
    const handleSubmit = (event:any) => {
        event.preventDefault();
        event.stopPropagation();
        enterInput !== '' ? ( objectIdx !== null ? updateAuthor() : createAuthor() ) : setError(true)
    };

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
                        <ul className={"books-list mt-4"} style={{width:'109%'}}>
                            {authors.map((author, index) => {
                                return (

                                    <li key ={index}>
                                        {show && objectIdx === index ?

                                            <Alert variant="warning">
                                                <Row>

                                                    <Col xs={9}>
                                                        <label> Do you want to
                                                            delete {author} ? </label>
                                                    </Col>
                                                    <Col>
                                                        <Button size={'sm'} variant={'primary'}
                                                                onClick={() => { setObjectIdx(null); setShow(false);}}>No</Button>
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
                                                    <label >{index + 1}. {author}</label>
                                                </Col>
                                                <Col>
                                                    <Edit className={'text-warning edit-update-icon'} onClick={() => {
                                                        setEnterInput(author);
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
                        <Plus className="add-icon" onClick={() => { setIsCloseForm(false); setEnterInput('') ; setObjectIdx(null);}}/>
                        <p className="add-link" >Add Author</p>
                    </div>
                </Row>

                { !isCloseForm &&
                <Row className={'mt-5'}>

                        <Col xs={8} md={8} >
                            <label id={'l3'}>{objectIdx !== null ? 'Update Author' : 'Create Author'}</label>
                        </Col>
                        <Col className={'inline'}>
                            <XCircle className="form-close-btn"
                                     onClick={()=>{ setIsCloseForm(!isCloseForm); setEnterInput(''); setObjectIdx(null); setError(false)}} />
                        </Col>

                </Row>
                }

                { !isCloseForm &&
                <Row>

                     <Col xs={8} className={'form-row'} >
                          <Form onSubmit={handleSubmit}>
                                <Form.Label className={'input-label mb-0'} >Name of Author</Form.Label>

                                <InputGroup size="sm" className="mb-4">
                                    <FormControl className="input" aria-label="Small"
                                                 value={enterInput}
                                                 onChange={(e)=> setEnterInput(e.target.value) }

                                                 aria-describedby="inputGroup-sizing-sm"
                                                 style={{borderColor:error && enterInput === '' ? 'red' : '#989898'}}
                                    />
                                </InputGroup>
                              {error && enterInput === ''  && <Form.Label className={'input-label mt-0'} style={{color:'red'}} >Please Enter Data Here!</Form.Label>}
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