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
  
  @media(max-width:480px){
    height: 350px;
    flex-direction: column;
  }
`

const ItemImage = styled.img`
  width: 720px;
  height: 430px;
  
  @media(max-width:480px){
    width: 250px;
    height: 250px;
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

const AdicicionalDiv = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #FBBF24;
  font-size: 24px;
  padding-left: 16px;
  font-family: "Inter", Helvetica;
  font-weight: bold;
  color: #27272A;
  margin-top: 16px;

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

const ObservacaoDiv = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #FBBF24;
  font-size: 24px;
  padding-left: 16px;
  font-family: "Inter", Helvetica;
  font-weight: bold;
  color: #27272A;
  margin-top: 160px;

  @media(max-width:480px){
    padding-left: 8px;
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

function ModalCards({ description, itemImg, itemValue, setCarrinho, title, adcValue, adcName}) {

  const [adicional, setAdicional] = useState([])


  const adicionalPlus = (index) => {
    let aux=adicional
    aux[index] = aux[index]+1
    setAdicional(aux)
  }

  const adicionalMinus = (index) => {
    if (adicional[index] > 0) {
      let aux=adicional
      aux[index] = aux[index]-1
      setAdicional(aux)
    }
  }

  useEffect(() => {
    setAdicional(adcData.map((item) => {
      return (0)
    }))
  }, [])
  
  

  return (
    <>
      <ModalContent>
        <ItemImage src={itemImg} />
        <ItemDescription>
          {description}
        </ItemDescription>
      </ModalContent>
      <AdicicionalDiv>
        Adicionais:
      </AdicicionalDiv>
      <AdicionaisOptions>
        <AdicionalContainer adicionalPlus={adicionalPlus} adicionalMinus={adicionalMinus} adicional={adicional}/>
      </AdicionaisOptions>
      <ObservacaoDiv>
        Possui alguma observação?
      </ObservacaoDiv>
      <Observations />
      <ModalFooter>
        <AddToChart itemValue={itemValue} setCarrinho={setCarrinho} title={title} adicional={adicional} adcData={adcData}/>
        
      </ModalFooter>
    </>
  )
}

export default ModalCards