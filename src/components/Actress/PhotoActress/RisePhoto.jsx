import React,{Component} from 'react';
import './photoCollage.css';



class RisePhoto extends Component{    
    constructor(props){
        super(props);
        this.src = props.url; 
        this.handlerParent=props.handler;
        this.state={
            src : this.handlerParent()
        }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                src:this.handlerParent()
            })  
        }, 200);
    }
    closeSrc =()=>{
        this.handlerParent("exitFullscreenMode");
    }
    componentWillUnmount(){
        
    }
    getRisePhoto(_src_){
        if(_src_){
            return (
                <div className="risePhoto_BG">
                    <img onClick={this.closeSrc} className="risePhoto" src={_src_} alt={_src_}></img>
                </div>
            )
        }else{return null}
    }
    render() {
        return(this.getRisePhoto(this.state.src))   
    }
}


export default RisePhoto; 
