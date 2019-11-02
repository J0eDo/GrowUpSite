import React,{Component} from 'react';
import './studios.css';   
import studios from '../../contentData/studios.json';



class Studios extends Component{
    
    getStudiosElements(arr){
        const _src = `${window.location.origin}/studios_logo/`;
        return(
            studios.map(Element =>
            <div  className="studioBlock" key={Element.name}>
                <img src={_src+Element.logo} alt={_src} className="sb_logo"></img>
                <p style={{color:Element.color}} className="sb_name"> {Element.name }</p>
                <p className="sb_about">{Element.about}</p>
            </div>
           )
        )
    }

    render(){       
        return this.getStudiosElements(this.studios);
    }
}

export default Studios;