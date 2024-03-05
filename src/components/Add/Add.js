import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import Employees from '../Employees/Employees';
import {v4 as uuid} from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

const Add = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    let history = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();

        let uniquID = ids.slice(0,8);

        let a=name,
        b = age;

        Employees.push({id : uniquID, name: a, age: b});

        history('/')
    }


  return (
    <div>
      <Form className='d-grid gap-2' style={{margin:"15rem"}}>
        <Form.Group className='mb-3' controlId='forName'>
            <Form.Control type='text' placeholder='Enter Name' required onChange={(e)=>setName(e.target.value)} >
            </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='forAge'>
            <Form.Control type='text' placeholder='Enter Age' required onChange={(e)=>setAge(e.target.value)} >
            </Form.Control>
        </Form.Group>
        <Button onClick={(e)=>handelSubmit(e)} type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default Add
