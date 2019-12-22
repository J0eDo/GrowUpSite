/**Libarys*/
import React, { Component } from 'react';
import './app.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
/**Components*/
import GeneralPage from '../GeneralPage/GeneralPage';
import FighterInfo from '../Fighters/Fighters';
import Messager from '../Messager/Messager'


class App extends Component {


    render() {
        return (
            <div className="app">
                <Router className="content">
                    <Switch>
                        <Route exact path="/" component={GeneralPage} />
                        <Route path="/fighters" component={FighterInfo} />
                        <Route path="/chat" component={Messager} />
                    </Switch>
                </Router>
                {/* <footer></footer> */}
            </div>)
    }
}


export default App;

