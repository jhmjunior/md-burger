import React from 'react'
import styled from 'styled-components'



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
const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  align-items: flex-start;

  @media(max-width:480px){
   padding: 0 8px;
  }
`

const ChoiceDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 180px;


`

function ModalChart({ pedido, setPedido }) {

  

  console.log(pedido)

  return (
    <>
      <SubMenuDiv>
        Lanche
      </SubMenuDiv>
      <ChoiceContainer>
        
          {pedido ? pedido.map((item, index) => {
            return (<ChoiceDetails
              key={index}
              index={index}
              burgerName={item.burgerName}
              burgerValue={item.burgerValue}
              adicionais={item.adicionais}
            />)
          }) : <h2>Carrinho Vazio!</h2>}

        
        

      </ChoiceContainer>
      {/*
        Criar componente para cada item do carrinho modalChart
          (Map do pedido de item e index para novo componente)
        Criar botão do whatsapp
      */}
      
    </>
  )
  
}




export default ModalChart