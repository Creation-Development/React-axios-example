import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import DetailCard from './DetailCard';

const Header = (props) => {
    const [name, setname] = useState("");
    const [url, seturl] = useState("");
    const [id, setid] = useState('');
    // console.log(props.data);
    // console.log(props.search);
    var result = props.data.filter((item)=>(item.name.includes(props.search)))
    // console.log(result);
    return (
        <>
        
            {url == "" ?
                null
                :
                <DetailCard detials={url} name={name} id={id}/>
            }
            <div className="row container" style={{ marginLeft: "6%" }}>
                {props.search==""?
                    props.data.map((item, index) => (
                        <div className="col-3">
                            <Card className="my-4">
                                <h4 className="text-center py-4">{item.name.toUpperCase()}</h4>
                                <button onClick={() => {setname(item.name); seturl(item.url); setid(index+1)}} className="btn">Details</button>
                            </Card>
                        </div>
                    ))
                    :
                    result.map((item, index) => (
                        <div className="col-3">
                            <Card className="my-4">
                                <h4 className="text-center py-4">{item.name.toUpperCase()}</h4>
                                <button onClick={() => {setname(item.name); seturl(item.url); setid(index+1)}} className="btn">Details</button>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Header
