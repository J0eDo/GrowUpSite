/**Libarys */
import React,{Component} from 'react'
import './generalPage.css'
import {connect} from 'react-redux'
/**Components */
import GirlWeek    from './GirlWeek/GirlWeek'
import News        from '../News/News'
import Videoteka   from '../Videoteka/Videoteka'



class GeneralPage extends Component{
    
    constructor(props){
        super(props);
        this.modelWeek=props.store.modelWeek;
        this.newsWeek = props.store.newsWeek;
    }


    modelChange(){
        this.props.modelChange(this.modelWeek);
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
                           <News newsWeek={this.props.store.newsWeek} flag={true}/>
                       </div>
                       <div>
                           <Videoteka textBlock="Лидеры Просмотра" handler={this.appHandler} numberGet={3}/>
                        </div>
                    </div>
                    <div onClick={this.modelChange.bind(this)} className="gp_girlWeek">
                        <GirlWeek  model={this.props.store.modelWeek}/> 
                    </div>       
                </div>
           </div>
        )
    }
}



export default connect(
    state=>({
        store: state.models
    }), 
    dispatch =>({
        modelChange : (model) =>{
            dispatch({type : 'modelChange', modelSearched:model });
        },
    })
)(GeneralPage);