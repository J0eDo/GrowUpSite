import React,{Component} from 'react';
import './model.css';
import {useParams} from "react-router-dom";
import Prises from './Prises/Prises';
import RatingBar from './RatingBar/RatingBar';
import PhotoCollage from './PhotoActress/PhotoCollage';

import models from '../../contentData/models.json';


class Model_Page extends Component{    
    constructor(props){
        super(props);
        this.model = props.model||models[0];
        this.state = {
            model: this.model,
            numPage:this.model.num,
            name: this.model.name,
        }
    }
    
    componentWillReceiveProps=(newProps)=>{
        this.setState({model:newProps.model}) 
        
    }

    
    getNumPage(){
        return this.state.numPage;
    }
   

    modelChange=(_model)=>{
        if(_model){
           this.setState({model:_model}) 
        }else{
            this.setState({model:models[0]})
        }
    }


    handlerForward = () =>{   
        if(this.state.numPage<(models.length-1)){
            this.setState({
                model : models[++this.state.numPage]
            })
        }   
    }

    handlerBack = () =>{
        if(this.state.numPage>0){       
            this.setState({
                model : models[--this.state.numPage]
            })
        }   
    }
    
    handlerProps(){

    }

    getAbout_li(arr){
        if(arr){
            return(  
                arr.map(Element =>
                <li key={Element.num}>{Element}</li>
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
                    <p>web-site:<a href="#">{model.site||"N/D"}</a></p>
                </div>
                <div className="sm_rating">
                    <RatingBar/>
                </div>
            </div>)
    }

    render() {  
        console.log(this.props.match.params);
            const srcImg = `${window.location.origin}/models/${this.state.model.name}/avatar.jpg`; 
        return (
                <div className="sm_article">
                    <div className="sm_content">
                        <div className="sm_avatar__conteiner">
                            <button className="buttonL" onClick={this.handlerBack}></button>
                            <img className="sm_avatar__img" height="400rem" vidth="400rem"src={srcImg} alt="PHOTO"></img>
                            <button className="buttonR" onClick={this.handlerForward}></button>
                        </div>
                        <div className="sm_midleConteiner">
                            <ul className="sm_biography">
                                {this.getAbout_li(this.state.model.about)}
                                <Prises  _model={this.state.model}/>
                            </ul>
                            <div id="logoLocation"></div>
                            <PhotoCollage  _model ={this.state.model}/>  
                        </div>
                    </div> 
                    <div className="sm_about">
                        {this.shortDataModel(this.state.model)}
                    </div>
                </div>
        );
    }
}


export default Model_Page; 
