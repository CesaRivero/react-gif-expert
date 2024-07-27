import { useState } from "react"


export const AddCategory = ({onNewValue}) => {
 const [inputValue, setInputValue] = useState('');

 const onInputChange =({target}) => {
    setInputValue(target.value)

 }

 const onSubmit= (event) => {

    event.preventDefault()
    if (inputValue.trim().length <=1) return; //para que envie con menos de 1 caracter
    
    // setCategories(categories =>[inputValue,...categories]);
    onNewValue(inputValue.trim())
    setInputValue('')
 }

 return (

    <form onSubmit={onSubmit}>
<input 
        type="text" 
        placeholder="Bucar gif" 
        value={inputValue}
        onChange={onInputChange }
        
        />

    </form>
  )
}
