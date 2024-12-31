import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";
import {
  WrapperButtionMore,
  WrapperProducts,
  WrapperTypeProduct,
} from "./style";
import CardComponent from "../../components/CardComponent/CardComponent";

const HomePage = () => {
  const arr = ["TV", "Tủ Lạnh", "Laptop"];

  return (
    <>
      <div style={{ width: "1270px", margin: "0 auto" }}>
        <WrapperTypeProduct>
          {arr.map((item, index) => (
            <TypeProduct key={index} name={item} />
          ))}
        </WrapperTypeProduct>
        <div
          className="body"
          style={{ width: "100%", backgroundColor: "#efefef" }}
        >
          <div
            id="container"
            style={{
              height: "1000px",
              width: "1270px",
              margin: "0 auto",
            }}
          >
            <SliderComponent arrImages={[slider1, slider2, slider3]} />
            <WrapperProducts>
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </WrapperProducts>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <WrapperButtionMore
                textButton="Xem thêm"
                type="outline"
                styleButton={{
                  border: "1px solid rgb(11, 116, 229)",
                  color: "rgb(11, 116, 229",
                  width: "240px",
                  height: "38px",
                  borderRadius: "4px",
                }}
                styleTextButton={{ fontWeight: 500 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
