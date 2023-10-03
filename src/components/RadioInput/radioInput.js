import React, { useState } from 'react'
import styled from 'styled-components'
import './style.css'
import CurrencyInputMask from '../MaskedInputs/CurrencyInputMask'

const RadioWrapp = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;

  @media(max-width:480px){
    flex-direction: column;
  }
`

const TrocoAlign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 16px;
`

const RadioLabel = styled.label`
  font-family: "Inter", Helvetica;
  color: #27272A;
`

function RadioInput() {

  const [dinheiro, setDinheiro]=useState(false)
  const [trocoValue, setTrocoValue]=useState(false)
  const [troco, setTroco] = useState('')

  return (

    <>
      <RadioWrapp>
        <div className='container'>
          <ul>
            <li>
              <input
                type='radio'
                id='Dinheiro'
                value="Dinheiro"
                Name='PaymentMethod'
                onClick={() => setDinheiro(true)}
              />
              <RadioLabel for="Dinheiro">Dinheiro</RadioLabel>
              <div className='check' />
            </li>
            <li>
              <input
                type='radio'
                id='Cartao'
                value="Débito/Crédito"
                Name='PaymentMethod'
                onClick={() => {setDinheiro(false); setTrocoValue(false)}}
              />
              <RadioLabel for="Cartao">Débito/Crédito</RadioLabel>
              <div className='check' />
            </li>
            <li>
              <input
                type='radio'
                id='Pix'
                value="Pix"
                Name='PaymentMethod'
                onClick={() => {setDinheiro(false); setTrocoValue(false)}}
              />
              <RadioLabel for="Pix">Pix</RadioLabel>
              <div className='check' />
            </li>
          </ul>
        </div>
        { dinheiro && 
        <div className='container'>
          <h2>Precisa de Troco?</h2>
          <ul>
            <li>
              <input
                type='radio'
                id='DinheiroYes'
                value="Sim"
                Name='DinheiroYorN'
                onClick={() => setTrocoValue(true)}
                />
              <RadioLabel for="DinheiroYes">Sim</RadioLabel>
            <div className='check' />
            </li>
            <li>
              <input
                type='radio'
                id='DinheiroNo'
                value="Não"
                Name='DinheiroYorN'
                onClick={() => setTrocoValue(false)}
                />
              <RadioLabel for="DinheiroNo">Não</RadioLabel>
              <div className='check' />
            </li>
          </ul>
          
        </div>
        }
        {trocoValue &&
        <div className='container'>
          <TrocoAlign>
          <h2>Para quanto?</h2> 
          <CurrencyInputMask 
            value={troco}
            onChange={(e) => setTroco(e.target.value)}
            />
          </TrocoAlign>
        </div>
        }
      </RadioWrapp>
    </>
  )
}

export default RadioInput