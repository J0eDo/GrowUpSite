import React,{Component} from 'react';
import './menu_style.css';

class Menu extends Component{
    constructor(props){
        super(props);
        this.parentHandler = props.parentHandler;
    }
    handlerRef =(event)=>{
       let sitePage = event.target.getAttribute("action");
       this.parentHandler(sitePage);
       
    }
    render(){
        return(
            <div className="menu">
                <ul className="menuItems">
                    <li><a className="menuBtn" action="general" onClick={this.handlerRef}>Главная</a></li>
                    <li><a className="menuBtn" action="models" onClick={this.handlerRef}>Модели</a></li>
                    <li><a className="menuBtn" action="studio" onClick={this.handlerRef}>Студии</a></li>
                    <li><a className="menuBtn" action="news" onClick={this.handlerRef}>Новости</a></li>
                    <li><a className="menuBtn" action="porn" onClick={this.handlerRef}>Порнотека</a></li>
                </ul>
                <input type="checkbox" className="navBtn"></input>
                <label for="navBtn"></label>
            </div>
        )
    }
}

export default Menu;