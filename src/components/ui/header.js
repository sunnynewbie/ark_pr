import React, { useState, Fragment, useEffect } from 'react'
import { makeStyles } from 'tss-react/mui';
import AppBar from '@mui/material/AppBar'
import { MenuItem, Menu, Toolbar, Tabs, Tab, Button } from '@mui/material';
import { Typography } from '@mui/material';
import { common } from '@mui/material/colors';
import { appTheme } from './Theme';



var useStyles = makeStyles()((theme) => {
  return {
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: '3em'
    },
    logo: {
      height: '7em'
    },
    tabContainer: {
      marginLeft: 'auto',
    },
    tab: {
      minWidth: '10',
      marginLeft: '25px',
      textTransform: 'none',
      color: 'white',
      fontWeight: '400',
      '&.Mui-selected': {
        fontWeight: '700',
        color: 'white',
      }
    },
    button: {
      textTransform: 'none',
      borderRadius: '50px',
      marginLeft: '50px',
      marginRight: '25px',
      fontSize: '1rm',
      height: '45px'
    },
    menuPaper: {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      borderRadius: 0,
    },
    menuItem: {
      ...theme.typography.tab,
      opacity: '.7',
      '&:hover': {
        opacity: '1'
      },

    }
  };
});
function Header() {

  const { classes } = useStyles()
  const [value, setValue] = useState(0);
  const [anchorEl, setEnchor] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(0);
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0)
    }
    if (window.location.pathname === "/service" && value !== 1) {
      setValue(1)
    }
    if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2)
    }
    if (window.location.pathname === "/customsoftware" && value !== 1) {
      setValue(2)
      setselectedIndex(0)
    }
    if (window.location.pathname === "/mobileDev" && value !== 1) {
      setValue(2)
      setselectedIndex(1)

    }
    if (window.location.pathname === "/webDev" && value !== 1) {
      setValue(2)
      setselectedIndex(2)
    }
    if (window.location.pathname === "/aboutus" && value !== 3) {
      setValue(3)
    }
    if (window.location.pathname === "/contactus" && value !== 4) {
      setValue(4)
    }

  }, [value])
  const menuList = [{ 'name': 'custom software', "path": "/customsoftware" },
  { "path": "/mobiledev", "name": 'mobile developement' },
  {  "name":'Web development','path':"/webdev"}]
  const handleValue = (e, value) => {
    setValue(value);
  }

  const handleClick = (e) => {
    setEnchor(e.currentTarget);
    setOpen(true);
  }

  const handleClose = (e) => {
    setEnchor(null);
    setOpen(false);
  }

  const handleMenuClick = (e, index) => {

    setselectedIndex(index);
    console.log(index);
    console.log(selectedIndex);

  }
  return (
    <Fragment>
      <AppBar position='fixed'>
        <Toolbar disableGutters>
          <Typography variant='h3'  >
            Arc developement</Typography>
          <Tabs value={value} onChange={handleValue}
            className={classes.tabContainer}>
            <Tab disableRipple className={classes.tab} label='Home' href='/' />
            <Tab disableRipple className={classes.tab} label='Services' href='/service'
              aria-haspopup={anchorEl ? true : undefined}
              aria-owns={anchorEl ? "simple-menu" : undefined}
              onMouseOver={(e) => handleClick(e)}
              onClick={(e) => setValue(1)}
            />
            <Tab disableRipple className={classes.tab} label='The revolutions' href='/revolution' />
            <Tab disableRipple className={classes.tab} label='About us' href='/aboutus' />
            <Tab disableRipple className={classes.tab} label='Contact us' href='/contactus' />

          </Tabs>
          <Button disableRipple variant='contained' className={classes.button} color='secondary'>
            Free Estimate
            <Menu id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              elevation={0}
              classes={{ paper: classes.menuPaper }}
              MenuListProps={{ onMouseLeave: handleClose }}
              onClose={handleClose}>
              {menuList.map((option, index) => (
                <MenuItem key={index} sx={{
                  '&.Mui-selected': {
                    background: "#0A5C9E",
                    color: "white",
                    opacity: "1",
                    fontWeight: "700"
                  }
                }}
                href={option.path}
                  onClick={(event) => {
                    setValue(1);
                    handleMenuClick(event, index);
                    handleClose();
                  }
                  } classes={{ root: classes.menuItem }}
                  selected={index === selectedIndex}
                >
                  {option}
                </MenuItem>

              ))}
            </Menu>
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  )
}

export default Header