import React from 'react'
import {Jumbotron ,Container,Button} from "reactstrap"

function Home() {
    return (
        <Jumbotron className=" text-center">
        <div>
            {/* <Container></Container> */}
            <h2 my-5>LetsCodeWith Ajay</h2>
            <p className="display-0">Welcome to learn code in very simple effecient manner</p>
            <Container>
                <Button color="primary my-0" outline>Start Using

                </Button>
            </Container>
        </div>
        </Jumbotron>
        
    )
}

export default Home
