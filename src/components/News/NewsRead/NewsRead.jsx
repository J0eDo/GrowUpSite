import React,{Component} from 'react';
import './newsRead.css';   


class NewsRead extends Component{
    
    constructor(props){
        super(props);
        this.news = props.news;
        this.photoIndex = 0;
        this.linksImg = this.parametrParser("photos");
        this.linksFirstBlockText = this.parametrParser("first_text"); 
        this.linksSecondBlockText = this.parametrParser("second_text");   
    }

    parametrParser(param){
        let params = [];
        for(let key in this.news){
            if(key === param){
                this.news[key].forEach(element => {
                    params.push(element);  
                });
            }
        }
        return params;  
    }

    
    getPhoto(className){
        const _src = `${window.location.origin}/news/${this.news.num}/${this.news.photos[this.photoIndex]}`
        this.photoIndex++;
        let imgBlock = null;
        if(this.linksImg.length!==0){
            this.linksImg.shift()
            imgBlock = (
            <div className={className}>
                    <img  src={_src} alt="PHOTO"/>
            </div>)
        }
        return imgBlock;
    }

    constructBlockNews(first){
        let linkBlock = null;
        if(this.linksSecondBlockText.length!=0){
            const img = this.getPhoto("article_img__link")
            const link= <div className="article_link">{this.linksSecondBlockText.shift()}</div>;
            linkBlock = <div>{img}{link}</div>
        }
        return(
            <div>
                <div className = "article_block">{first}</div>
                {linkBlock}
            </div>   
        )
    }

    constructNews(){
        return (
            this.linksFirstBlockText.map(element=>
                this.constructBlockNews(element)
            )
        ) 
    }

    getAllPhotos(){
        
        return(
            <div className="article_img__bottom">{
                this.linksImg.map(element =>
                        <img src={`${window.location.origin}/news/${this.news.num}/${element}`} alt=""/>
                )
            }</div>
        )
    }

    render(){       
        return(
            <div className="articleNews">
                {this.getPhoto("article_img__general")}
                <h1 className="article_head">{this.news.head}</h1> 
                {this.constructNews()}
                {this.getAllPhotos()}
            </div>
        )
    }
}

export default NewsRead;