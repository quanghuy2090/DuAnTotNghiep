import { Button, Input } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "#fff",
    backgroundColorButton = "rgb(13,92,182)",
    colorButton = "#fff",
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <Input
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput }}
      />
      <Button
        size={size}
        style={{
          background: backgroundColorButton,
          border: !bordered && "none",
        }}
        icon={<SearchOutlined style={{ color: colorButton }} />}
      >
        <span style={{ color: colorButton }}>{textButton}</span>
      </Button>
    </div>
  );
};

export default ButtonInputSearch;
