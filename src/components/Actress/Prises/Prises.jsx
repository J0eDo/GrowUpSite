import React,{Component} from 'react';
import './prises_style.css';
import modelBase from '../../../contentData/modelsBase';

class Prises extends Component{    
   constructor(props){
       super(props);
       this.arr_prises  =modelBase[props.num].prises;
       this.numEnter = props.num;
       this.handlerParent = props.handler;
       this.state={
        numPage:0
        }
   }
   
   componentDidMount(){
       setInterval(() => {
           this.setState({
               numPage:this.handlerParent()
           })   
       }, 1000);
   }

   getImg(str){
       const src = `${window.location.origin}/prises/${str}.jpg`
        return(
            <img className="prise_img"  width="90px" alt={str} src={src}></img>
        )
   }

   getInfo(num){
        let strArr_2 = [];
        function formated_StringArr(){                  
            modelBase[num].prises.forEach(element => {
                let subArr = [];
                for(let key in element){
                    subArr.push(element[key])
                }
                strArr_2.push(subArr);
            });
        }
        formated_StringArr = formated_StringArr.bind(this);
        //IMPORTANT!: порядок элементов. из-за привязки к индексу
        //*проверка наличия наград
        if(modelBase[num].prises!==undefined){formated_StringArr();}
        return( 
            strArr_2.map(Element =>
                <div key={Element[0]} className="prise">
                    <div>{Element[0]}</div>                                             
                    <div>{Element[2]}</div>
                    {this.getImg(Element[1])}   
                    <div>{Element[3]}</div>
                </div>
            )
        )
   }
    render() {   
        return (
            <div className="prise_conteiner">
                {this.getInfo(this.state.numPage)}
            </div>
        );
    }
}


export default Prises; 
