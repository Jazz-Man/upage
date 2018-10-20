import Layout from '../components/layout'
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";

const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  }
};

function DenseAppBar(props) {
  const { classes } = props;
  return (
    <Fragment>
      <CssBaseline />
      <Layout>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Photos TEST
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </Layout>
    </Fragment>
  );
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DenseAppBar);