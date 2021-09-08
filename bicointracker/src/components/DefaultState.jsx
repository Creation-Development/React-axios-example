import React, { useState } from 'react';
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
        marginLeft: 150
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(3),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function DefaultState(props) {
    const classes = useStyles();
    const theme = useTheme();
    var date = props.data[`${props.date.slice(0, 10)}`]
    var coin = ""
    return (
        <div className="row container my-4">
            <div className="col-5 mx-2 my-2 text-center">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <h5 className="text-success">Open (CNY)</h5>
                            <h6 className="text-success">{date[`1a. open (CNY)`].slice(0, 10)}</h6>

                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={open}
                        title="Open"
                    />
                </Card>
            </div>
            <div className="col-5 mx-2 my-2 text-center">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <h5 className="text-success">High (CNY)</h5>
                            <h6 className="text-success">{date[`2a. high (CNY)`].slice(0, 10)}</h6>
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={high}
                        title="High"
                    />
                </Card>
            </div>
            <div className="col-5 mx-2 my-2 text-center">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <h5 className="text-danger">Low (CNY)</h5>
                            <h6 className="text-danger">{date[`3a. low (CNY)`].slice(0, 10)}</h6>
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={low}
                        title="Low"
                    />
                </Card>
            </div>
            <div className="col-5 mx-2 my-2 text-center">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <h5 className="text-danger">Close (CNY)</h5>
                            <h6 className="text-danger">{date[`4a. close (CNY)`].slice(0, 10)}</h6>
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={close}
                        title="Close"
                    />
                </Card>
            </div>
            <div className="col-5 mx-2 my-2 text-center">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <h5 className="text-success">Open (USD)</h5>
                            <h6 className="text-success">{date[`1b. open (USD)`].slice(0, 10)}</h6>

                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={open}
                        title="Open"
                    />
                </Card>
            </div>
            <div className="col-5 mx-2 my-2 text-center">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <h5 className="text-success">High (USD)</h5>
                            <h6 className="text-success">{date[`2b. high (USD)`].slice(0, 10)}</h6>
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={high}
                        title="High"
                    />
                </Card>
            </div>
            <div className="col-5 mx-2 my-2 text-center">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <h5 className="text-danger">Low (USD)</h5>
                            <h6 className="text-danger">{date[`3b. low (USD)`].slice(0, 10)}</h6>
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={low}
                        title="Low"
                    />
                </Card>
            </div>
            <div className="col-5 mx-2 my-2 text-center">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <h5 className="text-danger">Close (USD)</h5>
                            <h6 className="text-danger">{date[`4b. close (USD)`].slice(0, 10)}</h6>
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={close}
                        title="Close"
                    />
                </Card>
            </div>
            <div className="col-5 mx-2 my-2 text-center">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <h5 className="text-primary">Volume</h5>
                            <h6 className="text-primary">{date[`5. volume`].slice(0, 10)}</h6>
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={note}
                        title="Volume"
                    />
                </Card>
            </div>
            <div className="col-5 mx-2 my-2 text-center">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <h5 className="text-primary">Market Cap</h5>
                            <h6 className="text-primary">{date[`6. market cap (USD)`].slice(0, 10)}</h6>
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
