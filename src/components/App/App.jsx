import React,{Component} from 'react';
import './app_style.css';
import GeneralPage from '../GeneralPage/GeneralPage';
import Menu from '../Menu/Menu';
import Model_Index from '../Actress/Model_Index'; 
import Navigation from '../Navigation/Navigation';
import Studios from '../Studios/Studios';
import News from '../News/News';
import SearchVideo from '../SearchVideo/SearchVideo';
import Videoteka from '../Videoteka/Videoteka';
import NewsRead from '../News/NewsRead/NewsRead'

class App extends Component {
    
    constructor(props){
        super(props);
        this.setStatePage.bind(this);
        this.state={
            page:"general",
            searchState:"none",
            film:"someFilm",
            news:"someNews"
        }
    }

    setStatePage = (str,_video) =>{
        this.setState({
            page:str,
            video:_video
        })
        
    }

    setSearchElementState(str){
        switch(str){
            case("studio"):{return null;}
            case("models"):{return <Navigation mode={"actress"}/>}
            case("news"):{return null;}
            case("general"):{return null}
        } 
    }

  
    getPageContent(str,content){
        switch(str){
            case("studio"):{return <Studios/>;}
            case("models"):{return <Model_Index model={content}/>;}
            case("news"):{return <News handler={this.setStatePage}/>; }
            case("porn"):{return <Videoteka handler={this.setStatePage} numberGet={3}/>;}
            case("Просмотр"):{return <SearchVideo video={content}/>;}
            case("general"):{return <GeneralPage handler={this.setStatePage}/>;}
            case("Чтение Новости"):{return <NewsRead news={content}/>}
        } 
    }

    render(){
        return(
            <div className="app">
                <Menu parentHandler={this.setStatePage}/>
                <content className="site-wrap">
                    {this.setSearchElementState(this.state.page)}
                    {this.getPageContent(this.state.page,this.state.video)}
                </content>
                {/* <footer></footer> */}
            </div>)
    }
}


export default App;
