import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AdicionalContainer from '../Adicionais/AdicionalContainer'
import AddToChart from '../Buttons/AddToChart'
import Observations from '../Observação/Observations'
import adcData from '../../assets/adicionais.json'



const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  width: 90%;
  height: 430px;
  
  @media(max-width:720px){
    flex-direction: column;
  }

  @media(max-width:480px){
    height: 350px;
    flex-direction: column;
  }

  
`

const ItemImage = styled.img`
  width: 400px;
  max-width: 90%;
  height: 90%;
  max-height: 90%;
  
  @media(max-width:480px){
    width: 250px;
    max-width: 250px;
    height: 250px;
    max-width: 250px;
    align-self: center;
  }
`

const ItemDescription = styled.div`
  font-size: 20px;
  font-family: "Inter", Helvetica;
  justify-self: center;
  align-self: center;
  padding-left: 16px;

  @media(max-width:480px){
    font-size: 14px;
    padding-top: 8px;
    align-self: center;
    padding-left: 0;
  }
`

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
const AdicionaisOptions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  align-items: flex-start;

  @media(max-width:480px){
   padding: 0 8px;
  }
`

const ModalFooter = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

function ModalCards({ description, itemImg, itemValue, title, setShowModal, pedido, setPedido, obsInfo, setObsInfo }) {

  const [adicional, setAdicional] = useState([])
  const [somaAdc, setSomaAdc] = useState(0)

  const adicionalPlus = (index) => {
    let aux = adicional
    aux[index] = aux[index] + 1
    setAdicional(aux)
    setSomaAdc(adcSum())

  }

  const adicionalMinus = (index) => {
    if (adicional[index] > 0) {
      let aux = adicional
      aux[index] = aux[index] - 1
      setAdicional(aux)
      setSomaAdc(adcSum())
    }
  }

  useEffect(() => {
    setAdicional(adcData.map((item) => {
      return (0)
    }))
  }, [])


  function adcSum() {
    let adcsum = 0


    for (let i = 0; i < adcData.length; i++) {
      const item = adcData[i];
      const quantidade = adicional[i]
      adcsum += parseInt(item.value) * quantidade
    }

    return (adcsum)
  }

  function definirPedido(totalPrice, quantidade) {

    
    let adicionais = []
    for (let adcIndex = 0; adcIndex < adicional.length; adcIndex++) {
      adicionais = [...adicionais, {
        adicional: adcData[adcIndex],
        quantidade: adicional[adcIndex]
      }];
    }
    
    let itens = []
    for (let i = 0; i < quantidade; i++) {
      itens = [...itens, { burgerName: title, burgerValue: totalPrice, adicionais: adicionais, observacoes:obsInfo }]
    }
  

    setPedido([...pedido, ...itens ])
  }





  return (
    <>
      <ModalContent>
        <ItemImage src={itemImg} />
        <ItemDescription>
          {description}
        </ItemDescription>
      </ModalContent>
      <SubMenuDiv>
        Adicionais:
      </SubMenuDiv>
      <AdicionaisOptions>
        <AdicionalContainer
          adicionalPlus={adicionalPlus}
          adicionalMinus={adicionalMinus}
          adicional={adicional}
        />
      </AdicionaisOptions>
      <SubMenuDiv>
        Possui alguma observação?
      </SubMenuDiv>
      <Observations 
        obsInfo={obsInfo}
        setObsInfo={setObsInfo}
      />
      <ModalFooter>
        <AddToChart
          somaAdc={somaAdc}
          itemValue={itemValue}
          adicional={adicional}
          adcData={adcData}
          setShowModal={setShowModal}
          onClick={definirPedido}
        />

      </ModalFooter>
    </>
  )
}

export default ModalCards