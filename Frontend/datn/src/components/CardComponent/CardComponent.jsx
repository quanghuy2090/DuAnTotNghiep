import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperImageStyle,
  WrapperPriceText,
  WrapperReportText,
  WrapperStyleTextSell,
} from "./style";
import { StarFilled } from "@ant-design/icons";
// import logo from '../../assets/images/logo.png'
const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      style={{ width: 200 }}
      headStyle={{ width: "200px", height: "200px" }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      {/* <img alt="logo"
        src={logo}
        style={{ with: "68px", position: "absolute", top: -1, left: -1 , borderTopLeftRadius:'3px'}}
      /> */}
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>
          <span>4.96</span>

          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>

        <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
      </WrapperReportText>

      <WrapperPriceText>
        1.000.000 đ
        <span>
          <WrapperDiscountText>- 5%</WrapperDiscountText>
        </span>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
