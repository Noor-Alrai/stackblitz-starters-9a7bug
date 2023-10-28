import ShoppingCart from './ShoppingCart'
export default function ShoppingList({ cart, handleItemDelete }) {
  let handleDelete = () => {

    handleItemDelete(item)}
  return (
    <div className="shopping-cart">
      <h3>Shopping cart</h3>
     <ShoppingCart cart={cart} onDelete={handleDelete} />

    </div>
  );
}
