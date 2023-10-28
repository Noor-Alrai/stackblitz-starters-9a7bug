import {useState} from "react";
export default function Form({addITemToCart}) {
  const [newItem, setNewItem] = useState("")
   function handleSubmit(event){
     event.preventDefault();
     addITemToCart(newItem)
     setNewItem("")
   }
   function handleOnChange(event){
     setNewItem(event.target.value);
   }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Shopping cart</h3>
      <div className="mb-3">
        <label>Item</label>
        <input type="text" value={newItem} onChange={handleOnChange} className="form-control" placeholder="item" />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
}
