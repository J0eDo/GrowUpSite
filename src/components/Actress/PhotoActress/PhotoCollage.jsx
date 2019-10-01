import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import RisePhoto from "./RisePhoto"
import './photoCollage_style.css';
import modelBase from '../../../contentData/modelsBase';


class PhotoCollage extends Component{    
    constructor(props){
        super(props);
        this.model = modelBase[props.numPage];
        this.handlerParent = props.handler;
        this.state = {numPage:0,
            risePhotoURL:""
        }
        this.getImgName();
        this.risePhotoHandler = this.risePhotoHandler.bind(this);
    }
    
    //*неужели это единственный способ?это грузит машину?
    componentDidMount(){
        setInterval(() => {
            this.setState({
                numPage:this.handlerParent()
            })   
        }, 200);
    }
    fullDisplayHandler(url){
        this.setState({
            risePhotoURL:url
        })
       
    }
    risePhotoHandler(normalMode){
        if(normalMode){
            this.setState({
                risePhotoURL:""
            })
            return this.state.photoURL;
        }
        return this.state.risePhotoURL;
    }

    getImgName(){
        let photoName = [];
        for(let key in this.model.photo)
        {
            photoName.push(key);     
        }
        return photoName;
    }

    constructImgURL(num){
        let photoURL = [];
        try{
            const imgNames = this.getImgName();
            imgNames.forEach(Element =>{
                for(let i=1; i<modelBase[num].photo[Element];i++){
                    let _photoURL = `${window.location.origin}/models/${modelBase[num].name}/${Element}${i}.jpg`
                    photoURL.push(_photoURL);
                }
            })
        }
        catch{

        }
        return photoURL;
    }

    constructorMiniPhoto(num){
        const imgURL = this.constructImgURL(num);
        return(        
            imgURL.map(Element =>
                <img key={Element} onClick={this.fullDisplayHandler.bind(this,Element)} className="pc_miniPhoto" src={Element} alt={Element}></img>
        ))
    }

    render() {
        const modal = document.getElementById("modal");
        const src = `${window.location.origin}/models/${modelBase[this.state.numPage].name}/p1.jpg`;
        return (
            <div className="photoCollage">
                {ReactDOM.createPortal(
                    <RisePhoto url={this.state.risePhotoURL} handler={this.risePhotoHandler}/>,modal)}
                <div>
                    <img className="pc_bigPhoto" src={src} alt="PHOTO"></img>
                </div>
                <div className="pc_conteinerMiniPhoto">
                   {this.constructorMiniPhoto(this.state.numPage)}
                </div> 
            </div>
        );
    }
}


export default PhotoCollage; 
