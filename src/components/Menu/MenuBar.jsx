import React, { Component } from 'react';
import './menu.scss'

import { NavLink } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import PublicIcon from '@material-ui/icons/Public';



class MenuBar extends Component {



    state = {
        userMenu: false,
        anchorEL: null
    }

    handleClose = () => {
        this.setState({ anchorEL: null });
        this.setState({ userMenu: false });
    }

    handleMenu = (event) => {
        this.setState({ anchorEL: event.currentTarget });
        this.setState({ userMenu: true });

    };

    render() {
        return (
            <div className="menu" >
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h5" className="menu_title">
                            GrowUpChat
                        </Typography>
                        <div className="menu_bar">
                            <div className="menu_btn">
                                <NavLink to="/"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white'
                                    }}>
                                    <MenuItem>Главная</MenuItem>
                                </NavLink>
                            </div>
                            <Button
                                id="online_indicator"
                                className="menu_btn"
                            >
                                <PublicIcon />
                            </Button>
                        </div>

                    </Toolbar>
                </AppBar>
            </div>
        )
    }

}

export default MenuBar