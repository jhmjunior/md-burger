import React from 'react'
import InputMask from 'react-input-mask'

const InpStyle = {
  width: '98%',
  borderRadius: '12px',
  height: '36px',
  backgroundColor: 'white',
  fontFamily: '"Inter", Helvetica',
  fontSize: '20px'
}

const PhoneInputMask = ({ value, onChange }) => {
  return <InputMask mask="(99) 99999-9999" value={value} onChange={onChange} style={InpStyle}
  />
};

export default PhoneInputMask;