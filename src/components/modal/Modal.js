import React, { useState } from 'react'
import styled from 'styled-components'
import ModalCards from '../modalCards/modalcards'
import ModalChart from '../modalChart/modalChart'
import ModalOrder from '../modalOrder/modalOrder'

const CloseModalButton = styled.div`
  cursor: pointer;
  width: 60px;
  height: 60px;
  padding-left: 14px;
  padding-top: 14px;
  background-image: url('/md-burger/images/Retornar.png');
  background-size: contain;
  
  @media(max-width:620px){
    height: 48px;
    width: 48px;
  }

  @media(max-width:480px){
      height: 25px;
      width: 25px;
      background-repeat: no-repeat;
  }


`

const HeaderModal = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  align-items: center;
  
  @media(max-width:480px){
    height: 50px;
  }
`

const Title = styled.h1`
  font-size: 60px;
  font-family: "Inter", Helvetica;
  @media(max-width:620px){
    font-size: 48px;
  }

  @media(max-width:480px){
    height: 30px;
    font-size: 25px;
  }
  
`


const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
const ModalWrapper = styled.div`
  width: 1024px;
  height: 100%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #E5E7EB;
  color: #27272A;
  font-family: "Inter", Helvetica;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  overflow-y: auto;

  @media(max-width:480px){
    width: 359px;
    height: 651px;
  }
`



export const Modal = ({ showModal, setShowModal, title, description, itemImg, showChartModal, setShowChartModal, itemValue, setCarrinho, pedido, setPedido, setShowOrder, showOrder, obsInfo, setObsInfo, isDeliveryIncluded }) => {

  const [adicional, setAdicional] = useState([])



  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <HeaderModal>
              <CloseModalButton onClick={() => setShowModal()} />
              <Title>{title}</Title>
            </HeaderModal>
            <ModalCards
              description={description}
              itemImg={itemImg}
              itemValue={itemValue}
              setAdicional={setAdicional}
              adicional={adicional}
              setCarrinho={setCarrinho}
              setShowModal={setShowModal}
              pedido={pedido}
              setPedido={setPedido}
              title={title}
              obsInfo={obsInfo}
              setObsInfo={setObsInfo}
            />
          </ModalWrapper>
        </Background>
      ) : showChartModal ? (
        <Background>
          <ModalWrapper showChartModal={showChartModal}>
            <HeaderModal>
              <CloseModalButton onClick={() => setShowChartModal()} />
              <Title>Revise seu Pedido</Title>
            </HeaderModal>
            <ModalChart
              pedido={pedido}
              setPedido={setPedido}
              setShowChartModal={setShowChartModal}
            />
          </ModalWrapper>
        </Background>
      ) : showOrder ? (
        <Background>
          <ModalWrapper>
            <HeaderModal>
              <CloseModalButton onClick={() => setShowOrder()} />
              <Title>Confirmar Pedido</Title>
            </HeaderModal>
            <ModalOrder pedido={pedido} isDeliveryIncluded={isDeliveryIncluded}/>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  )
}
