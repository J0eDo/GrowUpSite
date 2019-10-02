import React,{Component} from 'react';
import './generalPage_style.css'
import GirlWeek from './GirlWeek/GirlWeek'
import archiveNews from '../../contentData/archive_news.json'
import modelBase from '../../contentData/modelsBase';
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
        //**to DO backend */
        return archiveNews[0];
    }
    
    getModelWeek(){
        
    }

    render(){
        return(
           <div className="generalPage_conteiner">
               <div className ="gp_head">
                   <div className ="gp_head__logo">
                       <div className="gp_head__logoBG"></div>
                       <div className="gp_logo__circle"></div>                  
                        <h1>GrowUpSite</h1>
                    </div>
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
                        <GirlWeek girl={modelBase[2]}/>
                    </div>       
                </div>
           </div>
        )
    }
}

export default GeneralPage;