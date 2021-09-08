import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

const Header = (props) => {
    const [name, setname] = useState("");
    const [url, seturl] = useState("");
    // console.log(name);
    const handlestate = () => {
        setname(`${item.name}`)
        seturl(`${item.url}`)
    }
    return (
        <>
            <div className="row container" style={{marginLeft:"6%"}}>
                {
                    props.data.map((item) => (
                        <div className="col-3">
                            <Card className="my-4">
                                <h4 className="text-center py-4">{item.name.toUpperCase()}</h4>
                                <button onClick={()=>handlestate} className="btn">Details</button>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Header
