import React,{Component} from 'react';
import './navigation.css';
import models from '../../contentData/models';


class Navigation extends Component{
    constructor(props){
        super(props);
        this.state = {
            partNames:null
        };
        this.appHandler = props.appHandler;
        this.partSearch ="";
    }

   
    fabricaResultSearch(str){
        if(str){
            return(
                <ul className="np_result">
                    {this.searchModel(str).map(Element=>
                        <li key={Element.num} onClick={this.handlerChangeMouse} className="np_resultObj"><a href="#">{Element.name}</a></li>
                    )}
            </ul>
            )
        }
    }

    handlerChangeMouse =(event)=>{
        const modelName =event.currentTarget.innerText;
        const model = this.searchModel(modelName)[0];
        models.forEach(element => {
            if(element.name==modelName){
                this.appHandler("models",model);
            }
        });
    }

    handlerSearch = () =>{
        this.setState({
            partNames : this.partSearch.value
        })
    }


    handlerChangeValue = (event)=> {
        this.setState({partNames: event.target.value});  
    }

    searchModel(str){
        return models.filter(element=>
        element.name.toUpperCase().indexOf(str.toUpperCase())>=0);       
    }

    render(){       
        return(
            <div className="navigationPanel"> 
                    <div className="np_input__bg">
                        <img className="np_img" alt="O" src ={`${window.location.origin}/ui/search.png`}></img>
                        <input className="np_input"  type="text"  onChange={this.handlerChangeValue} ></input>
                    </div>
                    {this.fabricaResultSearch(this.state.partNames)}
            </div>
        )
    }
}

export default Navigation;