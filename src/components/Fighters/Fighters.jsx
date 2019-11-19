/**Libarys */
import React,{Component} from 'react'
import './fighters.css'
import {connect} from 'react-redux'
/*Components */
import Diagram from '../DiagramFights/Diagram'
import FighterSideBar from '../FightersSideBar/FightersSideBar'
/*JSON */
import fighters from '../../contentData/fighters.json'


class Fighters extends Component{    

    constructor(props){
       super(props);
       this.fighter = this.getFighter();   
    }

    state ={
        fighter:this.getFighter()
    }

    getFighter(){
        return fighters[1];
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
        )
        ) 
    }
    constructImg(fighter, fileName){
        let url = `${document.location.origin}/img/fighters/${fighter.about["Имя англ"]}/${fileName}`;
        return(
            <img src={url} alt={fighter.about["Имя англ"]}></img>
        )
    }


    render() {
        console.log(this.state.fighter)
        return (
            <div className="fighterPage">
                <div className="f_content">
                    <div className="f_first">
                        {this.constructImg(this.state.fighter, "avatar.png")}
                        <div className="f_parametrs">
                            {this.ParametrFighterMaper(this.state.fighter.parametrs)}
                        </div>
                        <div className="f_parametrs">
                            {this.ParametrFighterMaper(this.state.fighter.about)}
                        </div>                  
                    </div>
                    <div className="f_second">
                        <Diagram fightHistory={this.state.fighter.fightHistory}/>
                        {this.constructImg(this.state.fighter, "1.png")}
                    </div>
                </div>
                <div className="f_sidebar">
                    <FighterSideBar/>
                </div>
            </div> 
        );
    }
}



export default connect(
    state=>({test:state.fighters}),
    disputch=>({})
)(Fighters);