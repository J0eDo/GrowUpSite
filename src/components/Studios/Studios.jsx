import React,{Component} from 'react';
import './studios_style.css';   
import studiosJSON from '../../contentData/studiosBase.json'


class Studios extends Component{
    
    constructor(props){
        super(props);
        this.studios = this.parserStudios();
        this.state = {
        };
    }
    
    parserStudios(){
        let arr = [];
        studiosJSON.base.forEach(element => {
            arr.push(element)
        });
        return arr;
    }

    getStudiosElements(arr){
        const _src = `${window.location.origin}/studios_logo/`;
        return(
            arr.map(Element =>
            <div  className="studioBlock" key={Element.name}>
                <img src={_src+Element.logo} alt={_src} className="sb_logo"></img>
                <p style={{color:Element.color}} className="sb_name"> {Element.name }</p>
                <p className="sb_about">{Element.about}</p>
            </div>
           )
        )
    }

    render(){       
        return(
            <div>
                <div className="pornowood">
                    <h1>Porno WOOOD </h1>
                </div>
                {this.getStudiosElements(this.studios)}
            </div>
        )
    }
}

export default Studios;