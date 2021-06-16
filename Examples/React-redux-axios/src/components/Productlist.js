import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productaction";

const Productlist = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:44306/Product/GetAllProducts")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data.products));
  };

  useEffect(() => {
    fetchProducts();
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
          {products.map((pro) => (
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Productlist;
