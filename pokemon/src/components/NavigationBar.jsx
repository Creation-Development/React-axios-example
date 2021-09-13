import React, { useState } from 'react'
import { Button, Form, FormControl, Navbar } from 'react-bootstrap'
import Header from './Header'

const NavigationBar = (props) => {
    const [search, setsearch] = useState("");
    // console.log(search);
    return (
        <div>
            <Navbar className="navi" expand="lg">
                <Navbar.Brand style={{marginLeft:"10%"}} href="#"><img src={`https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png`} alt="" height="50" width="150" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex" style={{marginLeft:"65%"}}>
                        <FormControl
                        onChange={(e)=>setsearch(e.target.value)}
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Header data={props.data} search={search}/>
        </div>
    )
}

export default NavigationBar
