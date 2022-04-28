import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function AddOrUpdateProduct({
  products,
  categories,
  getProducs,
  getCategories,
  saveProduct,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product });
}
