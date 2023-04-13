import { useState } from 'react'
import {AnimalShow} from './AnimalShow.jsx';

import './App.css'

function App() {
  const [animals, setAnimals] = useState([])

  const randomAnimals = () => {
    const animalsArr = ['bird', 'cat', 'cow', 'dog', 'horse', 'gator']

    return animalsArr[Math.floor(Math.random() * animals.length)]
  }
  const handleClick = () => {
    let animal = randomAnimals()
    setAnimals([...animals, animal])
  }

  return (
    <div className="app">
        <h1>Animal Show</h1>
        <p>{animals.length} animals displayed</p>
        <button onClick={handleClick} className="btn">Add Animal</button>
        <section className="animal-list">{animals.map((animal, index) => {
          return <AnimalShow type={animal} key={index} />
        })}</section>
    </div>
  )
}

export default App
