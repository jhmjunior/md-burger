import React from 'react'
import styled from 'styled-components'
import WhatsappIMG from '../../assets/WhatsApp.svg'


const WABtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 90%;
  height: 74px;
  background-color: #0E873A;
  border-radius: 12px;
  cursor: pointer;
  border: none;
  font-weight: bold;

  &:hover {
    background-color: #064E3B;  
  }

`

const WATxtAlign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 74px;
  font-family: "Inter", Helvetica;
  font-size: 24px;
  color: White;

  @media(max-width:480px){
    font-size: 14px;
  }
`

const WhatsImg = styled.img`
  height: 70px;
  @media(max-width:480px){
    height: 50px;
  }

`

const WhatsappBtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 99%;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  margin-bottom: 8px;
`

function WhatsappBtn () {
  return (
    <>
      <WhatsappBtnDiv>
        <WABtn>
          <WATxtAlign>
            Confirmar Pedido e enviar pelo Whatsapp
          </WATxtAlign>
            <WhatsImg className='WAppIMG' src={WhatsappIMG}></WhatsImg>
          </WABtn>
      </WhatsappBtnDiv>
    </>
  )
}

export default WhatsappBtn