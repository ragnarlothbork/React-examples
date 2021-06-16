import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function GetAllOrders() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:44306/Orders/GetAllOrders");
      setdata(res.data.orders);
    };
    fetchData();
  }, []);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Order Date</th>
            <th>Required Date</th>
            <th>Shipped Date</th>
            <th>Status</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.ID}>
              <td>{item.CustomerID}</td>
              <td>{item.OrderDate}</td>
              <td>{item.RequiredDate}</td>
              <td>{item.ShippedDate}</td>
              <td>{item.Status}</td>
              <td>{item.Comments}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <center>
        <Link to="/CreateOrders" className="btn btn-primary">
          Create new Orders
        </Link>
      </center>
    </>
  );
}
export default GetAllOrders;
