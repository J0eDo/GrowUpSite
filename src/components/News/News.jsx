import React,{Component} from 'react';
import './news.css';
import news from '../../contentData/news.json'



class News extends Component{
    
    constructor(props){
        super(props);
        this.miniVersion = props.flag; 
        this.handler = props.handler;
        this.news = this.paragraphsParse();
    }

    paragraphsParse(){
        let paragraphs = [];    
        if(this.miniVersion){
            paragraphs.push(news[0])
        }else{
            news.forEach(element => {
            paragraphs.push(element)
            });
        }
        return paragraphs;
    }

    readTheNews=(event)=>{
        this.handler("newsRead", event)
        
    }

    getTheNewsPoster(news){
        const readTheNews = this.readTheNews.bind(this); 
        function openTheNews(){
            readTheNews(news);
        }

        const titleImgSrc = `${window.location.origin}/news/${news.num}/${news.photos[0]}`
        return(
            <div key={news.num} className="theNews">
                    <img src={titleImgSrc} alt={news.head}></img>
                    <div className="theNews_conteiner">
                        <h3 onClick={openTheNews} href="#">читать</h3>
                        <p className="theNews_dateTime">{Element.dataTime}</p> 
                        <h2>{news.head}</h2>
                        <p>{news.second_text[0[0]]||news.second_text[0]}</p>
                    </div>
                </div>
        )
    }

    getAllNewsPosters(){
        return(
            this.news.map(Element=>
                this.getTheNewsPoster(Element)
            )        
        )
    }

    render(){       
        return(
            <div className="newsConteiner">
                {this.getAllNewsPosters()}
            </div>
        )
    }
}

export default News;