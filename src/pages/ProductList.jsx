import React, { useState, useEffect } from "react";

import ProductService from "../services/productService";

export default function ProductList() {
  const [ setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setProducts(result.data.data));
  });

  return (
    <div>
      Error
    </div>
  );
}
