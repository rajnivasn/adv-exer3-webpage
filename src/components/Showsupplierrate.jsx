import React from "react";

function Showsupplierrate(props) {
  return (
    <tr>
        <td>{props.SupplierRateId}</td>
        <td>{props.SupplierId}</td>
        <td>{props.Rate}</td>
        <td>{(new Date(props.RateStartDate)).toLocaleDateString()}</td>
        <td>{props.RateEndDate ? (new Date(props.RateEndDate)).toLocaleDateString() : "" }</td>
        <td>{props.CreatedBy}</td>
        <td>{(new Date(props.CreatedOn)).toLocaleDateString() }</td>
    </tr>
  )
};

export default Showsupplierrate;
