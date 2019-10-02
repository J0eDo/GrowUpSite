import React,{Component} from 'react';
import './newsRead_style.css';   




class NewsRead extends Component{
    
    constructor(props){
        super(props);
        this.news = props.news;
        this.linksImg = this.getLinc("photos");
        this.linksFirstBlockText = this.getLinc("first_text"); 
        this.linksSecondBlockText = this.getLinc("second_text");   
    }

    getLinc(param){
        let arr = [];
        for(let key in this.news){
            if(key === param){
                this.news[key].forEach(element => {
                    arr.push(element);  
                });
            }
        }
        return arr;  
    }

    
    constructBlockNews(arrText){
        
        if(arrText.isArray()){
       return( arrText.map(element =>
                <div>{element}</div>
            )
        )
       } 
    }

    constructNews(){

        return (
            this.linksFirstBlockText.map(element=>
                <div className = "news_block">{element}</div>   
            )
        )
       
    }

    render(){       
        return(
            <div>
                <h1 className="news_head">{this.news.head}</h1>
               {this.constructNews()}
            </div>
        )
    }
}

export default NewsRead;