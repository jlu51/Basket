import React from 'react';
import { BsX } from "react-icons/bs";


const InputForm = ({shoppers, setShoppers, changePage}) => {

   const [shopperName, setShopperName] = React.useState("")

   const addShopper = () =>  {
      console.log("Before Add:", shoppers)
      setShoppers({...shoppers, [shopperName]: {name: shopperName, itemList: {}}})
      console.log("After Add:", shoppers)
      setShopperName("")
   }
   
   const handleRemoveShopper = (nameToRemove) => {
      const updatedShoppers = {...shoppers}
      for (var name in updatedShoppers) {
         if (name == nameToRemove) {
            delete updatedShoppers[name]
         }
      }

      setShoppers(updatedShoppers)
   }

   return (
      <div>
         <div className="container-fluid">
            <div className="row justify-content-center">
               <div className="col bg">
                  <div className="row">
                     <div className="col" div/>
                     <div className="col">
                        <div className="row">
                           <div className="col bg-dark text-white">
                              Name
                           </div>
                        </div>
                        {!Object.keys(shoppers).length == 0 
                           ? 
                           <div>
                              {Object.keys(shoppers).map((name) => (
                                 <div>
                                    <div className="row bg-success">
                                       <div className="col-8">
                                          {name}
                                       </div>
                                       <div className="col-1">
                                          <button type="button" className="btn" onClick={() => handleRemoveShopper(name)}>
                                             <BsX/>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                           :
                           <div className="col"> Add a shopper </div>}
                     </div>
                     <div className="col" div/>
                  </div>
                  <form>
                     <div className="row">
                        <div className="col"/>
                        <div className="col">
                           <label for="inputItem">Item</label>
                           <input type="text" className="form-control" value={shopperName} id="inputItem" onChange={e => setShopperName(e.target.value)}/>
                        </div>
                        <div className="col">
                           <div className="row">
                              <div className="col">
                                 <button type="button" className="mt-4 btn btn-primary" onClick={addShopper}>Add Person</button>
                              </div>
                              <div className="col">
                                 <button type="button" className="mt-4 btn btn-primary" onClick={() => changePage('table')}>Test Submit</button>
                              </div>
                           </div>
                        </div>
                        <div className="col"/>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default InputForm;