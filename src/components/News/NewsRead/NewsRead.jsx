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

    
    constructNews(){
        let a = <h1>some text</h1>;
        let b = <h2>some text2</h2>;
        let c ;
        
        for (let indexFT = 0; indexFT < this.linksFirstBlockText.length; indexFT++) {
            const c = this.linksFirstBlockText[indexFT];
            
        }
        return c;
       
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