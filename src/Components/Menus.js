import React from 'react'
import { ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from "react-router-dom";

// import {BrowserRouter as Router,Route,ListGroupItem} f rom "react-router-dom"

function Menus() {
    return ( 
        <div>
            <ListGroup >
                {/* <ListGroupItem tag="a" href="/" action>Home</ListGroupItem>
                <ListGroupItem tag="a" href="/add-courses" action>Add Course</ListGroupItem>
                <ListGroupItem tag="a" href="/view-courses" action>View Courses</ListGroupItem>
                <ListGroupItem tag="a" href="#!" action>About Us</ListGroupItem>
                <ListGroupItem tag="a" href="#!" action>Contact</ListGroupItem> */}
               
               
                <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/add-courses" action>Add Course</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action>View Courses</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>About Us</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>Contact</Link>

            </ListGroup>
        </div>
    )
}

export default Menus
// alt+click
