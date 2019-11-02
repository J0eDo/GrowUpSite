/**Libarys */
import React,{Component} from 'react'
import './model.css'
import {connect} from 'react-redux'
/**Components */
import PhotoCollage from './PhotoActress/PhotoCollage'
import Prises from './Prises/Prises'
import RatingBar from './RatingBar/RatingBar'
/**JSON */
import models from "../../contentData/models.json"



class Model_Page extends Component{    

    constructor(props){
        super(props);
        this.model = this.props.store.modelSearched; 
        this.numberOfModels=models.length;
        this.state ={
            model:this.props.store.modelSearched
        }
    }

    flippingHandler = (event) =>{
        const isForvard = event.target.getAttribute("value");
        const newIndex = +this.state.model.num +(isForvard?1:-1);
        const flippingCondition = newIndex>=0&&newIndex<=models.length-1;
        if(flippingCondition){
            const nextModel = models[newIndex];
            this.props.modelChange(nextModel);
            this.setState({model:nextModel});
        }  
    }


    getAbout_li(arr){
        let keys = 0;
        if(arr){
            return(  
                arr.map(Element =>
                <li key={keys++}>{Element}</li>
            )
        )
        }else{
            return(
                <p>Нет информации</p>
            )
        }
    }

    shortDataModel=(model)=>{
        return(
            <div>
                <h2 className = "sm_name">{model.name}</h2>
                <div className="sm_aboutText">
                    <p>Возраст: {model.age||"N/D"}</p>
                    <p>Страна: {model.country||"N/D"}</p>       
                    <p>Национальность: {model.ethnic||"N/D"}</p>
                    <p>Бюст: {model.buste||"N/D"}</p>
                    <p>Вес:{model.weight||"N/D"}</p>
                    <p>Рост: {model.height||"N/D"}</p>
                    <p>web-site:<a href="#1">{model.site||"N/D"}</a></p>
                </div>
                <div className="sm_rating">
                    <RatingBar/>
                </div>
            </div>)
    }

    render() {
        const srcImg = `${window.location.origin}/models/${this.state.model.name}/avatar.jpg`; 
        return (
                <div className="sm_article">
                    <div className="sm_content">
                        <div className="sm_avatar__conteiner">
                            <button className="buttonL"  onClick={this.flippingHandler}></button>
                            <img className="sm_avatar__img" height="400rem" vidth="400rem"src={srcImg} alt="pict"></img>
                            <button className="buttonR" value  onClick={this.flippingHandler}></button>
                        </div>
                        <div className="sm_midleConteiner">
                            <ul className="sm_biography">
                                {this.getAbout_li(this.state.model.about)}
                                <Prises  _model={this.state.model}/> 
                            </ul>
                            <div id="logoLocation"></div>
                            <PhotoCollage  _model ={this.state.model}/>   */}
                        </div>
                    </div> 
                    <div className="sm_about">
                        {this.shortDataModel(this.state.model)}
                    </div>
                </div>
        );
    }
}



export default connect(
    state=>({
        store: state.models
    }), 
     dispatch =>({
         modelChange:(models)=>{
             dispatch({type:"modelChange",modelSearched:models})
         }  
     }) 
)(Model_Page);