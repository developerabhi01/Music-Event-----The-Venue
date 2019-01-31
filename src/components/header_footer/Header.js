import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';
class Header extends Component {
  state = {
    DrawerOpen : false,
    HeaderColorShow : false
  }
  componentDidMount(){
      window.addEventListener("scroll",this.HandleScroll);
  }

  HandleScroll = () => {
      if(window.scrollY > 0){
          this.setState({
              HeaderColorShow : true
          }) 
      }else{
          this.setState({
            HeaderColorShow : false
        }) 
      }
  }

  toggleDrawer = (value) => {
    this.setState({
        DrawerOpen : value
    })
  }
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor:this.state.HeaderColorShow ? "#2f2f2f" : "transparent",
          boxShadow:"none",
          padding:"10px 0px"
        }}
      >
       <Toolbar>
          <div className="header_logo">
              <div className="font_righteous header_logo_venue">The Venue</div>
              <div className="header_logo_title">Musical Events</div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={ () => this.toggleDrawer(true) }
          >
              <MenuIcon/>
          </IconButton>
          <SideDrawer
             open={ this.state.DrawerOpen }
             onClose={ (value) => this.toggleDrawer(value) }
          />
       </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
