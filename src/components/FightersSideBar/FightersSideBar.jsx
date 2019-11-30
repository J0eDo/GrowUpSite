import React, {Component} from "react"
import "./fightersSideBar.css"
/*Libarys*/
import {connect} from "react-redux"




class FightersSideBar extends Component{

    constructor(props){
        super(props);
        this.MAX_NUMBER_ICONS_SHOW = 3;
    }

    state={
        numPage:0
    }

    fighterDisputher=(e)=>{
       let changeFighterID = e.currentTarget.getAttribute("fighter");
       this.props.changeFighter.bind(this);
       this.props.changeFighter(changeFighterID);
    }

    constructIconFighter(numPage){
        const startList = numPage*this.MAX_NUMBER_ICONS_SHOW;
        const endList = startList+this.MAX_NUMBER_ICONS_SHOW;
        console.log(this.props.fighters);
        
        let newFightersList = this.props.fighters.fightersListSort.slice(startList,endList);
        // eslint-disable-next-line
        return (newFightersList.map((element,index)=>
        // eslint-disable-next-line
            <div className="sb_blockFighter" fighter={element.id}  onClick={this.fighterDisputher}  key={`iconFighter${index}`}>
                <img src={`${document.location.origin}/img/fighters/${element.about["Имя англ"]}/avatar.png`} alt=""/>
                {element.name}
            </div>
        ))
    }

    swipePage =(e)=>{
        const swipeSign = e.target.getAttribute("value");
        this.swipePageAction(swipeSign)
        

    }
    swipePageAction(flippingSide){
        const maxPage =Math.ceil(Object.keys(this.props.fighters.fightersListSort).length/this.MAX_NUMBER_ICONS_SHOW);
        const nextPage = this.state.numPage + +flippingSide;
        if(nextPage<maxPage&&nextPage>=0){
            this.setState({numPage:nextPage})       
        }
    }

    search(){
        const searchPart =this.searchFighterName.value;
        this.props.onFindFighter(searchPart);
        this.setState({numPage:0})
    }

    restartSearch(){
        const searchPart =this.searchFighterName.value="";
        this.props.onFindFighter(searchPart);
        this.setState({numPage:0});
    }


    render(){
        return(
            <div className="sb">
                <div className="sb_fighters__conteiner">
                    <div className="sb_searchBar">
                        <input type="text" ref={(input)=>this.searchFighterName=input}
                        placeholder="Fighter Name" 
                        onFocus={this.restartSearch.bind(this)}/>
                        <button onClick={this.search.bind(this)}>поиск</button>
                    </div>
                   {/*  {this.constructIconFighter(this.state.numPage)} */}
                    <div className = "sb_swipe">
                        <button value={-1}  onClick={this.swipePage}>след</button>
                        <button value={1 }  onClick={this.swipePage}>пред</button>
                    </div>
                </div>              
            </div>
        )
    }
}

export default connect(
    state=>({fighters: state.findFighters}),
    dispatch => ({
        changeFighter:(fighterID)=>
            dispatch({type:"fighterChange", fighterSearchedID:fighterID}),
        onFindFighter :(searchedPart)=>
            dispatch({type:"findFighter", partName:searchedPart})
})
)(FightersSideBar);