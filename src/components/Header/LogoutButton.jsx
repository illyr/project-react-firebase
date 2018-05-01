import React from "react";
import classNames from "classnames";

import {
    withStyles,
    IconButton,
    Hidden
  } from "material-ui";

import { PowerSettingsNew } from "@material-ui/icons";

import * as firebase from "firebase";

class LogoutButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isDisabled: false};
    }    

    handleClick = () => {
        this.setState(prevState => ({
            isDisabled: !prevState.isDisabled
        }));

        firebase.auth().signOut().then(function() {})
            .catch(function(error) {
                this.setState(prevState => ({
                    isDisabled: false
                }));
            });
    }

    render() {
        const { classes } = this.props;
        return (
        <IconButton
            color="inherit"
            area-label="Logout"
            className={classes.buttonLink}
            onClick={this.handleClick}
            disabled={this.state.isDisabled}
        >
            <PowerSettingsNew className={classes.links} />
            <Hidden mdUp>
            <p className={classes.linkText}>Logout</p>
            </Hidden>
       </IconButton>);
    }
}    

export default LogoutButton;