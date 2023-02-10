import React from 'react'

//Se hace la equivalencia de esta funcion con la que no se encuentra comentada para hacer uso de la funsion fecha
 
/*const Hello = (props) => {
    const bornYear = () => {
      const yearNow = new Date().getFullYear()
      return yearNow - props.age
    } */

const Hello = ({name, age}) => { //Este estra forma de destructurar esta es una asignacion directa, en vez de pasarlos por los props
   
    /* const name = props.name
    const age = props.age */
    
    //const {name, age} = props //Esto es equivalente al codigo anterior destructurandolo

    const bornYear = () => new Date().getFullYear() - age

    return (
        <div>
            <p>
                Hello {name}, your are {age} years old
            </p>
            <p>
                So you were probaly born in {bornYear()}
            </p>
        </div>
    )
}

const App = () => {
    const name = 'Anna'
    const age = 36

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name='Victor' age={30 + 20} />
            <Hello name={name} age={age} />
        </div>
    )
}

export default App;