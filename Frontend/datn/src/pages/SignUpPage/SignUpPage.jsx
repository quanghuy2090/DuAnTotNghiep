import React, { useState } from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "../SignInPage/style";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import InputForm from "../../components/InputForm/InputForm";
import imageLogo from "../../assets/images/logo-login.png";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";

const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setIsShowPassword(!isShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsShowConfirmPassword(!isShowConfirmPassword);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ccc",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập và tạo tài khoản</p>
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
          />
          {/* Mật khẩu */}
          <div style={{ position: "relative" }}>
            <span
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
                cursor: "pointer",
              }}
              onClick={togglePasswordVisibility}
            >
              {isShowPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </span>
            <InputForm
              placeholder="Password"
              type={isShowPassword ? "text" : "password"}
            />
          </div>
          {/* Xác nhận mật khẩu */}
          <div style={{ position: "relative", marginTop: "10px" }}>
            <span
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
                cursor: "pointer",
              }}
              onClick={toggleConfirmPasswordVisibility}
            >
              {isShowConfirmPassword ? (
                <EyeOutlined />
              ) : (
                <EyeInvisibleOutlined />
              )}
            </span>
            <InputForm
              placeholder="Confirm Password"
              type={isShowConfirmPassword ? "text" : "password"}
            />
          </div>
          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background: "rgb(255, 57, 69)",
              height: "48px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              margin: "26px 0 10px",
            }}
            textButton={"Đăng ký"}
            styleTextButton={{
              color: "#fff",
              fontsize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
          <p>
            Bạn đã có tài khoản?{" "}
            <WrapperTextLight>
              <span>Đăng nhập</span>
            </WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={imageLogo}
            preview={false}
            alt="image-logo"
            height="203px"
            width="203px"
          />
          <h4>Mua sắm tại Shop điện thoại</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignUpPage;
