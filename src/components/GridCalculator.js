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
         "Anthony": {name: "Anthony", itemList: { "Pears": true, "Apples": true }}, 
         "Jacky": {name: "Jacky", itemList: { "Pears": true, "Apples": true }},
         "Jonathan": {name: "Jacky", itemList: {"Apples": true }}
      });
   const [item, setItem] = useState("Roast Beef");
   const [price, setPrice] = useState("2.99");

   function handleAddRow(name) {
      console.log(name);
      const item = {
         itemName: {name} }
      setRows(prevRows => {
         return {...prevRows, item}
      })
   }

   function handleRemoveIdxRow(index) {
      console.log("REMOVING INDEX " + index)
      const myRows = rows
      myRows.splice(index, 1)
      console.log(myRows)
      setRows(prevRows => ([...myRows]))
   }

   function handleAddHeader(name) {
      console.log(name);
      setHeader(prevHeader => {
         return [...prevHeader, name]
      })
   }

   function handleAddRow(item, price) {
      console.log(price + " " + item);
      if (item !== "" && price !== 0) {
         setRows(prevRows => {
            return [...prevRows, {itemName: item, price: price, count: 0}]
         })
         // setItem("") used to reset input fields
         // setPrice("") used to reset input fields
         console.log("DEPTH")
      }
   }

   function testClick() {
      console.log("CLICKED")
   }
   
   function testCheckedBox(event, rowIndex, colIndex) {

      const myRows = rows
      // console.log(myRows)
      console.log(event.target.checked)
      
      // This accounts for the number of people that are pitching in for item, based off of the check box status
      if (event.target.checked) {
         myRows[rowIndex].count++
      }
      else {
         myRows[rowIndex].count--
      }

      if (myRows[rowIndex].count > 0) {
         myRows[rowIndex].splitPrice = (myRows[rowIndex].price / myRows[rowIndex].count).toFixed(2)
      }
      console.log(rows[rowIndex])
      // console.log("rIdx: " + rows[rowIndex].itemName + " " + "cIdx: " + header[colIndex + 2])
   }

   function handleRemoveLastRow() {
      setRows(rows.slice(0, -1))
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
               {/* {Object.keys(shoppers).map((shopper, index) => {
                  console.log(shoppers[shopper])
               })} */}
               <div class="col-1"/>
            </div>
               {/* {rows.map((row, rowIndex) => (
                  <div className="row text-center">
                     <div className="col pt-2 bg-light">
                        {row.itemName}
                        {rowIndex}
                     </div>
                     <div class="col pt-2 bg-light">
                        {row.price}
                     </div>
                     {header.slice(2).map((item, colIndex) => (
                        <div className="col pt-2 bg-light">
                           <input type="checkbox" onChange={(event) => testCheckedBox(event, rowIndex, colIndex)} />
                           {colIndex}
                        </div>
                     ))}
                     <div className="col-1 bg-light">
                        <button type="button" className="btn btn-light" onClick={() => handleRemoveIdxRow(rowIndex)}>
                           <BsX/>
                        </button>
                     </div>
                  </div>
               ))} */}
               {Object.keys(items).map((item, index) => (
                  <div className="row text-center">
                     {items[item]["itemName"]}
                  </div>
               ))}

            <div className="container-fullwidth">
               <form>
                  <div className="row ">
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