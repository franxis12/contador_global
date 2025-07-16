import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Controls from './components/Controls'

function App() {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState([])


  function aumentar() {
  setCount(prev => prev + 1)
  setHistory(prev => [...prev, `Aumento de ${count} a ${count + 1}`])
  }

  function duplicar() {
    if(count === 0){
      setHistory(previ => [...previ, `No se pudo duplicar por que contador es igual a 0`])
      return
    }
    setCount(prev => prev * 2)
    setHistory(prev => [...prev, `Se duplico de ${count} a ${count * 2}`])
  }

  function reiniciar() {
    if(count === 0){
      setHistory(previ => [...previ, `No se pudo reiniciar por que contador es igual a 0`])
      return
    }
    setCount(0)
    setHistory(prev => [...prev, `Se reinicio de ${count} a 0`])
  }

  return (
    <>
      <Display count={count}/>
      <Controls 
        aumentar={aumentar}
        duplicar={duplicar}
        reiniciar={reiniciar}
        />

        <h3>Historial de acciones:</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
    </>
  )
}

export default App
