import React,{Component} from 'react';
import './searchVideo_style.css';





class SearchVideo extends Component{
    

    constructor (props){
        super(props);
        this.video = props.video;
    }

    getActress(){
        /**TO DO */
        return null;
    }

    getPlayer(){
        return(
            <div className="player" >
            <video href={this.video.url} width="100%" height="100%" poster="poster.gif" controls /> 
            <source src="video/duel.ogvhttps://youtu.be/MSc9pbtTrxU" type='video/ogg; codecs="theora, vorbis"'></source>
            </div>
        )
    }

    getInfo(){
        const _src = `${window.location.origin}/video/${this.video.name}/${this.video.post}`;
        return(
        <div className="infoVideo">
            <h2>{this.video.name}</h2>
            <div className="infoVideoBlock">
                <div className="infoVideoBlock_post">
                    <img src={_src} alt={"POST"}></img>
                </div>
                <div className="infoVideoBlock_text">
                    <p>Продолжительность : {this.video.timeLine||"неизвестно"}</p>
                    <p>Год : {this.video.year||"неизвестно"}</p>
                    <p>Категория : {this.video.category||"неизвестно"}</p>
                    {this.getActress()}
                </div>
            </div>
        </div>)
    }

    render(){
              
        return(
            <div>
                {this.getPlayer()}
                {this.getInfo()}
            </div>
        )
    }
}

export default SearchVideo;