import './news.css';
/**Libarys */
import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
/**JSON */
import news from '../../contentData/news.json';



class News extends Component{
    
    constructor(props){
        super(props);
        this.modelWeek = props.flag; 
        this.news = this.paragraphsParse();
    }
    
    newsChange=(event)=>{
        const newsIndex = event.target.getAttribute("index");
        this.props.newsChange(news[newsIndex]);
    }

    paragraphsParse(){
        let paragraphs = [];    
        if(this.modelWeek){
            paragraphs.push(news[2])
        }else{
            news.forEach(element => {
            paragraphs.push(element)
            });
        }
        return paragraphs;
    }



    getTheNewsPoster(news){
        const titleImgSrc = `${window.location.origin}/news/${news.num}/${news.photos[0]}`
        return(
            <div key={news.num} className="theNews">
                    <img src={titleImgSrc} alt={news.head}></img>
                    <div className="theNews_conteiner">
                        <Link onClick={this.newsChange.bind(this)}  to="/newsRead"><h3 index={news.num}>читать</h3></Link>
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

export default connect(
    state=>({
        store: state.news
    }),
    dispatch =>({
        newsChange : (news) =>{
            dispatch({type : 'newsChange', newsSearched:news });
        },
    })
)(News);