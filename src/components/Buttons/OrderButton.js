import React from 'react'
import styled from 'styled-components'


const OrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 351px;
  height: 74px;
  background-color: #FBBF24;
  color: #27272A;
  border-radius: 12px;
  font-family: "Inter", Helvetica;
  font-size: 14px;
  cursor: pointer;
  border: none;
  font-weight: bold;
`;

const OrderButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 24px;
  position: sticky;
  bottom: 12px;
`

function OrderButton() {
  return (
    <>
      <OrderButtonDiv>
        <OrderButton />
      </OrderButtonDiv>
    </>
  )
}

export default OrderButton