import React,{Component} from 'react';
import './girlWeek_style.css';



class GirlWeek extends Component{    
   constructor(props){
        super(props);
        this.model = props.model;
        this.modelNumber = props.model;
        this.appHandler = props.appHandler;
   }
   
   setModelPage=()=>{
        this.appHandler("models",this.model);
   }

    render() {
        const _src =`${window.location.origin}/models/${this.model.name}/avatar.jpg`;
        return (
            <div onClick={this.setModelPage} className="girlWeek_conteiner">
                <h2><span>&#9733;</span>ЗВЕЗДА МЕСЯЦА<span>&#9733;</span></h2>
                <h1>{this.model.name}</h1>
                <img src={_src} alt={this.model.name}></img>
            </div>
        );
    }
}


export default GirlWeek; 
