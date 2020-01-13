import React, { Component } from 'react';
import './menu.scss'

import { NavLink } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';





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
                        <div className="menu_btn">
                            <NavLink to="/"
                                style={{
                                    textDecoration: 'none',
                                    color: 'white'
                                }}>
                                <MenuItem>Главная</MenuItem>
                            </NavLink>
                            <MenuItem >Бойцы</MenuItem>
                            <MenuItem >Страница2</MenuItem>
                            <MenuItem >Страница3</MenuItem>
                            <MenuItem >Страница4</MenuItem>
                        </div>
                        <div className='menu_userIcon'>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={this.state.anchorEL}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={this.state.userMenu}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                            </Menu>
                        </div>

                    </Toolbar>
                </AppBar>
            </div>
        )
    }

}

export default MenuBar