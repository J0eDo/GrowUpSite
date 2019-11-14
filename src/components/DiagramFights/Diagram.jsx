import React,{Component} from 'react'
import './diagram.css'
import { element } from 'prop-types';



class Diagram extends Component{    

    constructor(props){
       super(props);
       this.fighterStatistick = this.sortData(props.fighter.fightHistory);
       this.numberOfFight = 0;
    }


    sortData(fightHistory){
        let sortData = [];
        fightHistory.forEach(element,index=>{
            if(index===0){
                this.numberOfFight+=element;
                
            }
        })
    }
/* 
     ParametrFighterMaper(param){
        let parametrs = this.objectToArray(param);
        let key = 0;
        return(
        parametrs.map(element => 
            <p  key={key++}>{element[0]}:  <span>{element[1]}</span></p>
        )
        ) 
    }


    constructorDiagram(arrNum){
      
    }


    

    getStatisticCase(_caseFight){
        let key = 0;
        let caseFight = this.objectToArray(this.fighter.fightHistory[_caseFight])   
        return(
            caseFight.map(element=>
             <p key={key++}> {element[0]} {element[1]}</p>)
        )
    }
     */

    render() {
        return (
            <div className="diagram">
                
            </div> 
        );
    }
}



export default Diagram;