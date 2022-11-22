import React from "react";
import Showsupplierrate from "./Showsupplierrate";

function SupplierRateOverlap(props) {
  console.log(props)
  return (
    <div>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th>Supplier Rate ID</th>
                    <th>SupplierID</th>
                    <th>Rate</th>
                    <th>RateStartDate</th>
                    <th>RateEndDate</th>
                    <th>CreatedBy</th>
                    <th>CreatedOn</th>
                </tr>
            </thead>
            <tbody>
               {props.SupplierRateOverlapData.map((i) => (
                   <Showsupplierrate SupplierRateId= {i.supplierRateId}
                                     SupplierId= {i.supplierId}
                                     Rate= {i.rate}
                                     RateStartDate= {i.rateStartDate}
                                     RateEndDate= {i.rateEndDate}
                                     CreatedBy= {i.createdBy}
                                     CreatedOn= {i.createdOn} />
               ))};

            </tbody>
        </table>
    </div>

  )
};

export default SupplierRateOverlap;
