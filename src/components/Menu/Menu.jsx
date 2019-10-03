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
            <nav>
                <div><a className="menu_btn" action="general" onClick={this.handlerRef}>Главная</a></div>
                <div><a className="menu_btn" action="models" onClick={this.handlerRef}>Модели</a></div>
                <div><a className="menu_btn" action="studio" onClick={this.handlerRef}>Студии</a></div>
                <div><a className="menu_btn" action="news" onClick={this.handlerRef}>Новости Индустрии</a></div>
                <div><a className="menu_btn" action="porn" onClick={this.handlerRef}>Порнотека</a></div>
            </nav>
        )
    }
}

export default Menu;