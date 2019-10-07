import React,{Component} from 'react';
import modelBase from '../../contentData/modelsBase.json';
import './model_style.css';
import Prises from './Prises/Prises';
import RatingBar from './RatingBar/RatingBar';
import PhotoCollage from './PhotoActress/PhotoCollage';


class Model_Page extends Component{    
    
    constructor(props){
        super(props);
        this.state = {
            numPage:0,
        }
        this.getNumPage = this.getNumPage.bind(this); 
    }
    


    modelChange(model){
        if(model){
           this.setState({numPage:model.num}) 
        }else{
            this.setState({numPage:0})
        }
    }

    getNumPage(){
        return this.state.numPage;
    }
   

    handlerForward = () =>{
        if(this.state.numPage<(modelBase.length-1)){
            this.setState({
                numPage : ++this.state.numPage
            })
        }   
    }

    handlerBack = () =>{
        if(this.state.numPage>0){
            this.setState({
                numPage : --this.state.numPage
            })
        }   
    }
    
    getAbout_li(arr){
        if(arr){
            return(  
                arr.map(Element =>
                <li key={Element}>{Element}</li>
            )
        )
        }else{
            return(
                <p>Нет информации</p>
            )
        }
    }

    shortDataModel(model){
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
    componentDidMount(){
        this.modelChange(this.props.model);
    }
    render() {  
        const model = modelBase[this.state.numPage];
        const srcImg = `${window.location.origin}/models/${model.name}/avatar.jpg`;
        return (
                <div className="sm_article">
                    <div className="sm_content">
                        <div className="sm_avatar__conteiner">
                            <button className="buttonL" onClick={this.handlerBack}>{"<"}</button>
                            <img className="sm_avatar__img" height="400rem" vidth="400rem"src={srcImg} alt="PHOTO"></img>
                            <button className="buttonR" onClick={this.handlerForward}>{">"}</button>
                        </div>
                        <div className="sm_midleConteiner">
                            <ul className="sm_biography">
                                {this.getAbout_li(model.about)}
                                <Prises handler={this.getNumPage} num={this.state.numPage}/> 
                            </ul>
                            <PhotoCollage handler={this.getNumPage} numPage ={this.state.numPage}/>  
                        </div>
                    </div> 
                    <div className="sm_about">
                        {this.shortDataModel(model)}
                    </div>
                </div>
        );
    }
}


export default Model_Page; 
