/**Libarys*/
import React,{Component} from 'react';
import './app.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
/**Components*/
import GeneralPage from '../GeneralPage/GeneralPage';
import FighterInfo from '../Fighters/Fighters'; 



class App extends Component {


    render(){
        return(
            <div className="app">          
                <Router className = "content">
                    <Switch>
                        <Route exact path="/" component ={GeneralPage}/>
                        <Route path="/fighters"  component ={FighterInfo}/>
                    </Switch>
                </Router>      
                {/* <footer></footer> */}
            </div>)
    }
}


export default App;

