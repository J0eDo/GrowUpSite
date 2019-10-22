import React,{Component} from 'react';
import './generalPage.css'
import GirlWeek from './GirlWeek/GirlWeek'
import archiveNews from '../../contentData/news.json'
import models from '../../contentData/models.json';
import News from '../News/News';
import Videoteka from '../Videoteka/Videoteka'


class GeneralPage extends Component{
    
    constructor(props){
        super(props);
        this.hotNews = this.getHotNews();
        this.modelWeek = this.getModelWeek(); 
        this.appHandler = props.handler;
    }

    getHotNews(){
        //**to DO BACKEND */
        return archiveNews[0];
    }
    
    getModelWeek(){
        //**TO DO BACKEND */
        return models[1];
    }


    render(){
        return(
           <div className="generalPage_conteiner">
               <div className ="head__logo">
                    <div className="head__logoBG"></div>
                    <div className="logo__circle"></div>           
                    <h1>GrowUpSite</h1>
                </div>
               <div className ="gp_head">
                    <p>Приветствуем всех ценителей качественного контента и годноты. Вас приветствует <span>GrowUpSite</span>. Здесь вы найдетте тонны эротики и порно отсортированной специально для Вас.
                    Так же сможете познакомиться с новостями мира порно. Узнать больше о звездах индустрии и многое многое другое. Не забудьте посетить нашу порнотеку!</p>
               </div>
               <div className ="gp_content">
                   <div className="gp_content__left">
                       <div className="gp_hotNews">
                           <News handler={this.appHandler} flag={true}/>
                       </div>
                       <div>
                           <Videoteka textBlock="Лидеры Просмотра" handler={this.appHandler} numberGet={3}/>
                        </div>
                    </div>
                    <div className="gp_girlWeek">
                        <GirlWeek appHandler={this.appHandler} model={this.modelWeek}/>
                    </div>       
                </div>
           </div>
        )
    }
}

export default GeneralPage;