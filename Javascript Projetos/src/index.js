import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function sum(a,b){
  return a + b
}

function numPar(n1){
  return n1 % 2 === 0 ? <p>Verdadeiro</p> : <p>Falso</p>
}


const PrimeiroJSX = () =>{
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>Lucas Gabriel</h2>
      <h3>Soma : {sum(10,30)}</h3>
      <h4> O numero 4 e par? {numPar(4)} </h4>
    </div>
  )

}


const App = () => {

  return (
    <div className="App">
      {PrimeiroJSX()}
      {}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)


