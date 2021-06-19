import React, { useState } from 'react';

const ResultGrid = ({items, shoppers, toggleTotals, setToggleTotals}) => {

   const [totalList, setTotalList] = useState({})

   const calculateTotals = () => {
      const updatedTotalList = {...totalList}
      for (var person in shoppers) {
         var sumOfPrices = 0
         for (var item in shoppers[person]["itemList"]) {
            sumOfPrices = sumOfPrices + parseFloat(items[item]["splitPrice"])
         }
         updatedTotalList[person] = sumOfPrices
      }

      setTotalList(updatedTotalList)
      console.log(updatedTotalList)
      setToggleTotals(true)
   }

   return (
      <div className="container mt-5">
         <div className="row justify-content-around">
            {Object.keys(shoppers).map((person) => {
               return (
                  <>
                     <div className="col-2">
                        <div className="row justify-content-around">
                           <div className="col bg-dark text-white text-center">
                              {person}
                           </div>
                           {Object.keys(shoppers[person]["itemList"]).map((item, index) => (
                              <div className="row bg-light">
                                 <div className="col">
                                    {index + 1}
                                 </div>
                                 <div className="col-5 text-center">
                                    {item}
                                 </div>
                                 <div className="col">
                                    {items[item]["splitPrice"]}
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </>
               )})}
         </div>

         {toggleTotals && <div className="row justify-content-around">
            {Object.keys(totalList).map((name) => (
               <div className="col-2 bg-success text-white text-center">
                  <div className="row">
                     <div className="col">
                        Total
                     </div>
                     <div className="col">
                        {totalList[name]}
                     </div>
                  </div>
               </div>
            ))}
         </div>}

         <div className="row mt-4 justify-content-center">
            <div className="col-3">
               <div className="row">
                  <button type="button" className="btn btn-primary" onClick={calculateTotals}>
                     Calculate Totals
                  </button>
               </div>
            </div>  
         </div>
      </div>
   );
};

export default ResultGrid;