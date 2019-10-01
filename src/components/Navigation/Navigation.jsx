import React,{Component} from 'react';
import './navigation_style.css';
import modelsBase from '../../contentData/modelsBase';

class Navigation extends Component{
    
    constructor(props){
        super(props);
        this.names = [];
        this.partSearch ="";
        this.getNames();
        this.state = {
            partNames:""
        };
    
    }

    getNames(){
        modelsBase.forEach(Element =>{
            this.names.push(Element.name);
        });
    }

    fabricaResultSearch(str){
        let filterNames = [];
        if(str){
            filterNames = this.search(str);
        }else{
            filterNames = [];
        }
        return(
            <div className="np_result">
                {filterNames.map(Element=>
                    <p key={Element} className="np_resultObj"><a href="#">{Element}</a></p>
                )}
           </div>
        )
    }

    handlerSearch = () =>{
        this.setState({
            partNames : this.partSearch.value
        })
    }

    search(str){
        str= str.toUpperCase();
        for(let index = 0; index<this.names.length; index++){
           this.names[index]=this.names[index].toUpperCase();
        }
        let arr = this.names.filter(Element=> Element.indexOf(str)>=0)
        return arr;
    }

    handleChange = (event)=> {
        this.setState({partNames: event.target.value});  
    }

    render(){       
        return(
            <div className="navigationPanel"> 
                    <div className="np_input__bg">
                        <img className="np_img" alt="O" src ={`${window.location.origin}/ui/search.png`}></img>
                        <input className="np_input"  type="text"  onChange={this.handleChange} ></input>
                    </div>
                    {this.fabricaResultSearch(this.state.partNames)}
            </div>
        )
    }
}

export default Navigation;