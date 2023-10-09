import React from 'react'
import styled from 'styled-components'
import DisWAIMG from '../../assets/DisWhatsappBtn.png'


const DisWABtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 90%;
  height: 74px;
  background-color: #F3F4F6;
  border-radius: 12px;
  cursor: pointer;
  border: none;
  font-weight: bold;

  &:hover {
    background-color: #D1D5DB;  
  }

`

const DisWATxtAlign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 74px;
  font-family: "Inter", Helvetica;
  font-size: 24px;
  color: #9CA3AF;

  @media(max-width:480px){
    font-size: 14px;
  }
`

const DisWhatsImg = styled.img`
  height: 70px;
  @media(max-width:480px){
    height: 50px;
  }

`

const DisWhatsappBtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 99%;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  margin-bottom: 8px;
`

function DisabledDisWABtn () {
  return (
    <>
      <DisWhatsappBtnDiv>
        <DisWABtn
        onClick={() => {alert("Preencha todos os dados acima para continuar com o pedido!")}}>
          <DisWATxtAlign>
            Confirmar Pedido e enviar pelo Whatsapp
          </DisWATxtAlign>
            <DisWhatsImg className='WAppIMG' src={DisWAIMG}></DisWhatsImg>
          </DisWABtn>
      </DisWhatsappBtnDiv>
    </>
  )
}

export default DisabledDisWABtn