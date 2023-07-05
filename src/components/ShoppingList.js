import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState("");
  



  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    
  }

  function onSearchChange(e){
    setSearchItem(e.target.value);
  
  }



  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All"){return true}
    if(item.category === selectedCategory) {return item};
  }).filter((item) => item.name.toLowerCase().includes(searchItem.toLowerCase()))


 
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} selectedCategory={selectedCategory} search={searchItem}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
