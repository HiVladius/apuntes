import React, { useState } from "react";

const Display = props => <div>{props.value}</div>

const Button = (props) =>{
    <button onClick={props.handleClick}>
        {props.text}
    </button>
}

const App = () => {
    const [value, setValue] = useState(10)

    //Este es el uso de una funcion dentro de otra funcion

    const setToValue = (newValue) => {
        setValue(newValue)
    }
    
   

    //    Ahora podemos definir el controlador de eventos como una función que llama a la función 
    //    setToValue con un parámetro apropiado. El controlador de eventos para restablecer el estado 
    //    de la aplicación sería:

    return (
        <div>
            <Display value={value}/>
            <Button handleClick={()=> setToValue(1000)} text='thousand' />
            <Button handleClick={()=> setToValue(0)} text='reset' />
            <Button handleClick={()=> setToValue(value + 1)} text='increment' />
        </div>
    )
}




export default App