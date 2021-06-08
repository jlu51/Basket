import React, { useState } from 'react';

function GridCalculator() {
   const [rows, setRows] = useState([
      {itemName: "Apples", price: 4.99}, {itemName: "Pears", price: 10.99}]);
   const [header, setHeader] = useState(["Item", "Price", "Anthony", "Jacky", "Jonathan"]);
   const [item, setItem] = useState("");
   const [price, setPrice] = useState(0);

   function handleAddRow(name) {
      console.log(name);
      const item = {
         itemName: {name} }
      setRows(prevRows => {
         return {...prevRows, item}
      })
   }

   function handleAddHeader(name) {
      console.log(name);
      setHeader(prevHeader => {
         return [...prevHeader, name]
      })
   }

   function handleAddRow(item, price) {
      console.log(price + " " + item);
      if (item != "" && price != 0) {
         setRows(prevRows => {
            return [...prevRows, {itemName: item, price: price}]
         })
      }
   }

   function handleRemoveLastRow() {
      setRows(rows.slice(0, -1))

   }

   return ( 
      <div>
         <div className="container">
            <button type="button" className="btn btn-primary" onClick={() => handleAddHeader("Carsonn")}>Add Person</button>
            <div className="row bg-dark text-white text-center">
               {header.map(head => (
                  <div class="col">
                     {head}
                  </div>
               ))}
            </div>
            {rows.map(row => (
                  <div className="row text-center">
                     <div class="col bg-light">
                        {row.itemName}
                     </div>
                     <div class="col bg-light">
                        {row.price}
                     </div>
                     {header.slice(2).map(item => (
                        <div class="col bg-light">
                           <input type="checkbox"/>
                        </div>
                     ))}
                  </div>
               ))}
            
            <div className="container-fullwidth">
               <form>
                  <div class="row ">
                     <div className="col">
                        <label for="inputItem">Item</label>
                        <input type="text" class="form-control" placeholder="Arby's Roast Beef Sandwich" id="inputItem" onChange={e => setItem(e.target.value)}/>
                     </div>
                     <div className="col">
                        <label for="inputPrice">Price</label>
                        <input type="text" class="form-control" placeholder="2.99" id="inputPrice" onChange={e => setPrice(e.target.value)}/>
                     </div>
                     <div className="col">
                        <button type="button" className="mt-4 btn btn-primary" onClick={() => handleAddRow(item, price)}>Add Item</button>
                     </div>
                     <div className="col">
                        <button type="button" className="mt-4 btn btn-danger" onClick={handleRemoveLastRow}>Delete Last Item</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}

export default GridCalculator;