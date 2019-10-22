import React,{Component} from 'react';
import './videoteka.css';
import videoteca from '../../contentData/videos.json';



class Videoteka extends Component{  
    constructor(props){
        super(props);
        this.videos = this.getVideoPosters(props.numberGet);
        this.videoHandler = props.handler;
        this.textBlock = props.textBlock;
    }
    
   getVideoPosters(num){
        let videoPosters =[];
        const validNum = (num<=4)&&(num<=videoteca.length)
        if(!validNum){num=3}
        for(let index=0;index<num;index++){
            videoPosters.push(videoteca[index])
        }
        return videoPosters;
   }

   openedVideo=(video)=>{
        this.videoHandler("watchingVideo",video)
    }

   constructVideo(video){
       const openedVideo = this.openedVideo.bind(this);  
        function playHandler(){
            openedVideo(video);
       }
       let _src = `${window.location.origin}/video/${video.name}/${video.post}`
       return(
           <div onClick={playHandler} key={_src} className="theNewVideo">   
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

   responeOnServer =(event)=>{
       event.preventDefault();
   }

   searchVideo(){
       const _src = `${window.location.origin}/ui/whore1p.png`
       if(!this.textBlock){
            return(
                <form className="search_videoForm" action="submit">
                    <img src={_src} alt="PNG"/>
                    <button onClick={this.responeOnServer}>Искать</button>
                    <input type="text"/>
                </form>
            )
        }else{
            return null;
        }
   }

    render(){
        return(
            <div>
                <div className="newVideo_block">
                    {this.searchVideo()}
                    {this.getTextElement()}
                    <div className="video_conteiner">
                        {this.getVideos()}
                    </div>
                </div>
           </div>
        )
    }
}

export default Videoteka;