import React, { useState } from 'react';
import { BsX } from "react-icons/bs";

const PriceSplitter = ({items, shoppers}) => {
   return (
      <div>
         {shoppers.map}
      </div>
   )

}

function GridCalculator() {
   const [rows, setRows] = useState([{itemName: "Apples", price: 4.99, count: 0, splitPrice: 0}, {itemName: "Pears", price: 10.99, count: 0, splitPrice: 0}]);
   const [items, setItems] = useState(
      {
        "Apples": {itemName: "Apples", price: 4.99, count: 0, splitPrice: 0}, 
        "Pears": {itemName: "Pears", price: 10.99, count: 0, splitPrice: 0}
      });
   const [header, setHeader] = useState(["Item", "Price", "Anthony", "Jacky", "Jonathan"]);
   const [shoppers, setShoppers] = useState(
      {
         "Anthony": {name: "Anthony", itemList: {}, amountOwed: 0}, 
         "Jacky": {name: "Jacky", itemList: {}, amountOwed: 0},
         "Jonathan": {name: "Jacky", itemList: {}, amountOwed: 0}
      });
   const [item, setItem] = useState("Roast Beef");
   const [price, setPrice] = useState("2.99");

   function handleRemoveItem(item) {
      console.log("REmoving item " + item)
      const newItems = {...items}      
      delete newItems[item]
      console.dir(newItems)
      setItems(newItems)
   }

   function handleAddHeader(name) {
      console.log(name);
      setHeader(prevHeader => {
         return [...prevHeader, name]
      })
   }

   function handleAddRow(item, price) {
      console.log(price + " " + item);
      if (!(item in items) && item !== "" && price !== 0) {  // Create two error messages, one for bad input, another for al;ready entered item name
         setItems({...items, [item]: {itemName: item, price: price, count: 0}})
         // setItem("") used to reset input fields
         // setPrice("") used to reset input fields
         console.log("DEPTH")
      }
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
         // shoppers[name]["itemList"][item] = false
      }

      if (items[item]["count"] > 0) {
         items[item]["splitPrice"] = (items[item]["price"] / items[item]["count"]).toFixed(2)
      }


      // updateCosts()
      
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
                     {name + " " + index}
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
                  <div className="row">
                     {Object.keys(shoppers).map((person, personIdx) => (
                        <div className="col mt-4">
                           <div className="row bg-dark text-white">
                              {person}
                           </div>
                           {Object.keys(shoppers[person]["itemList"]).map((itemName, itemNameIdx) => (
                              <div className="row bg-light">
                                 <div className="col">
                                    {itemName}
                                 </div>
                                 <div className="col">
                                    {items[itemName]["splitPrice"]}
                                 </div>
                              </div>
                           ))}
                           {/* <div className="row bg-light">
                              {shoppers[person]["amountOwed"]}
                           </div> */}
                        </div>
                     ))}
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}

export default GridCalculator;