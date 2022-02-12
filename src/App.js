import React, {Component} from 'react'
import './App.css'
class App extends Component{
  
  state = {
    pessoas:[
      {
        nome: "Jason",
        idade: 16
      },
      {
        nome: "Piper",
        idade: 16
      },
      {
        nome: "Leo",
        idade: 15
      },
      {
        nome: "Percy",
        idade: 16
      },
      {
        nome: "Annebeth",
        idade: 16
      },
      {
        nome: "Nico",
        idade: 12
      }
    ]
  }

  render(){
    return(
      <main>
        {this.state.pessoas.map((item) => (
          <div className="container">
            <h2>Nome: {item.nome}</h2>
            <p>idade: {item.idade}</p>
          </div>
        ))}
      </main>
    )
  }
}

export default App