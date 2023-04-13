import './AnimalShow.css'
import { useState } from 'react'
import bird from './assets/SVG/bird.svg'
import cat from './assets/SVG/cat.svg'
import cow from './assets/SVG/cow.svg'
import dog from './assets/SVG/dog.svg'
import gator from './assets/SVG/gator.svg'
import heart from './assets/SVG/heart.svg'
import horse from './assets/SVG/horse.svg'


const images = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse
}
export const AnimalShow = ({type}) => {
  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    setClicks(clicks + 1)
  }
  return <article className="animal-show" onClick={handleClick} >
      <img className="animal" src={images[type]} alt="animal" />
      <img className="heart" src={heart} alt="heart" style={{width: 10 + 10 * clicks}} />
    </article>
}