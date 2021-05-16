import React from 'react';
import {XCircle} from 'react-feather';
import {Button, Row, Col, InputGroup, FormControl} from 'react-bootstrap';


type Props = {
    showForm: Boolean;
    onClick: (prop:string) => void;
    onChangeInput: (input:string, key:string) => void;
}

const CreateBook: React.FC<Props> = ({showForm, onClick,onChangeInput}) => {


    const form = (
        <div className="mt-4 m-lg-3">
            <Row>
                <Col xs={8} className="form-title">Create Book</Col>
                <Col className=" mt-2"><XCircle onClick={() => onClick('close')} className="form-close-btn"/></Col>
            </Row>
            <Row>
                <Col xs={8} className="input-row">
                    <form>
                        <div>
                            <div className="input-label">
                                Title of the book
                            </div>
                            <InputGroup size="sm" className="mb-3">
                                <FormControl className="input" aria-label="Small"
                                             onChange={(e)=> onChangeInput(e.target.value, 'bookName')}
                                             aria-describedby="inputGroup-sizing-sm"/>
                            </InputGroup>
                        </div>
                        <div>
                            <div className="input-label">
                                ISBN
                            </div>
                            <InputGroup size="sm" className="mb-3">
                                <FormControl className="input" aria-label="Small"
                                             onChange={(e)=> onChangeInput(e.target.value, 'price')}
                                             aria-describedby="inputGroup-sizing-sm"/>
                            </InputGroup>
                        </div>
                        <div>
                            <div className="input-label">
                                Author
                            </div>
                            <InputGroup size="sm" className="mb-3">
                                <select className="input">
                                    <option>Author 1</option>
                                    <option>Author 2</option>
                                    <option>Author 3</option>

                                </select>
                            </InputGroup>
                        </div>
                        <Button className="form-btn" variant="primary" onClick={() => onClick('create')}>Create</Button>
                    </form>
                </Col>
            </Row>
        </div>
    );

    return (
        <div>
            {showForm ? form : null}
        </div>
    );

}

export default CreateBook;