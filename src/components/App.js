import React from "react";
import Axios from "axios";
import {useState} from 'react';
import Header from "./Header";
import Supplierdetails from "./Supplierdetails";
import SupplierRateDetails from "./SupplierRateDetails";
import SupplierRateOverlap from "./SupplierRateOverlap";


function App() {

  const [SupplierData, setSupplierData] = useState([]);
  const [SupplierRateData, setSupplierRateData] = useState([]);
  const [SupplierRateOverlapData, setSupplierRateOverlapData] = useState([]);

    const getSuppliers = async () =>  {
    await Axios.get("http://localhost:4000/api/supplier/all")
        .then((response) => { setSupplierData(response.data[0])
                              setSupplierRateData(response.data[1])} )
        .catch((err) => { console.log(err.message)} )
  };

  const getOverlap = async () =>  {
     Axios.get("http://localhost:4000/api/supplier/overlap")
        .then((response) => { setSupplierRateOverlapData(response.data)})
        .catch((err) => { console.log(err.message)} )
  };

   return (
    <div className="App">
    <Header />
    <main id="site-main">
        <div className="container">
            <div className="box-nav d-flex justify-between">
                <button type="button" onClick={getSuppliers}>Get All Suppliers</button>
            </div>

            <form action="/" method="POST">
              <Supplierdetails SupplierData={SupplierData} />

            </form>
            <form action="/" method="POST">
              <SupplierRateDetails SupplierRateData={SupplierRateData}/>
            </form>

            <div className="box-nav d-flex justify-between">
                <button type="button" onClick={getOverlap}>Get Overlap Rates</button>
            </div>
            <form action="/" method="POST">
              <SupplierRateOverlap SupplierRateOverlapData={SupplierRateOverlapData}/>
            </form>
        </div>

    </main>

    </div>
  );
}

export default App;
