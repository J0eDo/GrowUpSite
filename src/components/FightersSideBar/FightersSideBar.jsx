import React, {Component} from "react"
import "./fightersSideBar.css"

import fighters from '../../contentData/fighters.json'


class FightersSideBar extends Component{

    constructor(props){
        super(props);
        this.constructIconFighter(fighters)
    }
    state={
        numPage:0
    }

    constructIconFighter(fighters){
        let fightersList = fighters.map((element,index)=>
            <div className="sb_blockFighter"  key={`iconFighter${index}`}>
                <img src={`${document.location.origin}/img/fighters/${element.about["Имя англ"]}/avatar.png`} alt=""/>
                {element.name}
            </div>
        )
        return fightersList;
    }


    render(){
        return(
            <div className="sb">
                <div className="sb_searchBar">
                    <input type="text" placeholder="Fighter Name"/>
                </div>
                {this.constructIconFighter(fighters)}
                <div>
                    <button>назад</button>
                    <button>вперед</button>
                </div>
            </div>
        )
    }
}

export default FightersSideBar;