import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Offcanvas from "./offcanvas";

class Header extends Component<any>{
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">
                            Next.JS TypeScript
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Offcanvas/>
            </div>
        );
    }
}

export default Header;