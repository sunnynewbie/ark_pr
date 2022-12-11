import React, { Fragment } from 'react'
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar'
import { Toolbar, Tabs, Tab, Button } from '@mui/material';
import { Typography } from '@mui/material';


var styles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '7em'
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    minWidth: '10',
    marginLeft: '25px',
    textTransform:'none'
  },
  button:{
    textTransform:'none',
    borderRadius:'50px',
    marginLeft:'50px',
    marginRight:'25px',
    fontSize:'1rm',
    height:'45px'
  }
}))
function Header() {

  const classes = styles()
  return (
    <Fragment>
      <AppBar position='fixed'>
        <Toolbar disableGutters>
          <Typography variant='h3'  >
            Arc developement</Typography>
          <Tabs className={classes.tabContainer}>
            <Tab className={classes.tab} label='Home'></Tab>
            <Tab className={classes.tab}  label='Services'></Tab>
            <Tab className={classes.tab}  label='The revolutions'></Tab>
            <Tab className={classes.tab}  label='About us'></Tab>
            <Tab className={classes.tab}  label='Contact us'></Tab>
          </Tabs>
          <Button variant='contained' className={classes.button} color='secondary'>
            Free Estimate
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>

  )
}

export default Header