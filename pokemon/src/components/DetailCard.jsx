import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Card } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import beedrill from '../assets/img/beedrill.png'
import blastoise from '../assets/img/blastoise.png'
import bulbasaur from '../assets/img/bulbasaur.png'
import butterfree from '../assets/img/butterfree.png'
import caterpie from '../assets/img/caterpie.png'
import charizard from '../assets/img/charizard.png'
import charmander from '../assets/img/charmander.png'
import charmeleon from '../assets/img/charmeleon.png'
import ivysaur from '../assets/img/ivysaur.png'
import kakuna from '../assets/img/kakuna.png'
import metapod from '../assets/img/metapod.png'
import pidgeot from '../assets/img/pidgeot.png'
import pidgeotto from '../assets/img/pidgeotto.png'
import pisgey from '../assets/img/pisgey.png'
import raticate from '../assets/img/raticate.png'
import rattata from '../assets/img/rattata.png'
import squirtle from '../assets/img/squirtle.png'
import venusaur from '../assets/img/venusaur.png'
import wartortle from '../assets/img/wartortle.png'
import weedle from '../assets/img/weedle.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const DetailCard = (props) => {
    const [chardata, setChardata] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        axios.get(`${props.detials}`)
            .then((res) => {
                setChardata(res.data)
            })
    });

    return (
        <div className="text-white container">
            <Card>
                <div className="text-center">
                    <h3 className="m-4">{props.name.toUpperCase()}</h3>
                    <hr style={{ borderColor: "white", opacity: 1 }} />
                </div>
                {chardata.length === 0 ?
                    <div className="text-center">
                        <CircularProgress color="secondary" />
                    </div> :
                    <div className="row">
                        <div className="col-5 mx-4 my-4">
                            <h5 className="mb-4">{`ID : ${props.id}`}</h5>
                            <div className="d-flex">
                                <div className="part-1">
                                    {
                                        chardata.abilities.map((item) => (
                                            <h5 className="mb-4">{`Ability : ${item.ability.name}`}</h5>
                                        ))
                                    }
                                </div>
                                <div className="part-2 mx-4">
                                    <h5 className="mb-4">{`Height : ${chardata.height}`}</h5>
                                    <h5 className="mb-4">{`Weight : ${chardata.weight}`}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <img src={`../assets/img/${props.name}.png`} alt="" height="100px" width="100px"/>
                        </div>
                    </div>
                }
            </Card>
        </div>
    )
}

export default DetailCard
