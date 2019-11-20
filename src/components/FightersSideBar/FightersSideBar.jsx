import React, {Component} from "react"
import {connect} from "react-redux"
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

    fighterDisputher=(e)=>{
       let changeFighterID = e.currentTarget.getAttribute("fighter");
       this.props.changeFighter.bind(this);
       this.props.changeFighter(1);
    }

    constructIconFighter(fighters){
        let fightersList = fighters.map((element,index)=>
            <div className="sb_blockFighter" fighter={element.id}  onClick={this.fighterDisputher}  key={`iconFighter${index}`}>
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

export default connect(
    state=>({test:state.fighters}),
    dispatch => ({changeFighter:(fighterID)=>
        dispatch({"type":"fighterChange", fighterSearchedID:fighterID})
})
)(FightersSideBar);