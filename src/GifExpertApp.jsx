import {useState} from 'react'
import { AddCategory, GifGrid } from './components';
export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState([]);
  // console.log(categories)

  const onAddCategory = ( NewValue) =>{
    //  console.log(onNewValue)
  if(categories.includes(NewValue)){
    return
  }
    setCategories([NewValue,...categories])
    // setCategories(cat=>[...categories,'Yugi-oh'])
    
  }

  return (
    <>
    {/*Titulo */}
    <h1>GifExpertApp</h1>
    {/*imput */}
    <AddCategory 
    // setCategories={setCategories}
    onNewValue={onAddCategory}
    />
    
      { 
        categories.map( (category) => (        
        <GifGrid
        key={category}
        category={category} />
        ))
      
      }
    
    </>
  )
}
