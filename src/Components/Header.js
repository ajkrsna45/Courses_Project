import React, { Component } from 'react'
import { Card, CardBody, Container } from 'reactstrap'
function Header({name,title}){


        return (
            // <div style={{background:"red", padding:20,width:200}}>
            <div>
                {/* <h1 style={{background:"red"}}>Hello in this website of courses _</h1>
                <h1>Hello ! {name}</h1>
                <h1>Hello ! {title}</h1>
                 */}

<Container>
<Card className="bg-warning my-1">
                     <CardBody>
                         <h1 className="text-center my-2">Welcome to Courses Application</h1>
                     </CardBody>
                 </Card>
</Container>
                 
            </div>
        )
    
}

export default Header
