import React from 'react';
import Card from '@material-ui/core/Card';
import { CardMedia, CardActionArea, Button,CardActions, Paper } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import 'font-awesome/css/font-awesome.min.css';

import './ConfCard.css'

const styles = makeStyles({
    media: {
        height: "250px",
    },
    heading:{
        color:"#334e6f",
        paddingBottom:"8px"
        
    },
    body:{
        color:"#757575",
        paddingBottom:"24px",
        fontSize:'14px'

    },
    date:{
        fontWeight:400,
        paddingLeft:'8px',
        fontSize:'14px'
    },
    location:{
        color:"#757575",
        paddingLeft:'8px',
        fontSize:'14px'
    },
    cardContent:{
        marginTop:'-16px',
    },
    registerButton:{
        width:"80%",
        height:"40px",
        fontWeight:400,
        background: 'linear-gradient(180deg, #5D96D7 20%, #5DC5F2 90%)'
    },
    cardActions:{
        justifyContent:"center"
    
    },
    card:{
        height:'100%',
    }
})



function ConfCard(props) {
    const classes = styles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media} image={props.image} />
                <Paper square className="conf-type" elevation={8} style={{backgroundColor:props.entryType === "Paid"?"#FFE662":"#5D96D7"}}>
                    <Typography variant="caption">{props.entryType}</Typography>
                </Paper>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.heading} variant="h6" component="h6">{props.heading}</Typography>
                    <Typography className={classes.body} variant="body1" component="p">This is a FREE meetup. Participants from different experience levels are welcome. The agenda and</Typography>
                    <div className="date-box">
                        <i className="fa fa-calendar" aria-hidden="true" style={{ fontSize: '16px' }}></i>
                        <Typography className={classes.date} variant="body1" component='p'>{props.date}</Typography>
                    </div>
                    <div className="location-box">
                        <i className="fa fa-map-marker" aria-hidden="true" style={{ fontSize: '16px' }} ></i>
                        <Typography className={classes.location} variant="body1" component='p'>{props.venue}</Typography>
                    </div>
                </CardContent>
            </CardActionArea>
            <Divider variant="middle" />
            <CardActions className={classes.cardActions}>
                <Button className={classes.registerButton} variant="contained">Register</Button>
            </CardActions>
        </Card>

    )
}

export default ConfCard;