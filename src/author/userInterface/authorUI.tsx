import * as React from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import '../styles/main.sass';
import {Plus, Delete, Edit, Circle, X} from 'react-feather';

export const AuthorUi : React.FunctionComponent = () => {
    return(

    <Container className={"author"} fluid={true} >
        <label id={'a1'}>Authors</label>
        <Row >
            <Col id={'l1'} md="auto"><span><label id={'t1'}>1. Author 1 name</label><Edit color={'#d3af1c'} size={20} id={'i1'}/><Delete color={'#9c0606'} size={20} id={'i1'}/></span></Col>
            <Col id={'l1'} md="auto"><span><label id={'t1'}>2. Author 2 name</label><Edit color={'#d3af1c'} size={20} id={'i1'}/><Delete color={'#9c0606'} size={20}/></span></Col>
            <Col id={'l1'} md="auto"><span><label id={'t1'}>3. Author 3 name</label><Edit color={'#d3af1c'} size={20} id={'i1'}/><Delete color={'#9c0606'} size={20}/></span></Col>
        </Row>
        <Row>
            <span>
                <Plus id={'i2'} color={'#1b5391'}/>
                <label id={'l2'}>Add Author</label>

            </span>
        </Row>

        <Row id={'r1'}>
            <span>
                <label id={'l3'}>Create Author</label>
                <Circle id={'i4'}/>
                <X id={'i3'}/>
            </span>
        </Row>

        <Form className={'form'}>
            <Col><Form.Label id={'l4'}>Name of Author</Form.Label></Col>
            <Col><Form.Control type="text" placeholder="" size={'lg'} id={'c1'} /></Col>
            <Button variant='primary' id={'b1'} >create</Button>
        </Form>



    </Container>

    )
}