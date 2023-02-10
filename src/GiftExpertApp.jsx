
import { useState} from 'react';
import { AddCategory,GiftGrid } from './components';    // eso se puede hacer gracias al index
// import { AddCategory } from './components/AddCategory';
// import { GiftGrid } from './components/GiftGrid';

export const GiftExpertApp = () => {

const [categories, setCategories] = useState([  'Science pinkman'])



const onAddCategory = (newValue)=>{
    // console.log(newValue);
//  categories.push("newValue");
// setCategories([ ...categories,  "Mr.White"])

if(categories.includes(newValue)){
return
}else{
setCategories([newValue, ...categories])
}

};


  return (
    <>
    {/* Titulo */}
    <h1>GiftExpertApp </h1>
    
    {/* Input */}
    <AddCategory 
    // setCategories={setCategories}
      onNewValue ={event => onAddCategory(event)}
      // CurrentCategories ={ categories}
    />
    {/* Listado gifs */}

    
      {categories.map(category =>{

          return (  
              <GiftGrid 
                key={category} 
                category = {category}/>

                 )
      })}
    </>
  )
}