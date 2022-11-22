import React from "react";

function Showsupplier(props) {
  console.log(props)
  return (

    <tr>
      <td>{props.SupplierId}</td>
      <td>{props.Name}</td>
      <td>{props.Address}</td>
      <td>{props.CreatedBy}</td>
      <td>{(new Date(props.CreatedOn)).toLocaleDateString()}</td>
    </tr>
  )
};

export default Showsupplier;
