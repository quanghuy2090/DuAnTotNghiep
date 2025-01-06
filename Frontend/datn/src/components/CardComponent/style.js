import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
with: 200px;
& img {
height: 200px;
width: 200px;


}, position: relative;

`;
// export const WrapperImageStyle = styled.image`
// top: -1px;
// left: -1px;
// border-top-left-radius: 3px;
// postition: absolute;
// height: 14px| important;
// width: 68px| important;

// `
export const StyleNameProduct = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgb(56, 56, 61);
`;

export const WrapperReportText = styled.div`
  font-size: 11px;
  color: rgb(128, 128, 137);
  display: flex;
  aligin-items: center;
  margin: 6px 0 0px;
`;

export const WrapperPriceText = styled.div`
  color: rgb(255, 66, 78);
  font-size: 16px;
  font-weight: 500;
  margin: 8px 0;
`;
export const WrapperDiscountText = styled.span`
  color: rgb(255, 66, 78);
  font-size: 12px;
  font-weight: 500;
`;
export const WrapperStyleTextSell = styled.span`
  color: rgb(120, 120, 120);
  font-size: 15px;
  line-height: 24px;
`;
