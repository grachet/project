import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LightIcon from '@material-ui/icons/Opacity';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Logo from '@material-ui/icons/PinDrop';

import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import {toggleTheme} from "../redux/actions/user"
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";


const styles = {
  grow: {
    flexGrow: 1,
  },
  logo: {
    height: 60
  },
  title: {
    textDecoration: 'none',
    flexGrow: 1,
  }
};

class MenuAppBar extends React.Component {

  render() {
    const {classes, currentUser} = this.props;

    return (

      <AppBar position="fixed">
        <Toolbar>
          <Logo/>

          <Typography to={"/"}
                      component={Link} variant="title" color="inherit" className={classes.title}>
            Maps
          </Typography>

          <Typography variant="title" color="inherit" className={classes.title}>
            {this.props.title}
          </Typography>


          <Typography variant="subheading" color="inherit">
            {currentUser && currentUser.firstName + " " + currentUser.lastName}
          </Typography>
          <IconButton
            to={"/setting"}
            component={Link}
            color="inherit"
          >
            <AccountCircle/>
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => this.props.toggleTheme()}
          >
            <LightIcon/>
          </IconButton>

        </Toolbar>
      </AppBar>

    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({user, projects}) => {
  return {
    currentUser: user,
    projects: projects
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleTheme
}, dispatch);

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(MenuAppBar));
