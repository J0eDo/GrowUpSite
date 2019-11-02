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
import Menu        from '../Menu/Menu';
import Model_Index from '../Actress/Model_Index'; 
import Studios     from '../Studios/Studios';
import News        from '../News/News';
import NewsRead    from '../News/NewsRead/NewsRead'
import Videoteka   from '../Videoteka/Videoteka';


class App extends Component {

    render(){
        return(
            <div className="app">          
                <Router className = "content">
                <Menu/>
                    <Switch>
                        <Route exact path="/" component ={GeneralPage}/>
                        <Route path="/news"  component ={News}/>
                        <Route path="/newsRead" component ={NewsRead}/>
                        <Route path="/studios" component ={Studios}/>
                        <Route path="/models" component={Model_Index}/>
                        <Route path="/videoteka" component={Videoteka}/>
                    </Switch>
                </Router>      
                {/* <footer></footer> */}
            </div>)
    }
}


export default App;

