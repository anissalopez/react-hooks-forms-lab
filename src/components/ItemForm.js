import React, { useState } from "react";

import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce"
   })
  
  function handleOnChange(e){
    const name = e.target.name;
    const value = e.target.value;
      
        
    setFormData({...formData, [e.target.name]: e.target.value})

       }
  
function handleSubmit(e){
  e.preventDefault();
  const newItem = {
    id: uuid(),
    name: formData.name,
    category: formData.category
    }
onItemFormSubmit(newItem)
}
  return (

    <form className="NewItem" onSubmit={handleSubmit} >
      <label >
        Name:
        <input type="text" name = "name" onChange={handleOnChange} value={formData.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleOnChange} value={formData.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
