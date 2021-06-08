import React, { useState } from 'react';

function Calculator() {
   const [rows, setRows] = useState([])

   return ( 
      <div>
         <table className="table">
            <thead>
               <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Sam</th>
                  <th scope="col">Carsonn</th>
                  <th scope="col">Jonathan</th>
                  <th scope="col">Jacky</th>
                  <th scope="col">Ngov</th>
               </tr>
            </thead>
            <tbody>
               <tr className="table-warning">
                  <th scope="row">1</th>
                  <td className="bg">
                     <input type="checkbox"/>
                  </td>
                  <td>
                     <input type="checkbox"/>
                  </td>
                  <td>
                     <input type="checkbox"/>
                  </td>
                  <td>
                     <input type="checkbox"/>
                  </td>
                  <td>
                     <input type="checkbox"/>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   );
}

export default Calculator;