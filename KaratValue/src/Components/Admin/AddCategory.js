import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CatCard from "./Component/CatCard";
import UploadCard from "./Component/UploadCard";
import store from "../../store";
import { AllProduct } from "../../actions/Product";
import { addCategory, AddImage, DeleteCategory } from "../../actions/Admin";
import { useAlert } from "react-alert";

function AddCategory({ categories }) {
  let alert = useAlert();

  const [Changes, setChanges] = useState(false);

  const [Form, setForm] = useState({
    name: "",
    image_url: "",
  });

  const deleteCategory = (id) => {
    DeleteCategory(id)
      .then((message) => {
        alert.success("Category Deleted");
        setChanges(!Changes);
        store.dispatch(AllProduct());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleForm = () => {
    if (Form.name && Form.image_url) {
      addCategory(Form)
        .then((message) => {
          alert.success("Category Added");
          store.dispatch(AllProduct());
          setChanges(!Changes);
          setForm({ ...Form, name: "", image_url: "" });
        })
        .then((error) => {
          console.log(error);
        });
    } else {
      alert.error("Enter Category name");
    }
  };

  const handleFile = (files) => {
    const image = new FormData();
    image.append("file", files);
    AddImage(image)
      .then((data) => {
        setForm({ ...Form, image_url: data.url });
        alert.success("Image Uploaded Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="admin-container">
      <h1 className="del-cat">Delete Category</h1>
      <div className="row gx-4 justify-content-around">
        {categories.length !== 0 ? (
          categories.map((cat) => (
            <div className="col-md-3">
              <CatCard
                img={cat.image_url}
                name={cat.name}
                deleteCategory={deleteCategory}
                cid={cat.cid}
              />
            </div>
          ))
        ) : (
          <h1
            style={{ marginTop: "50px" }}
            className="display-5 text-center pt-5"
          >
            No Categories Found !
          </h1>
        )}
      </div>

      <h1 className="del-cat" style={{ marginTop: "80px" }}>
        Add Category
      </h1>
      <div className="row" style={{ alignItems: "unset" }}>
        <div className="col-md-4">
          <UploadCard handleFile={handleFile} />
        </div>
        <div className="col-md-8 pt-3 text-center d-flex flex-column justify-content-between">
          <div className="mt-4">
            <input
              type="text"
              onChange={(e) => {
                setForm({ ...Form, name: e.target.value });
              }}
              placeholder="Category Name"
              value={Form.name}
              className="input-admin mt-5"
            />
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
  categories: state.product.categories,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
