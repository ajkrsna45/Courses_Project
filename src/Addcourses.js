import { Button } from 'bootstrap'
import React, { Component } from 'react'
import { Fragment } from 'react'
import { Container, Form,Button, FormGroup } from 'reactstrap'

const Addcourses=()=>{
        return (
            <Fragment>
                <h1 className="text-center my-3">Fill the details of courses</h1>
                <Form>
                    <FormGroup>
                        <Label for="userId">CourseId</Label>
                        <Input type="text" placeholder="UserId" name="userid" id="userId"></Input>
                        </FormGroup>
                        <FormGroup>
                        <Label for="CT">CourseId</Label>
                        <Input type="text" placeholder="Course Title" name="course title" id="CT"></Input>
                        </FormGroup>
                        <FormGroup>
                        <Label for="desc">Course Description</Label>
                        <Input type="textarea" style={{height:200}} placeholder="Description" name="desc" id="desc"></Input>
                    </FormGroup>
                    <Container className="text-center">
                    <Button color="success">Add Courses</Button>
                    <Button color="warning ml-2">Clear 
                    Courses</Button>
                </Container>
                </Form>
               
            </Fragment>
        )
    }


export default Addcourses
