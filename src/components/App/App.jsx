import React,{Component} from 'react';
import './app.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


import GeneralPage from '../GeneralPage/GeneralPage';
import Menu        from '../Menu/Menu';
import Model_Index from '../Actress/Model_Index'; 
import Navigation  from '../Navigation/Navigation';
import Studios     from '../Studios/Studios';
import News        from '../News/News';
import SearchVideo from '../SearchVideo/SearchVideo';
import Videoteka   from '../Videoteka/Videoteka';
import NewsRead    from '../News/NewsRead/NewsRead';


class App extends Component {
    
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    setStatePage = (str,_content) =>{
        this.setState({

            video:_content
        })
        
    }

    render(){
        return(
            <div className="app">          
                <Router className = "content">
                <Menu/>
                    <Switch>
                        <Route exact path="/" component ={GeneralPage}/>
                        <Route path="/news"  component ={News}/>
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
