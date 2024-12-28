import React from "react";
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from "./style";
import { Checkbox, Col, Rate, Row } from "antd";

const NavbarComponent = () => {
  const onChange = () => {};
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        })
      case "checkbox":
        return (
          <Checkbox.Group style={{ width: '100%', display:'flex', flexDirection:'column' , gap:'12px'}} onChange={onChange}>
            {options.map((option) => (
              <Checkbox style={{margin:0}} value={option.value}>{option.label}</Checkbox>
            ))}

            
            
          </Checkbox.Group>
        )
        case 'star':
            return options.map((option)=>{
                console.log('check', option)
                return(
                    <div style={{display:'flex', gap:'4px'}}>
                    <Rate style={{fontSize:'12px'}} disabled defaultValue={option} />
                    <span>{`Tu ${option} sao`}</span>
                    
                    </div>
                )
            })
            case 'price':
                return options.map((option)=>{
                  return(
                    <WrapperTextPrice style={{}}>{option}</WrapperTextPrice>
                  )
                })
      default:
        return {};
    }
  };
  return (
    <div >
      <WrapperLableText>Lable</WrapperLableText>
      <WrapperContent>
        {renderContent("text", ["Tu Lanh", "TV", "May Giat"])}</WrapperContent>
        <WrapperContent>
        {renderContent("checkbox", [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
        ])}
      </WrapperContent>
      <WrapperContent>
        {renderContent("star", [3,4,5 ])}
      </WrapperContent>

      <WrapperContent>
        {renderContent("price", ['Duoi 40','Tren 50.00' ])}
      </WrapperContent>
    </div>
  );
};

export default NavbarComponent;
