import React from "react";
import { useState } from "react";
import qs from "qs";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from "react-select";

function EditProduct() {
  const initailproductdetails = {
    Code: 0,
    ProductlineID: 0,
    Name: "",
    Scale: 0,
    PdtDescription: "",
    QtyInStock: 0,
    BuyPrice: 0,
    MSRP: "",
  };

  const dropdown = {
    selectoptions: [],
    VendorId: "",
    Vendor: "",
  };

  const [vendorlist, setvendorlist] = useState(dropdown);
  const [product, setProduct] = useState(initailproductdetails);

  const handledropdown = async () => {
    const res = await axios.get(
      "http://localhost:44306/Product/GetAllProducts"
    );
    const data = res.data;
    const options = data.map((d) => ({
      value: d.VendorId,
      label: d.Vendor,
    }));
    setvendorlist({ selectoptions: options });
  };

  const handlechange = (e) => {
    setvendorlist({ VendorId: e.value, Vendor: e.label });
  };

  const handleInput = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleAddProduct = async () => {
    var prodata = {
      Code: product.Code,
      ProductlineID: product.ProductlineID,
      Name: product.Name,
      Scale: product.Scale,
      //Vendor: product.Vendor,
      PdtDescription: product.PdtDescription,
      QtyInStock: product.QtyInStock,
      BuyPrice: product.BuyPrice,
      MSRP: product.MSRP,
    };
    const response = await axios.post(
      "http://localhost:44306/Product/CreateProduct",
      qs.stringify(prodata)
    );

    setProduct({
      Code: response.prodata.Code,
      ProductlineID: response.prodata.ProductlineID,
      Name: response.prodata.Name,
      Scale: response.prodata.Scale,
      //Vendor: response.prodata.Vendor,
      PdtDescription: response.prodata.PdtDescription,
      QtyInStock: response.prodata.QtyInStock,
      BuyPrice: response.prodata.BuyPrice,
      MSRP: response.prodata.MSRP,
    });
  };

  return (
    <div>
      <div className="col-md-3 offset-md-4 mt-5 justify-content-center">
        <Container>
          <h1>Create product</h1>

          <form>
            <div>
              <label>Code</label>
              <input
                type="number"
                className="form-control"
                id="Code"
                name="Code"
                placeholder="Enter the Code"
                value={product.Code}
                onChange={handleInput}
              ></input>
            </div>
            <div>
              <label>ProductlineID</label>
              <input
                type="number"
                className="form-control"
                id="ProductlineID"
                name="ProductlineID"
                placeholder="Enter the ProductlineID"
                value={product.ProductlineID}
                onChange={handleInput}
              ></input>
            </div>
            <div>
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="Name"
                name="Name"
                placeholder="Enter the Name"
                value={product.Name}
                onChange={handleInput}
              ></input>
            </div>
            <div>
              <label>Scale</label>
              <input
                type="number"
                className="form-control"
                id="Scale"
                name="Scale"
                placeholder="Enter the Scale"
                value={product.Scale}
                onChange={handleInput}
              />
            </div>
            {/* <div>
              <label>Vendor</label>
              <Select value={vendorlist.Vendor} onChange={handlechange}>
                {selectoptions.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </Select>
            </div> */}
            <div>
              <label>PdtDescription</label>
              <input
                type="text"
                className="form-control"
                id="PdtDescription"
                name="PdtDescription"
                placeholder="Enter the PdtDescription"
                value={product.PdtDescription}
                onChange={handleInput}
              />
            </div>
            <div>
              <label>QtyInStock</label>
              <input
                type="number"
                className="form-control"
                id="QtyInStock"
                name="QtyInStock"
                placeholder="Enter the QtyInStock"
                value={product.QtyInStock}
                onChange={handleInput}
              />
            </div>
            <div>
              <label>BuyPrice</label>
              <input
                type="number"
                className="form-control"
                id="BuyPrice"
                name="BuyPrice"
                placeholder="Enter the BuyPrice"
                value={product.BuyPrice}
                onChange={handleInput}
              />
            </div>
            <div>
              <label>MSRP</label>
              <input
                type="text"
                className="form-control"
                id="MSRP"
                name="MSRP"
                placeholder="Enter the MSRP"
                value={product.MSRP}
                onChange={handleInput}
              />
            </div>
            <button
              onClick={(handleAddProduct, handledropdown)}
              className="btn btn-success"
            >
              Submit
            </button>
          </form>
          <center>
            <Link to="/GetAllProducts" className="btn btn-primary">
              View created products
            </Link>
          </center>
        </Container>
      </div>
    </div>
  );
}
export default EditProduct;
