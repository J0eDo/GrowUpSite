import React,{Component} from 'react'
import './fighters.css'
/*Libarys */
import {connect} from 'react-redux'
/*Components */
import Diagram from '../DiagramFights/Diagram'
import FighterSideBar from '../FightersSideBar/FightersSideBar'



class Fighters extends Component{    

    state ={
        fighter:this.props.fighter
    }


    objectToArray(obj){
        let array = [];
        for(let key in obj){
            array.push([key, obj[key]])
        }
        return array;
    }

     ParametrFighterMaper(param){
        let parametrs = this.objectToArray(param);
        let key = 0;
        return(
        parametrs.map(element => 
            <p  key={key++}>{element[0]}:  <span>{element[1]}</span></p>
        )) 
    }
    constructImg(fighter, fileName){
        let url = `${document.location.origin}/img/fighters/${fighter.about["Имя англ"]}/${fileName}`;
        return(
            <img src={url} alt={fighter.about["Имя англ"]}></img>
        )
    }


    render() {
        return (
            <div className="fighterPage">
                <div className="f_content">
                    <div className="f_first">
                       <div className="f_first__avatar">
                            {this.constructImg(this.props.fighter, "avatar.png")}
                        </div> 
                        <div className="f_infoConteiner">
                            <h2>{this.props.fighter.name}</h2>
                            <div className="f_infoConteiner__block">
                                <div className="f_parametrs">
                                    {this.ParametrFighterMaper(this.props.fighter.parametrs)}
                                </div>
                                <div className="f_parametrs">
                                    {this.ParametrFighterMaper(this.props.fighter.about)}
                                </div>        
                            </div>    
                        </div>       
                    </div>
                    <div className="f_second">
                        <Diagram fighter={this.props.fighter}/>
                        {this.constructImg(this.props.fighter, "1.png")}  
                    </div> 
                </div>
                <div className="f_fsb__conteiner" >
                    <FighterSideBar/>
                </div>
            </div> 
        );
     }
}



export default connect(
    state=>({fighter:state.fighterChange}),
    disputch=>({})
)(Fighters);