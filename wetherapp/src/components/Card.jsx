import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor:"rgb(100 137 205)",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    marginLeft:80,
    width: 180,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  temp: {
    display: 'grid',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
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

  return (

<div className="row">
    <div className="col-4"></div>
    <div className="col-4">
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          {props.citydata.location.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          {props.citydata.location.region}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          {props.citydata.location.tz_id}
          </Typography>
        </CardContent>
        <div className={classes.temp}>
          <Typography variant="subtitle1" color="textSecondary">
          Temprature In C :{props.citydata.current.temp_c}
          </Typography>
          
          <Typography variant="subtitle1" color="textSecondary">
          Temprature In F :{props.citydata.current.temp_f}
          </Typography>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.citydata.current.condition.icon}
        title={props.citydata.location.name}
      />
    </Card>
    </div>
    <div className="col-4"></div>
</div>


    
  );
}
