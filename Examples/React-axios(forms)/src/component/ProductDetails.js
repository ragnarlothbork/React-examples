import React, { useState, useEffect } from "react";

import axios from "axios";

const ProductDetails = (props) => {
  let ids = props.match.params.Code;
  const [data, setData] = useState([]);

  useEffect(() => {
    const setsData = async () => {
      const result = await axios.get(
        `http://localhost:44306/Product/GetProductsById/?id=` + ids
      );
      setData(result.data.products);
    };
    setsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              {/* <th>id</th>
              <th>Code</th> */}
              {/* <th>ProductlineID</th> */}
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
            <tr>
              {/* <td>{data.id}</td>
              <td>{data.Code}</td> */}
              {/* <td>{data.ProductlineID}</td> */}
              <td>{data.Name}</td>
              <td>{data.Scale}</td>
              <td>{data.Vendor}</td>
              <td>{data.PdtDescription}</td>
              <td>{data.QtyInStock}</td>
              <td>{data.BuyPrice}</td>
              <td>{data.MSRP}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ProductDetails;
