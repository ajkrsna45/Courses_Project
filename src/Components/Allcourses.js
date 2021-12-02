import React,{useEffect,useState}from 'react'
import { Container } from 'reactstrap'
import Course from './Courses'
import base_url from '../api/Bootpath'
import axios from 'axios'
import { toast } from 'react-toastify'

function Allcourses(){
    useEffect(() => {
    
        document.title="All Courses|| learn code with Ajay"
        }, [])

        // Function to load server

        const GetAllCoursesFromServer=()=>{
           axios.get(`${base_url}/courses`).then(
               (response)=>{
                   //Success
                //    console.log(response)
                   console.log(response.data)
                   toast.success("Courses has been loaded",{
                       position:"bottom-center"
                   });


               },
               (error)=>{
                //    For Error

                console.log(error)
                toast.error("Something went wrong");
               }
           ) 
        }
        // Calling and loading Courses
        useEffect(() => {
    GetAllCoursesFromServer();
            
            }, [])

        const [courses,setCourses]=useState([
            {
                // Making an array
                title:"Java Course",description:"This is a demo course"},
                {title:"Angular Course",description:"This is a demo course"},
                {title:"Java Script Course",description:"This is a demo course"},
                {title:"Python Course",description:"This is a demo course"
            }

        ])

        return (
            <div>
                <Container >
                <h1>All Courses</h1>
                <p>List of the courses are as follow: </p>
                
            {
                courses.length>0?courses.map((item)=>
                (<Course course={item}/>)):"no Courses"
                // for fetching every course
            }
                </Container>  
                
                
            </div>
        )
    }


export default Allcourses
