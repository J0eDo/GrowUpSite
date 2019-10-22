import React,{Component} from 'react';
import './girlWeek.css';
import {Link} from "react-router-dom";



class GirlWeek extends Component{    
   constructor(props){
        super(props);
        this.model = props.model;
   }

    render() {
        const _src =`${window.location.origin}/models/${this.model.name}/avatar.jpg`;
        return (
            <Link to="/models" className="girlWeek_conteiner" >
                <h2><span>&#9733;</span>ЗВЕЗДА МЕСЯЦА<span>&#9733;</span></h2>
                <h1>{this.model.name}</h1>
                <img src={_src} alt={this.model.name}></img>
            </Link>
        );
    }
}


export default GirlWeek; 
