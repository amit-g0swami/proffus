import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  AddImage,
  AddProduct,
  DeleteProduct,
  EditProduct,
} from "../../actions/Admin";

import ProductCard from "../Home/ProductCard";
import UploadCard from "./Component/UploadCard";
import Pagination from "../../Components/Pagination";
import { useAlert } from "react-alert";
import { AllProduct } from "../../actions/Product";
import store from "../../store";

function AddItem({ products, categorys }) {
  const [Edit, setEdit] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // state use to store current page details
  const [postsPerPage] = useState(3); // state use to store maximum page details

  const [Changes, setChanges] = useState(false);
  const [loading, setloading] = useState(false);

  // Get Current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  let alert = useAlert();

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [Form, setForm] = useState({
    name: "",
    image_urls: "",
    in_stock: "",
    after_sale_price: "",
    actual_price: "",
    description: "",
    specification: "",
    Weight: "",
    Type: "",
    pid: "",
    cid: "",
    trending: 0,
  });

  const setTrending = (val) => {
    if (val == 1) {
      setForm({ ...Form, trending: 1 });
    } else {
      setForm({ ...Form, trending: 0 });
    }
  };

  const {
    name,
    image_urls,
    in_stock,
    after_sale_price,
    actual_price,
    description,
    specification,
    Weight,
    Type,
    cid,
  } = Form;

  console.log(Form.trending);

  const handleForm = (e) => {
    e.preventDefault();
    if (!Edit) {
      AddProduct({
        name,
        image_urls,
        in_stock,
        after_sale_price,
        actual_price,
        description,
        specification,
        Weight,
        Type,
        cid,
        trending: 0,
      })
        .then((res) => {
          if (res) {
            store.dispatch(AllProduct());
            console.log(res);
            alert.success("Product Added");
          } else {
            alert.error("Product Failed to add");
          }

          setChanges(!Changes);
        })
        .catch((error) => {
          alert.error(error);
        });
    } else {
      EditProduct(Form)
        .then((res) => {
          if (res) {
            store.dispatch(AllProduct());
            alert.success("Product Edited");
          } else {
            alert.error("Product Failed to edit");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      setEdit(!Edit);
    }
    setForm({
      ...Form,
      name: "",
      image_urls: "",
      in_stock: "",
      after_sale_price: "",
      actual_price: "",
      description: "",
      specification: "",
      Weight: "",
      Type: "",
      pid: "",
      cid: "",
    });
    setChanges(!Changes);
  };

  const handleFile = (file) => {
    const image = new FormData();
    image.append("file", file);
    AddImage(image)
      .then((data) => {
        setForm({ ...Form, image_urls: data.url });
        alert.success("Image Uploaded Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (product) => {
    window.scrollTo(50, document.body.scrollHeight / 3);
    setForm({
      ...Form,
      name: product.name,
      image_urls: product.image_urls,
      in_stock: product.in_stock,
      after_sale_price: product.after_sale_price,
      actual_price: product.actual_price,
      description: product.description,
      specification: product.specification,
      Weight: product.weight,
      Type: product.Type,
      pid: product.pid,
      cid: product.cid,
    });
    setEdit(true);
  };

  const handleChange = (message) => {
    setChanges(!Changes);
    alert.success(message);
  };

  return (
    <div className="itemss  d-flex flex-column admin-container">
      <h1 className="del-cat">Delete Products</h1>
      <div className="row ">
        {currentPosts.length !== 0 ? (
          currentPosts.map((product) => (
            <ProductCard
              name={product.name}
              description={product.description}
              after_sale_price={product.after_sale_price}
              actual_price={product.actual_price}
              deletebutton={true}
              url={product.image_urls}
              id={product.pid}
              handleChange={handleChange}
              handleEdit={handleEdit}
              product={product}
              comingFromAdmin={true}
            />
          ))
        ) : (
          <h1
            style={{ marginTop: "50px" }}
            className="display-5 text-center pt-5"
          >
            No Products Found !
          </h1>
        )}
      </div>

      <div className="pagnt mt-5">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={products.length}
          paginate={paginate}
        />
      </div>

      <div className="row gx-5" style={{ marginTop: "120px" }}>
        <h1 className="del-cat">{Edit ? "Edit Item" : "Add Item"}</h1>
        <div className="col-md-5">
          <UploadCard handleFile={handleFile} />
        </div>
        <div className="col-md-12 pt-3 text-center d-flex flex-column justify-content-between">
          <div className="mt-4">
            <input
              type="text"
              placeholder="Product Name"
              value={name}
              name="name"
              onChange={(e) => {
                setForm({ ...Form, name: e.target.value });
              }}
              className="input-admin mt-2"
            />
            <input
              type="text"
              placeholder="In Stock"
              value={in_stock}
              onChange={(e) => {
                setForm({ ...Form, in_stock: e.target.value });
              }}
              className="input-admin mt-2"
            />
            <input
              type="number"
              placeholder="After Sale Price"
              value={after_sale_price}
              onChange={(e) => {
                setForm({ ...Form, after_sale_price: e.target.value });
              }}
              name="afterprice"
              className="input-admin mt-2"
            />
            <input
              type="number"
              placeholder="Actual Price"
              value={actual_price}
              onChange={(e) => {
                setForm({ ...Form, actual_price: e.target.value });
              }}
              name="actual"
              className="input-admin mt-2"
            />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setForm({ ...Form, description: e.target.value });
              }}
              name="desc"
              className="input-admin mt-2"
            />
            <input
              type="text"
              placeholder="Specification"
              value={specification}
              onChange={(e) => {
                setForm({ ...Form, specification: e.target.value });
              }}
              name="spec"
              className="input-admin mt-2"
            />
            <input
              type="text"
              placeholder="Weight"
              value={Weight}
              onChange={(e) => {
                setForm({ ...Form, Weight: e.target.value });
              }}
              name="weight"
              className="input-admin mt-2"
            />
            <input
              type="text"
              placeholder="Type"
              value={Type}
              onChange={(e) => {
                setForm({ ...Form, Type: e.target.value });
              }}
              name="type"
              className="input-admin mt-2"
            />
            <select
              onChange={(e) => {
                setForm({ ...Form, cid: e.target.value });
              }}
              className="input-admin"
            >
              <option value="">Select Category</option>
              {categorys
                ? categorys.map((cat) => (
                    <option value={cat.cid}>{cat.name}</option>
                  ))
                : ""}
            </select>
            <select
              onChange={(e) => {
                setTrending(e.target.value);
              }}
              className="input-admin"
            >
              <option>Set Trending</option>
              <option value={1}>True</option>
              <option value={0}>False</option>
            </select>
          </div>
          <div>
            <button
              onClick={handleForm}
              className="button-submit flex-end mb-4"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.product.products,
  categorys: state.product.categories,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
