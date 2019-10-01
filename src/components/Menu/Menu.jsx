import React,{Component} from 'react';
import './menu_style.css';

class Menu extends Component{
    constructor(props){
        super(props);
        this.parentHandler = props.parentHandler;
    }
    handlerRef =(event)=>{
       let sitePage = event.target.text;
       this.parentHandler(sitePage);
       
    }
    render(){
        return(
            <nav>
                <div><a className="menu_btn"  onClick={this.handlerRef}>Главная</a></div>
                <div><a className="menu_btn"  onClick={this.handlerRef}>Модели</a></div>
                <div><a className="menu_btn"  onClick={this.handlerRef}>Студии</a></div>
                <div><a className="menu_btn"  onClick={this.handlerRef}>Новости Индустрии</a></div>
                <div><a className="menu_btn"  onClick={this.handlerRef}>Порнотека</a></div>
            </nav>
        )
    }
}

export default Menu;