import React from "react";
import Showsupplier from "./Showsupplier";

function Supplierdetails(props) {
  return (
    <div>

        <table className="table">
            <thead className="thead-dark">
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>CreatedBy</th>
                  <th>CreatedOn</th>
              </tr>
            </thead>
            <tbody>
              {props.SupplierData.map((item) => (
                     <Showsupplier SupplierId={item.supplierId}
                                  Name={item.name}
                                  CreatedOn={item.createdOn}
                                  CreatedBy={item.createdBy}
                                  Address={item.address} />
                  ))}

            </tbody>
        </table>
    </div>
  )
};

export default Supplierdetails;
