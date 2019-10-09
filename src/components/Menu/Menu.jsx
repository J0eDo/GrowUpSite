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

    getPersonal(){
        const _src = `${window.location.origin}/ui/manWhite.png`
        return(
            <div className="personal">
                <img src={_src} alt=""/>
                <form action="login">
                    <input placeholder="Login:" type="text"/>
                    <input placeholder="Password:" type="text"/>  
                </form>
                <div>
                    <button>Войти</button>
                    <a href="">Регистрация...</a>
                </div>  
            </div>
        )
    }

    render(){
        return(
            <div className="menu">
                
                <input type="checkbox" id="nav-trigger" className="nav-trigger"></input>
                <label for="nav-trigger">
                <div className="iconer">&#9776;</div>
                <ul  className="menuItems">
                    <li>{this.getPersonal()}</li>
                    <li><a className="menuBtn" action="general" onClick={this.handlerRef}>Главная</a></li>
                    <li><a className="menuBtn" action="news"    onClick={this.handlerRef}>Новости</a></li>
                    <li><a className="menuBtn" action="studio"  onClick={this.handlerRef}>Студии</a></li>
                    <li><a className="menuBtn" action="models"  onClick={this.handlerRef}>Модели</a></li>
                    <li><a className="menuBtn" action="porn"    onClick={this.handlerRef}>Порнотека</a></li>
                </ul>
                
                </label>
            </div>
        )
    }
}

export default Menu;