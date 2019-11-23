/*Libarys */
import React,{Component} from 'react'
import './generalPage.css'
import {Link} from "react-router-dom";
/*Component*/
import RegisterForm "./"



class GeneralPage extends Component{
    
    render(){
        return(
           <div className="generalPage">
               <header>
                   <div className = "header_column">
                        <Link to="/Xbet">
                            <span className="bookmaker header_button__M">СТАВКИ</span>
                        </Link>
                        <Link to="/fighters">
                            <span className="fighters header_button__M last">БОЙЦЫ</span>
                        </Link>
                    </div>
                    <div className="header_column__center "><p>БОЙ</p></div>
                    <div className ="header_column">
                        <Link to="/">
                            <span className="merch header_button__M">МЕРЧ</span>
                        </Link> 
                        <Link to="/">
                            <span className="news header_button__M last">НОВОСТИ</span>
                        </Link>
                    </div>
               </header>
               <div className="subheader"></div>
               <footer></footer>
           </div>
        )
    }
}



export default GeneralPage;