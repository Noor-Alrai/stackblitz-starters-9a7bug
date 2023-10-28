import React from 'react'
 function ShoppingItem({ item, onDelete  }) {
  let handleDelete = () => {

    onDelete(item);}
  return<div>
    <p>{item}</p>
    <button onCliCK={handleDelete}>Remove</button>
  </div> ;
}
export default ShoppingItem