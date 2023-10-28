import React from 'react'
import ShoppingItem from './ShoppingItem'
function ShoppingCart({cart ,onDelete }){
 let handleDelete = () => {

    onDelete(item);}
  
return  <div className="shopping-cart">

  { cart.map((item, index) => (
      <ShoppingItem key={index} item={item} onDelete={handleDelete} />
      ))
     }
</div>
}
export default ShoppingCart;