import React, { useState } from "react";
import axios from "axios";

const ProductForm = ({ handleFormSubmit }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [featured, setFeatured] = useState(false);
  return (
    <>
      <form
        class="col s12"
        onSubmit={(e) => {
          handleFormSubmit(e, {
            title,
            price,
            description,
            imageURL,
            category,
            quantity,
            featured,
          });
        }}
      >
        <div class="row">
          <div class="input-field col s6">
            <input
              placeholder="Product Name"
              id="title"
              type="text"
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label htmlFor="Product Title">Product Title</label>
          </div>
          <div class="input-field col s6">
            <input
              placeholder="Product Price"
              id="price"
              type="text"
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <label htmlFor="Price">Product Price</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              placeholder="Product Description"
              id="description"
              type="text"
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <label htmlFor="Description">Product Description</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              placeholder="Product Image"
              id="imageURL"
              type="text"
              name="imageURL"
              value={imageURL}
              onChange={(e) => {
                setImageURL(e.target.value);
              }}
            />
            <label htmlFor="imageURL">Product Image</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              placeholder="Product Category"
              id="productCategory"
              type="text"
              name="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <label htmlFor="productCategory">Product Category</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input
              placeholder="Product Quantity"
              id="quantity"
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <label htmlFor="quantity">Product Quantity</label>
          </div>
          <div class="col s6">
            <label>
              <input
                type="checkbox"
                checked={featured}
                name="featured"
                value={description}
                onChange={(e) => {
                  setFeatured(!featured);
                }}
              />
              <span>Featured</span>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <button className="waves-effect waves-light btn">
              Create Product
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
