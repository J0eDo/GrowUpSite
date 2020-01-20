import React, { Component } from 'react';
import './menu.scss'

//MaterialUI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
//Components
import Bar from './Bar'



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
                            <div className="menu_elem">
                                <Bar/>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

}

export default MenuBar