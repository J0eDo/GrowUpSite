//Libarys
import React, { Component } from 'react';
import './app.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
//Components
import GeneralPage from '../GeneralPage/GeneralPage';
import AuthChat from '../HOC/AuthChat'
//UI
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../util/theme'
import MenuBar from '../Menu/MenuBar';

class App extends Component {


    render() {
        return (
            <div className="app">
                <ThemeProvider theme={theme}>
                    <Router >
                        <MenuBar />
                        <div className="app">
                            <Switch>
                                <Route exact path="/" component={GeneralPage} />
                                <Route path="/chat" component={AuthChat} />
                            </Switch>
                        </div>
                        <footer>
                            <div className="footer_contacts">
                                <p>noreduard93@gmail.com</p>
                                <a href="https://github.com/J0eDo">github.com/J0eDo</a>
                                <p>+7(995)312-98-05</p>
                            </div>
                        </footer>
                    </Router>
                </ThemeProvider>
            </div>)
    }
}


export default App;

