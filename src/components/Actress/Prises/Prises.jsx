import React,{Component} from 'react';
import './prises.css';
import models from '../../../contentData/models';

class Prises extends Component{    
   constructor(props){
       super(props);
       this.state={
        numModel:0
        }
       this.model = props._model; 
   }
    
   componentDidMount(){
       this.setState({numModel:this.model.num})
   }

    componentWillReceiveProps=(newProps)=>{
        this.setState({numModel:newProps._model.num}) 
        
    }
   

   getImg(nameImg){
       const src = `${window.location.origin}/prises/${nameImg}`
        return(
            <img className="prise_img"  width="90px" alt={nameImg} src={src}></img>
        )
   }

   getInfo(num){
        let pasedingPrise = [];
        function formated_StringArr(){                  
            models[num].prises.forEach(element => {
                let subArr = [];
                for(let key in element){
                    subArr.push(element[key])
                }
                pasedingPrise.push(subArr);
            });
        }
        if(models[num].prises!==undefined){formated_StringArr();}
        return( 
            pasedingPrise.map(Element =>
                <div key={Element[0]} className="prise">
                    <div>{Element[0]}</div>                                             
                    <div>{Element[2]}</div>
                    {this.getImg(Element[1])}   
                    <div>{Element[3]}</div>
                </div>
            )
        )
   }
    render() {   
        return (
            <div className="prise_conteiner">
                {this.getInfo(this.state.numModel)}
            </div>
        );
    }
}


export default Prises; 
