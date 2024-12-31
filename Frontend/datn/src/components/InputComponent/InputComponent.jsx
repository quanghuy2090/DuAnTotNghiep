import Input from 'antd/es/input/Input'
import React from 'react'

const InputComponent = ({size, placeholder, bordered, style, ...rests}) => {
  return (
    <Input
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={style}
        {...rests}
      />
  )
}

export default InputComponent