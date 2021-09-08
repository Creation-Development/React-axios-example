import React from 'react'
import { Button, Form, FormControl, Navbar } from 'react-bootstrap'

const NavigationBar = () => {
    return (
        <div>
            <Navbar className="navi" expand="lg">
                <Navbar.Brand style={{marginLeft:"7%"}} href="#"><img src={`https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png`} alt="" height="50" width="150" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex" style={{marginLeft:"65%"}}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button className="mx-3" variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar
