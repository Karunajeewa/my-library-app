import React from 'react';
import {XCircle} from 'react-feather';
import {Button, Row, Col, InputGroup, FormControl, Form} from 'react-bootstrap';

export interface Props  {
    showForm: Boolean ;
    onClick: (prop:string) => void;
    onChangeInput: (input:string, key:string) => void;
    enterInput: {bookName:String,price:String,author:String} ;
    error: boolean;
}

const CreateBook:React.FC<Props> = (props:Props) => {
let {showForm, onClick,onChangeInput,enterInput,error} = props;

console.log(error && enterInput.bookName === '',"hhhhh")
      return showForm && (
        <div className="mt-4 m-lg-3">
            <Row>
                <Col xs={8} className="form-title">Create Book</Col>
                <Col className=" mt-2"><XCircle onClick={() => onClick('close')} className="form-close-btn"/></Col>
            </Row>
            <Row>
                <Col xs={8} className="input-row">
                    <Form>

                            <Form.Label className={'input-label mb-0'}>Title of the Book</Form.Label>
                            <InputGroup size="sm" className="mb-3">
                                <FormControl className="input" aria-label="Small"
                                          //   value = {enterInput.bookName}
                                             key={'bookName'}
                                             onChange={(e)=> onChangeInput(e.target.value, 'bookName')}
                                             aria-describedby="inputGroup-sizing-sm"/>
                            </InputGroup>
                            {error && enterInput.bookName === ''   &&  <Form.Label className={'input-label'} style={{color:'red'}}>
                                Enter Book  Name Here
                            </Form.Label>}

                            <Form.Label className={'input-label mb-0'}>Price</Form.Label>
                            <InputGroup size="sm" className="mb-3">
                                <FormControl className="input" aria-label="Small"
                                           //  value = {enterInput.price}
                                             onChange={(e)=> onChangeInput(e.target.value, 'price')}
                                             aria-describedby="inputGroup-sizing-sm"/>
                            </InputGroup>
                            { error && enterInput.price === '' &&   <Form.Label className={'input-label'} style={{color:'red'}}>
                                Enter price Here
                            </Form.Label>}

                            <Form.Label className={'input-label mb-0'}>Author</Form.Label>
                            <InputGroup size="sm" className="mb-3">
                                <select className="input">
                                    <option>Author 1</option>
                                    <option>Author 2</option>
                                    <option>Author 3</option>

                                </select>
                            </InputGroup>
                            { enterInput.author === '' && error &&  <Form.Label className={'input-label'} style={{color:'red'}}>
                                Select Author Here
                            </Form.Label>}

                        <Button className="form-btn" variant="primary"
                                onClick={() => onClick('create')}>
                            Create
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );



}

export default CreateBook;