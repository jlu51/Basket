import React, { useState } from 'react';
import { BsX } from "react-icons/bs";
import ResultGrid from './ResultGrid';

function GridCalculator() {
   const [rows, setRows] = useState([{itemName: "Apples", price: 4.99, count: 0, splitPrice: 0}, {itemName: "Pears", price: 10.99, count: 0, splitPrice: 0}]);
   const [items, setItems] = useState(
      {
        "Apples": {itemName: "Apples", price: 4.99, count: 0, splitPrice: 0}, 
        "Pears": {itemName: "Pears", price: 10.99, count: 0, splitPrice: 0}
      });
   const [header, setHeader] = useState(["Item", "Price", "Bob", "Doug", "John"]);
   const [shoppers, setShoppers] = useState(
      {
         "Bob": {name: "Bob", itemList: {}}, 
         "Doug": {name: "Doug", itemList: {}},
         "John": {name: "John", itemList: {}}
      });
   const [item, setItem] = useState("");
   const [price, setPrice] = useState("");
   const [toggleTotals, setToggleTotals] = useState(false)

   function handleAddRow(item, price) {
      console.log(price + " " + item);
      if (!(item in items) && item !== "" && price !== 0) {  // Create two error messages, one for bad input, another for al;ready entered item name
         setItems({...items, [item]: {itemName: item, price: price, count: 0}})
         setItem("")
         setPrice("")
         console.log("DEPTH")
      }
   }

   const handleRemoveItem = (itemToRemove) => {
      // remove item from everybody's item list
      const updatedItems = {...items}
      const updatedShoppers = {...shoppers}
      for (var person in updatedShoppers) {
         for (var item in updatedShoppers[person]["itemList"]) {
            if (item == itemToRemove) {
               console.log("MATCHED")
               delete updatedShoppers[person]["itemList"][item]
            }     
         }
      }
      //udpate the count and splitPrice
      for (var item in updatedItems) {
         if (item == itemToRemove) {
            console.log("MATCHED2")
           delete updatedItems[item]
         }
      }

      // set the new state of items, shoppers, and hide total cost
      setToggleTotals(false)
      setShoppers(updatedShoppers)
      setItems(updatedItems)
   }
   
   // Function written as an arrow function
   const handleCheckBox = (event, item, name) => {
      if (event.target.checked) {
         items[item]["count"] = items[item]["count"] + 1
         const updatedShoppers = {...shoppers}
         updatedShoppers[name]["itemList"][item] = true
         setShoppers(updatedShoppers)
      }
      else {
         items[item]["count"] = items[item]["count"] - 1
         const updatedShoppers = {...shoppers}
         delete updatedShoppers[name]["itemList"][item]
         setShoppers(updatedShoppers)
      }

      if (items[item]["count"] > 0) {
         items[item]["splitPrice"] = (items[item]["price"] / items[item]["count"]).toFixed(2)
      }

      setToggleTotals(false)
      console.log(items)
      console.log(shoppers)
   }

   // We do not need the constant updates, because we are adding extra side effects, and it is hard to keep track of the total for each person while still checking boxes
   const updateCosts = () => {
      Object.keys(shoppers).map((person, personIdx) => {
         console.log(person)
         console.log(shoppers[person]["itemList"])
         Object.keys(shoppers[person]["itemList"]).map((itemName) => {
            shoppers[person]["amountOwed"] = parseFloat(shoppers[person]["amountOwed"]) + parseFloat(items[itemName]["splitPrice"])
         })
      })
   }

   return ( 
      <div>
         <div className="container">
            {/* <button type="button" className="btn btn-primary" onClick={() => handleAddHeader("Carsonn")}>Add Person</button> */}
            <div className="row bg-dark text-white text-center">
               <div className="col">
                  Item
               </div>
               <div className="col">
                  Price
               </div>
               {Object.keys(shoppers).map((name, index) => (     // Last brace has to be reg parethn bc mapping to a JSX
                  <div className="col">
                     {name}
                  </div>
               ))}
               <div class="col-1"/>
            </div>
               {Object.keys(items).map((item, itemIdx) => (
                  <div className="row text-center">
                     <div className="col pt-2 bg-light">
                        {items[item]["itemName"]}
                     </div>
                     <div className="col pt-2 bg-light">
                        {items[item]["price"]}
                     </div>
                     {Object.keys(shoppers).map((person, personIdx) => (
                        <div className="col pt-2 bg-light">
                           <input type="checkbox" onChange={(event) => handleCheckBox(event, item, person)} />
                        </div>
                     ))}
                     <div className="col-1 bg-light">
                        <button type="button" className="btn btn-light" onClick={() => handleRemoveItem(item)}>
                           <BsX/>
                        </button>
                     </div>
                  </div>
               ))}
            <div className="container-fullwidth">
               <form>
                  <div className="row">
                     <div className="col">
                        <label for="inputItem">Item</label>
                        <input type="text" className="form-control" value={item} placeholder="Arby's Roast Beef Sandwich" id="inputItem" onChange={e => setItem(e.target.value)}/>
                     </div>
                     <div className="col">
                        <label for="inputPrice">Price</label>
                        <input type="text" className="form-control" value={price} placeholder="2.99" id="inputPrice" onChange={e => setPrice(e.target.value)}/>
                     </div>
                     <div className="col">
                        <button type="button" className="mt-4 btn btn-primary" onClick={() => handleAddRow(item, price)}>Add Item</button>
                     </div>
                  </div>
               </form>
            </div>
            <ResultGrid items={items} shoppers={shoppers} toggleTotals={toggleTotals} setToggleTotals={setToggleTotals} />
         </div>
      </div>
   );
}

export default GridCalculator;