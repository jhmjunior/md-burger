import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const SubMenuDiv = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #FBBF24;
  font-size: 24px;
  padding-left: 16px;
  font-family: "Inter", Helvetica;
  font-weight: bold;
  color: #27272A;
  margin-top: 8px;

  @media(max-width:480px){
    padding-left: 8px;
  }
`

function ModalOrder(){

  const [showOrderButton, setShowOrderButton] = useState(true);

  return (
    <>
    {/* {showOrderButton ? ( */}
      <SubMenuDiv>
        Endereço de entrega:
      </SubMenuDiv>
      <p>Nome</p>

    {/* ) : null} */}
    </>
  )

}



export default ModalOrder