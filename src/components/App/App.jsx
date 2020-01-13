//Libarys
import React, { Component } from 'react';
import './app.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
//Components
import GeneralPage from '../GeneralPage/GeneralPage';
import FighterInfo from '../Fighters/Fighters';
import Messager from '../Messager/Messager'
//UI
import { ThemeProvider } from '@material-ui/core/styles';
import TableFooter from '@material-ui/core/TableFooter';
import theme from '../../util/UItheme'

class App extends Component {


    render() {
        return (
            <div className="app">
                <ThemeProvider theme={theme}>
                    <Router className="content">
                        <Switch>
                            <Route exact path="/" component={GeneralPage} />
                            <Route path="/fighters" component={FighterInfo} />
                            <Route path="/chat" component={Messager} />
                        </Switch>
                    </Router>
                   <TableFooter></TableFooter>
                </ThemeProvider>
            </div>)
    }
}


export default App;

