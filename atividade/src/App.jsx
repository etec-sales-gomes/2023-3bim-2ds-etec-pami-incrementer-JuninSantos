import { useState } from 'react'
import { Botao } from './components/button'
import { Contador } from './components/contador'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function Incremento() {
    setCount(count + 1);
  }

  function Decremento() {
    setCount(count - 1);
  }
  return (
    <>
      <div className="All">
        <header>
          <div className="tittle">
            <h1>A cada gol dele clique no botão</h1>
            <h2>Projeto em REACT</h2>
            <div className="buttons">
              <Botao onClick={Decremento} text='-' />
              
                <Contador count={count} />
              
              <Botao onClick={Incremento} text='+' />
            </div>
          </div>
        </header>
        <div className="container">

        </div>
      </div>
    </>
  )
}

export default App
