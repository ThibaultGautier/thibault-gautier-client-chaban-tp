import React, { Component } from 'react';
import List from './../components/list';
import { ProgressBar } from 'react-materialize';
import { Link} from 'react-router-dom'
import Search from '../components/search'
class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
    }
  }

  // GESTION DES ERREURS
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

    // Get data from API
    fetch('http://localhost:1337')
      // parse response
    .then((res, next) => {
      console.log(res)
      if(res.ok){
        console.log("Connexion à l'API réussie")
        return res.json()
      }
      else{
        console.log('Connexion à l\'API impossible')
        next()
      }
    
    }).catch((err) => {
      if(err){
        alert("Erreur 500 : impossible de se connecter")
      }
    })
     
      // use parsed response
      .then((json) => {
        if(this.checkJsonData(json)){
          // console.log(true)
          this.setState({
            data: json,
          });
        }
      });
  }

  getWantedDatas(){
     
  }

  render() {

    const { data } = this.state;

    return (
      <div>

        <h2> HomePage </h2>
        <Search />
        {!data ? (
          <ProgressBar />
        ) : (
            <div>
                <List data={data} />
          
              </div>
            
        )}
      </div>
    );
  }

}

export default HomePage;
