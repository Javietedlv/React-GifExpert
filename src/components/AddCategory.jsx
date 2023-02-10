import { useState } from "react"


export const AddCategory = ({onNewValue}) => {

  const [ inputValue, setinputValue] = useState('');

  const OnInputChange = ({target}) => {
    setinputValue(target.value);
  }

  const onSubmit = (event) =>{
    event.preventDefault();
 
    if(inputValue.trim().length <= 1) return;

    // setCategories(categories =>[inputValue, ...categories]);
    onNewValue(inputValue.trim());
    setinputValue('');
  }

  return (
    <form onSubmit={(event)=> onSubmit(event)}>
      <input
      type = "Text"
      placeholder="Buscar gifs"
      value={inputValue}
      onChange={(event) =>OnInputChange(event)}
      />
    </form>
  )
}
