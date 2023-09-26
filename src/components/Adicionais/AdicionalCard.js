import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


const AdicionalName = styled.div`
  font-size: 20px;
  font-family: "Inter", Helvetica;
  color: #27272A;
  padding-top: 6px;

  @media(max-width:480px){
      font-size: 14px;
      padding-left: 0px;
  }
`

const AdicionalOptContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`

const AdicionalBtnContainer = styled.div`
  width: 115px;
  height: 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 6px;

  @media(max-width:480px){
      width: 130px;
  }
`

const AdicionalBtnMinus = styled.button`
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  border: none;
  border-radius: 50%;
  margin-left: 5px;
  cursor: pointer;
  color: #FF0000;
  font-weight: bold;
  &:hover{
    color: #F0EDFF;
    background-color: #FF0000;
  }

  @media(max-width:480px){
      font-size: 12px;
  }  
`

const AdicionalQuantity = styled.div`
  font-family: "Inter", Helvetica;
  color: #27272A;
  outline: none;
  width: 50px;
  text-align: center;
  border: none;
  align-self: center;

  @media(max-width:480px){
      width: 20px;
  }
  
`

const AdicionalBtnPlus = styled.button`
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  border: none;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
  color: #0E873A;
  font-weight: bold;
  &:hover{
    color: #F0EDFF;
    background-color: #0E873A;
  }
  
  @media(max-width:480px){
      font-size: 12px;
  }

`

function AdicionalCard({adicional, setAdicional, adcName, adcValue, index, adicionalPlus, adicionalMinus}) {


  const [quantity, setQuantity]=useState(0)

  const addQuantity = () => {
    setQuantity(quantity+1)
    adicionalPlus(index)
  }

  const remQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity-1)
      adicionalMinus(index)
    }
  }

  return(
    <>
    <AdicionalOptContainer>
      <AdicionalName >
      {adcName} (R${adcValue})
      </AdicionalName>
      <AdicionalBtnContainer>
        <AdicionalBtnMinus
          onClick={remQuantity}
        >
          -
        </AdicionalBtnMinus>
        <AdicionalQuantity >
          {quantity}
        </AdicionalQuantity>
        <AdicionalBtnPlus
          onClick={addQuantity}
        >
          +
        </AdicionalBtnPlus>
      </AdicionalBtnContainer>
    </AdicionalOptContainer>
    </>
  )
}

export default AdicionalCard