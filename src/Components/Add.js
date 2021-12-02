import React ,{useEffect,useState} from 'react'
import { Fragment } from 'react';
import { Button, Form, Container, FormGroup, Label, Input, FormText } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Add(){
  useEffect(() => {
    
  document.title="Add Courses"
  }, []);
  const [course ,setCourse]=useState({});
  // form handler function
  const handleForm=(e)=>
{
  console.log(course);

  e.preventDefault();
};

const notify = () => toast.success("Added Successfully!");
    return(
      <Fragment>
        <h1 className="text-center">Full Course Details</h1>
        <Form onSubmit={handleForm}>
        <FormGroup>
          <Label for="userid">UserID</Label>
          <Input type="text"
           name="userid" 
           id="userid"
          onChange={(e)=>{
            setCourse({...course,id:e.target.value});
          }} placeholder="User Id" />
        </FormGroup>
        <FormGroup>
          <Label for="title">Course Title</Label>
          <Input type="text" name="Course title" id="CT"
           onChange={(e)=>{
            setCourse({...course,title: e.target.value});
          }} placeholder="Course Title" />
        </FormGroup>
        <FormGroup>
          <Label for="description">Course Description </Label>
          <Input type="text-area" style={{height:200}} name="CD" id="CD"
           onChange={(e)=>{
            setCourse({...course,description: e.target.value});
          }} placeholder="Course description " />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" onClick={notify} color="success">Add</Button>
          <Button color="warning">Clear</Button>
        </Container>
        </Form>
        
        </Fragment>
    )
}
export default Add