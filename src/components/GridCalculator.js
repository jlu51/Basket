import React, { useState } from 'react';

function GridCalculator() {
   const [rows, setRows] = useState([
      {itemName: "Apples"}, {itemName: "Pears"}]);
   const [header, setHeader] = useState(["Item", "Sam", "Jacky", "Jonathan"]);

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

   return ( 
      <div>
         <div class="container">
            <button type="button" className="btn btn-primary" onClick={() => handleAddHeader("Carsonn")}>Primary</button>
            <div class="row bg-dark text-white">
               {header.map(item => (
                  <div class="col">
                     {item}
                  </div>
               ))}
            </div>
            {rows.map(row => (
                  <div className="row">
                     <div class="col bg-light">
                        {row.itemName}
                     </div>
                     {header.slice(1).map(item => (
                        <div class="col">
                           <input type="checkbox"/>
                        </div>
                     ))}
                  </div>
               ))}


            {/* <div class="row">
               <div class="col bg-light">
                  Apples
               </div>
               <div class="col bg-success">
                  <input type="checkbox"/>
               </div>
               <div class="col bg-success">
                  <input type="checkbox"/>
               </div>
               <div class="col bg-success">
                  <input type="checkbox"/>
               </div>
               <div class="col bg-success">
                  <input type="checkbox"/>
               </div> 
            </div> */}
         </div>
      </div>
   );
}

export default GridCalculator;