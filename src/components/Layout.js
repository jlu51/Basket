import React, { useState } from 'react';
import GridCalculator from './GridCalculator';
import InputForm from './InputForm';
import { FaShoppingBasket } from "react-icons/fa";

// Main container for app, swtiches from the input form to table setPage

const Layout = () => {

   const [page, setPage] = useState('form');
   const [shoppers, setShoppers] = useState({});

   return (
      <div>
         <nav className="navbar navbar-dark bg-dark mb-3">
            <a className="navbar-brand" href="/">
               <div className="container">
                  <div className="row">
                     <div className="col bg-">
                        <div className="col">
                           <FaShoppingBasket size={22}/>
                           <h6>basket</h6>
                        </div>
                     </div>
                  </div>
               </div>
            </a>
         </nav>
         {page === 'form' && <InputForm shoppers={shoppers} setShoppers={setShoppers} changePage={setPage} />}
         {page === 'table' && (
            <GridCalculator shoppers={shoppers} setShoppers={setShoppers} changePage={setPage}/>
         )}
      </div>
   );
};

export default Layout;