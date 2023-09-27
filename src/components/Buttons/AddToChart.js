import styled from 'styled-components'
import React, { useState } from 'react'


const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 75px;
  background-color: #FBBF24;
  color: #27272A;
  border-radius: 12px;
  font-family: "Inter", Helvetica;
  font-size: 14px;
  cursor: pointer;
  border: none;
  font-weight: bold;
`;

const AddButtonDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 24px 12px 6px;
  
`

const FooterBtnContainer = styled.div`
  width: 250px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 6px;

  @media(max-width:480px){
      width: 130px;
  }
`


const FooterBtnMinus = styled.button`
  font-size: 45px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 50px;
  height: 50px;
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
      font-size: 18px;
      width: 40px;
      height: 40px;
      align-items: center;
  }
`

const FooterQuantity = styled.input`
  font-family: "Inter", Helvetica;
  color: #27272A;
  outline: none;
  width: 50px;
  height: 50px;
  text-align: center;
  border: none;
  align-self: center;

  @media(max-width:480px){
      width: 20px;
  }
  
`

const FooterBtnPlus = styled.button`
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
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
    font-size: 18px;
      width: 40px;
      height: 40px;
      align-items: center;
  }

`



function AddToChart({itemValue, onClick, setCarrinho, title, adicional, adcData, somaAdc}) {

  const [quantityBtnNum, quantityBtnSetNum] = useState(1);
  const addBtnQuantity = () => {
    quantityBtnSetNum(quantityBtnNum+1)
  }

  // const handleChange = (event) => {
  //   quantityBtnSetNum(event.target.value)
  // }

  const remBtnQuantity = () => {
    quantityBtnSetNum(quantityBtnNum-1)
    if (quantityBtnNum <= 1) {
      quantityBtnSetNum(1)
    }
  }

  let itemPrice = parseInt(itemValue)+somaAdc
  let totalPrice = itemPrice*quantityBtnNum
  console.log(totalPrice)
  


  return (
    <>
      <AddButtonDiv>
        <FooterBtnContainer  >
          <FooterBtnMinus
            onClick={remBtnQuantity}
          >
            -
          </FooterBtnMinus>
          <FooterQuantity 
            type='number'
            value={quantityBtnNum}
            onChange={quantityBtnSetNum}
          />
          <FooterBtnPlus
            onClick={addBtnQuantity}
          >
            +
          </FooterBtnPlus>
        </FooterBtnContainer >
        <AddButton onClick={onClick} defaultValue={itemValue}>  
         Adicionar: <br/>
         R$ {totalPrice.toFixed(2)}
        </AddButton>
      </AddButtonDiv>
    </>
  )
}

export default AddToChart;