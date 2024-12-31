import React from "react";
import ProductDetailComponent from "../../components/ProductDetailComponent/ProductDetailComponent";

const ProductDetailPage = () => {
  return (
    <div
      style={{
        padding: "0 120px",
        background: "#efefef",
        height: "1000px",
      }}
    >
      <h2>Trang chủ </h2>
      <ProductDetailComponent />
    </div>
  );
};

export default ProductDetailPage;
