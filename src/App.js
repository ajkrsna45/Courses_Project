// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Header from "./Components/Header";
import {Button, Col, Container, Row} from 'reactstrap';
import {ToastContainer ,toast} from 'react-toastify';
import Home from "./Components/Home";
import Courses from "./Components/Courses";
import Allcourses from "./Components/Allcourses";
import Add from "./Components/Add";
import Menus from "./Components/Menus";
import {BrowserRouter as Router,Route} from "react-router-dom"




function App() {

const btnHandle=()=>{
  // toast("this is the first message");
  toast("Done",{position:"top-center"});
}

  return (
   
    <div className="App">
       <Router>
       <ToastContainer/>
      <Header/>
      <br></br>
     
      {/* <Home/> */}
      <Container my-5>
        <Row my-5>
          <Col md={4}>
           <Menus/>
          </Col>
          <Col md={8}>
{/* <br></br> */}
<br></br>
<Route path="/" component={Home} exact/>
<Route path="/add-courses" component={Add} exact/>
<Route path="/view-courses" component={Allcourses} exact/>
           {/* <Home/> */}
          </Col>
        </Row>
      </Container>
{/* <h1>Hello Rajan!!</h1>
<p>Welcome to this wonderfull Course Project</p>
<p>Here We Are Going to make a single page website which will describe about the different-different courses available</p> */}
{/* <Header/> */}
{/* <hr/>
<Header name="Ajay"/>
<hr/>
<Header name="Rajan"/>
<hr/>
<Header name="Krishna" title="first card"/> */}

{/* <h1>this is bootstrap button Components</h1>
<Button color="warning" outline onClick={btnHandle}>First React Button</Button> */}



{/* <Courses course={{title:"java"},{description:"Haeeleee"}}/> */}

<br></br>
{/* <Allcourses/> */}
{/* <Add/> */}
</Router>
    </div>
    
  );
}

export default App;
