import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function GetAllProducts() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const setsData = async () => {
      //api
      const result = await axios.get(
        "http://localhost:44306/Product/GetAllProducts"
      );
      setdata(result.data.products);
    };
    setsData();
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Code</th>
            <th>ProductlineID</th>
            <th>Name</th>
            <th>Scale</th>
            <th>Vendor</th>
            <th>PdtDescription</th>
            <th>QtyInStock</th>
            <th>BuyPrice</th>
            <th>MSRP</th>
          </tr>
        </thead>
        <tbody>
          {data.map((pro) => (
            <tr key={pro.ID}>
              <td>{pro.id}</td>
              <td>{pro.Code}</td>
              <td>{pro.ProductlineID}</td>
              <td>{pro.Name}</td>
              <td>{pro.Scale}</td>
              <td>{pro.Vendor}</td>
              <td>{pro.PdtDescription}</td>
              <td>{pro.QtyInStock}</td>
              <td>{pro.BuyPrice}</td>
              <td>{pro.MSRP}</td>
              <Link
                to={"/Productdetails/" + pro.Code}
                className="btn btn-secondary"
              >
                Viewdetails
              </Link>
              {" - "}
              <Link to="/PutProduct" className="btn btn-primary">
                Edit
              </Link>
            </tr>
          ))}
        </tbody>
      </table>

      <center>
        <Link to="/CreateProduct" className="btn btn-primary">
          Create new products
        </Link>
      </center>
    </div>
  );
}
export default GetAllProducts;
