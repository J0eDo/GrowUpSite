import React,{Component} from 'react';
import './news_style.css';
import NewsRead from "./NewsRead/NewsRead"   
import news from '../../contentData/archive_news.json'



class News extends Component{
    
    constructor(props){
        super(props);
        this.flag = props.flag; 
        this.handler = props.handler;
        this.news = this.JSONtoArray();
        this.state = {
        };
    }

    JSONtoArray(){
        let arr = [];    
        if(this.flag){
            arr.push(news[0])
        }else{
            news.forEach(element => {
            arr.push(element)
            });
        }
        return arr;
    }

    readTheNews=(event)=>{
        this.handler("Чтение Новости", event)
        
    }

    getTheNews(news){
        const readTheNews = this.readTheNews.bind(this);
        function readModeHandler(){
            readTheNews(news);
        }
        return(
            <div key={news.id} className="theNews">
                    <img src={window.location.origin + "/news/" +news.num + "/" + news.photos[0]} alt={news.head}></img>
                    <div className="theNews_conteiner">
                        <h3 onClick={readModeHandler} href="#">читать</h3>
                        <p className="theNews_dateTime">{Element.dataTime}</p> 
                        <h2>{news.head}</h2>
                        <p>{news.second_text[0[0]]||news.second_text[0]}</p>
                    </div>
                </div>
        )
    }

    getAllNews(){
        return(
            this.news.map(Element=>
                this.getTheNews(Element)
            )        
        )
    }

    render(){       
        return(
            <div className="newsConteiner">
                {this.getAllNews()}
            </div>
        )
    }
}

export default News;