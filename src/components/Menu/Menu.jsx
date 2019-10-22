import React,{Component} from 'react';
import {Link} from "react-router-dom";
import './menu.css';

class Menu extends Component{

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
                    <a href="#">Регистрация...</a>
                </div>  
            </div>
        )
    }

    render(){
        return(
            <div className="menu">    
                <input type="checkbox" id="nav-trigger" className="nav-trigger"></input>
                <label htmlFor="nav-trigger">
                    <div className="iconer">&#9776;</div>
                    <ul  className="menuItems">
                        <li>{this.getPersonal()}</li>
                        <li><Link to="/"         className="menuBtn">Главная</Link></li>
                        <li><Link to="news"      className="menuBtn">Новости</Link></li>
                        <li><Link to="studios"   className="menuBtn">Студии</Link></li>
                        <li><Link to="models"    className="menuBtn">Модели</Link></li>
                        <li><Link to="videoteka" className="menuBtn">Порнотека</Link></li>        
                    </ul>       
                </label>
            </div>
        )
    }
}

export default Menu;