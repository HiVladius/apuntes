import React, { useState } from 'react';

const History = (props) => { //Esto se llama renderizado condicional
  if (props.allClicks.length === 0) {
    return(
      <div>
        the app is used by pressing the button
      </div>
    )
  }
  return(
    <div>
      button press History: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([]) // esta parte ayuda a que recuerde los clicks ocurridos

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }


  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App;
