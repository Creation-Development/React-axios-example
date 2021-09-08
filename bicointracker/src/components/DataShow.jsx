import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import open from '../assets/svgs/open.svg'
import high from '../assets/svgs/high.svg'
import low from '../assets/svgs/low.svg'
import close from '../assets/svgs/close.svg'
import dollar from '../assets/svgs/dollar.svg'
import note from '../assets/svgs/note.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        paddingBlock: 20,
        paddingInlineStart: 20
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 100,
        height: 100,
        marginLeft: 5
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function MediaControlCard(props) {
    const classes = useStyles();
    const theme = useTheme();
    // console.log(props.date);
    // console.log(props.coin);
    return (
        <div className="row container my-4">
            <div className="col-3 mx-2 my-2">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <h5 className="text-success">Open ({props.coin})</h5>
                            {
                                props.coin == "CNY" ?
                                    <h6 className="text-success">{props.date[`1a. open (CNY)`].slice(0,10)}</h6>
                                    :
                                    <h6 className="text-success">{props.date[`1b. open (USD)`].slice(0,10)}</h6>
                            }
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={open}
                        title="Open"
                    />
                </Card>
            </div>
            <div className="col-3 mx-2 my-2">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <h5 className="text-success">High ({props.coin})</h5>
                            {
                                props.coin == "CNY" ?
                                    <h6 className="text-success">{props.date[`2a. high (CNY)`].slice(0,10)}</h6>
                                    :
                                    <h6 className="text-success">{props.date[`2b. high (USD)`].slice(0,10)}</h6>
                            }
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={high}
                        title="High"
                    />
                </Card>
            </div>
            <div className="col-3 mx-2 my-2">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <h5 className="text-danger">Low ({props.coin})</h5>
                            {
                                props.coin == "CNY" ?
                                    <h6 className="text-danger">{props.date[`3a. low (CNY)`].slice(0,10)}</h6>
                                    :
                                    <h6 className="text-danger">{props.date[`3b. low (USD)`].slice(0,10)}</h6>
                            }
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={low}
                        title="Low"
                    />
                </Card>
            </div>
            <div className="col-3 mx-2 my-2">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <h5 className="text-danger">Close ({props.coin})</h5>
                            {
                                props.coin == "CNY" ?
                                    <h6 className="text-danger">{props.date[`4a. close (CNY)`].slice(0,10)}</h6>
                                    :
                                    <h6 className="text-danger">{props.date[`4b. close (USD)`].slice(0,10)}</h6>
                            }
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={close}
                        title="Close"
                    />
                </Card>
            </div>
            <div className="col-3 mx-2 my-2">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <h5 className="text-primary">Volume</h5>
                            <h6 className="text-primary">{props.date[`5. volume`].slice(0,10)}</h6>
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={note}
                        title="Volume"
                    />
                </Card>
            </div>
            <div className="col-3 mx-2 my-2">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <h5 className="text-primary">Market Cap</h5>
                            <h6 className="text-primary">{props.date[`6. market cap (USD)`].slice(0,10)}</h6>
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={dollar}
                        title="Market Cap"
                    />
                </Card>
            </div>
        </div>
    );
}
