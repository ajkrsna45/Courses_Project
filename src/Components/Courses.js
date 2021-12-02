import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
  } from 'reactstrap';
  

const Courses=({course})=>{
    // const deleteCourse=()

        return (
            <div>
                <Card className="text-center">
                    <CardBody>
                        <CardTitle tag="h5" className="font-weight-bold">{course.title}</CardTitle>
                        <CardText>{course.description}</CardText>
                        <Container className="text-center">
                            <Button color="danger"
                           >Delete</Button>
                          
                            {/* <&nbsp/> */}
                            <Button color="warning">Upload</Button>
                        </Container>
                    </CardBody>
                </Card>
            </div>
        )
    }


export default Courses
