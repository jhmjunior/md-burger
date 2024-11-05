import React from 'react'
import styled from 'styled-components'
import adcData from '../../assets/adicionais.json'
import AdicionalCard from './AdicionalCard'

const AdicionalOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 300px;
 
`


function AdicionalContainer({adicional, adicionalMinus, adicionalPlus, adcValue, adcName}){
  return(
     
    <AdicionalOption>
      {adcData.map((item, index) => {
        return(<AdicionalCard
          key={index}
          index={index}
          adicional={adicional}
          adicionalMinus={adicionalMinus}
          adicionalPlus={adicionalPlus}
          adcName={item.name}
          adcValue={parseInt(item.value).toFixed(2)}
          adcID={item.ID}
          />)
      })}
    
    </AdicionalOption>
  )

}

export default AdicionalContainer