import React, { useState } from 'react'
import styled from 'styled-components'

const ObsDiv = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  `
const CharacterCount = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: flex-end;
  font-family: "Inter", Helvetica;
  color: #27272A;
`

const ObsInput = styled.textarea`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 125px;
  border-radius: 10px;
  padding: 12px 6px;
  font-family: "Inter", Helvetica;
  color: #27272A;
  
`
const DeliveryValue = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 8px;
  font-family: "Inter", Helvetica;
  font-weight: bold;
  color: #27272A;
`

function Observations () {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <ObsDiv>
        <CharacterCount>
          {count}/150
        </CharacterCount>
        <ObsInput onChange={e => setCount(e.target.value.length)} maxLength={150} />
        <DeliveryValue>
          Taxa de Entrega: R$ 3,00.
        </DeliveryValue>  
      </ObsDiv>
    </>
  )
}

export default Observations;