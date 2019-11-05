import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './common/Header'
import Card from './components/card/ConfCard'
import './App.css';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme => ({
  grid: {
    "padding": "20px",
    "margin-left": "0.5%",
    "margin-right": "0.5%",
    //transform: 'translateZ(0)',
  },
  gridCard: { 
    '@media (min-width: 1200px)': { 

      'flex-grow': '0',
      'max-width': '25%',
      'flex-basis': '25%',
    },

    '@media (min-width: 960px) and (max-width:1200px)': { 
      'flex-grow': '0',
      'max-width': '33%',
      'flex-basis': '33%',
    },
    // height:'550px'
  },

}))

const URL = 'https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences'
class App extends Component {
  constructor(){
    super()
    this.state = {
      data:[]
    }
  }
  componentDidMount(){
    let data = []
    let xhr = new XMLHttpRequest()
    let that = this
    xhr.addEventListener("readystatechange",function(){
      if(xhr.readyState === 4 && xhr.status === 200){
        let conferenceData = JSON.parse(xhr.responseText).paid
        let freeConfData = JSON.parse(xhr.responseText).free
        conferenceData = conferenceData.concat(freeConfData)
        that.setState({
          ...that.state,
          data:conferenceData,
        })
      }
    })
    xhr.open("GET",URL)
    xhr.send(data)
  }
  render() {
    const { classes } = this.props
    return (
      <div>
        <Header />
        <div className="flex-container">
          <Grid container spacing={3} wrap="wrap" alignContent="center" className={classes.grid}>
            {this.state.data !== null ? this.state.data.map((conference,index) => (
            <Grid key={conference.conference_id} item xs={12} sm={6} md={3} className={classes.gridCard}>
              <Card style={{height:'550px'}}
                className={classes.card}
                heading={conference.confName}
                image={conference.imageURL}
                register={conference.confRegUrl}
                entryType={conference.entryType}
                date={conference.confStartDate}
                venue={conference.venue}
              />
            </Grid>
            ))
            :""
            }
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App);
