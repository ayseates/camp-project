import React from "react";
import Navi from "../layouts/Navi";
import Categories from "../layouts/Categories";
import ProductList from "../pages/ProductList";

export default function Dashboard() {
  return (
    <div>
      <Categories />
      <ProductList />
    </div>
  );
}
