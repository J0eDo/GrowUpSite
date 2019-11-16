import React,{Component} from 'react'
import './diagram.css'




class Diagram extends Component{    

    constructor(props){
        super(props);
        this.wins = this.convertToArray(props.fightHistory["Победы"]);
        this.loses = this.convertToArray(props.fightHistory["Поражения"]);
    }
    
    convertToArray(fightCase){
       let dataFight = []
       for(let key in fightCase){
           dataFight.push(fightCase[key]);
       }
       return dataFight;
    }

    numOfFightCase(fighterStatistick){
        let numOf = fighterStatistick.shift();
        return(<p className="diagram_numOf">{numOf}</p>)
    }
    
    rowConstructor(percent,_index){
        return (<div key={`rows${_index}`}  className="diagram_percent"  style={{width:percent}}>
            <div>{percent}</div>
        </div>)

    }
    numOfCaseConstructor(numOf, _index, _case){
        return (
            <div key={`numOffight${_index}`} >
                <div>{numOf} {_case}</div> 
            </div>)
           
    }

    diagramConstruct(data){
        let precentData = [];
        let numOfCase = [];
        const FIGHT_CASES = ["КО/ТКО","САБМИШЕН","РЕШЕНИЕ"]
        let sumFight = this.numOfFightCase(data);
        data.forEach(element => {
            const statisticData =  element.split('/');
            precentData.push(statisticData[1]);
            numOfCase.push(statisticData[0])
        });

        let rowDiagram = precentData.map((element,index)=>
           this.rowConstructor(element,index)
        )
        let numOfCaseDiagram = numOfCase.map((element,index)=>
           this.numOfCaseConstructor(element,FIGHT_CASES[index])
        )
        return(
            <div className="diagram_content">
                <div>{sumFight}</div>
                <div className="diagram_row">{rowDiagram}</div>
                <div className="diagram_numOfCase">{numOfCaseDiagram}</div>
            </div>
        );
    }

    render() {
        return (
            <div className="diagram">
                <div>
                    <h3>ПОБЕДЫ</h3>
                    {this.diagramConstruct(this.wins)} 
                </div>
                <div>
                    <h3>ПОРАЖЕНИЯ</h3>
                    {this.diagramConstruct(this.loses)}
                </div>
            </div> 
        );
    }
}



export default Diagram;