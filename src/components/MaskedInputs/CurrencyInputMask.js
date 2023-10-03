import React from 'react'
import InputMask from 'react-input-mask'

const InpStyle = {
  width: '80%',
  borderRadius: '12px',
  height: '36px',
  backgroundColor: 'white',
  fontFamily: '"Inter", Helvetica',
  fontSize: '20px'
}

const CurrencyInputMask = ({ value, onChange }) => {
  return <InputMask mask="R$ 999,00" value={value} onChange={onChange} style={InpStyle}
  />
};

export default CurrencyInputMask;