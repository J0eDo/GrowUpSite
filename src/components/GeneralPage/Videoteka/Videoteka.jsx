import React,{Component} from 'react';
import {render} from 'react-dom';
import './videoteka_style.css';
import videoteca from '../../../contentData/video.json';
import SearchVideo from '../../SearchVideo/SearchVideo';
   


class Videoteka extends Component{
    
    constructor(props){
        super(props);
        this.videos = this.getLastVideo(props.numberGet);
        this.videoHandler = props.handler;
        /**true = miniComponentMode false = maxComponentMode */
        this.textBlock = props.textBlock;
    }
    
   getLastVideo(num){
        let arr =[];
        const validNum = (num<=4)&&(num<=videoteca.length)
        if(!validNum){num=3}
        for(let index=0;index<num;index++){
            arr.push(videoteca[index])
        }
        return arr;
   }

   openedVideo=(video)=>{
    
        this.videoHandler("Просмотр",video)
   }

   constructVideo(video){
       const openedVideo = this.openedVideo.bind(this);  
        function playHandler(){
            openedVideo(video);
       }
       let _src = `${window.location.origin}/video/${video.name}/${video.post}`
       return(
           <div value={23} onClick={playHandler} key={_src} className="theNewVideo">   
                <img src={_src} alt={"post"}></img>
                <a href="#">{video.name}</a>
           </div>
       )
   }

   getVideos(){
       return(
            this.videos.map(element => 
               this.constructVideo(element)
            )
       )
   } 

   getTextElement(){
        if(this.textBlock){
            return(
                <h2>{this.textBlock}</h2>
            )
        }
   }

    render(){
        return(
            <div className="newVideo_block">
               {this.getTextElement()}
                <div className="video_conteiner">
                    {this.getVideos()}
                </div>
           </div>
        )
    }
}

export default Videoteka;