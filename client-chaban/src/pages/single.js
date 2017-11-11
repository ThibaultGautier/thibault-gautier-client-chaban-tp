import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import HeaderSingle from '../components/header-single';
import Detail from '../components/detail';

const Test = () => (
  <div> RENDER PAGE 1</div>
)

let errorCode = null;

class SinglePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: null,
      date: new Date().toString(),
      from: new Date().getHours().toString(),
      to: new Date().getHours().toString(),
      raison: "",
      id_page: null
    }
  }

  // Vérification des données récupérées
  
  checkJsonData(json){
    var tempArr = [];
    Object.keys(json).forEach(function(key) {
      tempArr.push(json[key]);
    });
    tempArr.map(content => {
      console.log(content)
      if(content.date === "" || content.start === "" || content.end === "" || content.reason === "" ){
        throw new Error(content + "manquant !")
      }
    });
    return true;
  }


  componentDidMount() {
    let idPage = this.props.location.pathname;
    fetch('http://localhost:1337' + idPage)
      .then((res, next) => {
          if(res.ok){
            console.log("Connexion à l'API réussie")
            return res.json()
          }else if(res.status === "404"){
            errorCode = 404;
            next()
          }else if(res.status === "500"){
            errorCode = 500;
          }
          else{
            console.log('Connexion à l\'API impossible');
            next();
          }
        
        }).catch((err) => {
          alert("Erreur " + errorCode)
          throw new Error( "Une erreur est survenue. Code : " + errorCode )
        })
          .then((json) => {
            if(this.checkJsonData(json));
            this.setState({
              data: json,
              date: json.date,
              from: json.start,
              to: json.end,
              raison: json.reason,
              id_page: json.id
            });
          }).then(()=>console.log("ID : " + this.state.id_page + " fin id "+ this.state.date + this.state.from + this.state.raison + this.state.to));
      }

  render() {
    
    const idPage = this.props.location.pathname;
    return (
      <div>
        PAGE SINGLE
        <HeaderSingle page_id_next={this.state.id_page++} page_id_preview= {this.state.id_page--} />
        DETAILS
        <Detail date={this.state.date} from={this.state.from} to={this.state.to} detail={this.state.raison} />

      </div>
    );
  }

}

export default SinglePage;
