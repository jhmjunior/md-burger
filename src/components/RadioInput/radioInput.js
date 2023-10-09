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

function RadioInput({dinheiro, setDinheiro, isTroco, setIsTroco, trocoValue, setTrocoValue, setCartao, setPix}) {


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
                name='PaymentMethod'
                onClick={() => {setDinheiro(true); setCartao(false); setPix(false)}}
              />
              <RadioLabel for="Dinheiro">Dinheiro</RadioLabel>
              <div className='check' />
            </li>
            <li>
              <input
                type='radio'
                id='Cartao'
                value="Débito/Crédito"
                name='PaymentMethod'
                onClick={() => {setDinheiro(false); setIsTroco(false); setCartao(true); setPix(false); setTrocoValue('')}}
              />
              <RadioLabel for="Cartao">Débito/Crédito</RadioLabel>
              <div className='check' />
            </li>
            <li>
              <input
                type='radio'
                id='Pix'
                value="Pix"
                name='PaymentMethod'
                onClick={() => {setDinheiro(false); setIsTroco(false); setCartao(false); setPix(true); setTrocoValue('')}}
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
                name='DinheiroYorN'
                onClick={() => setIsTroco(true)}
                />
              <RadioLabel for="DinheiroYes">Sim</RadioLabel>
            <div className='check' />
            </li>
            <li>
              <input
                type='radio'
                id='DinheiroNo'
                value="Não"
                name='DinheiroYorN'
                onClick={() => {setIsTroco(false); setTrocoValue('')}}
                />
              <RadioLabel for="DinheiroNo">Não</RadioLabel>
              <div className='check' />
            </li>
          </ul>
          
        </div>
        }
        {isTroco &&
        <div className='container'>
          <TrocoAlign>
          <h2>Para quanto?</h2> 
          <CurrencyInputMask 
            value={trocoValue}
            onChange={(e) => setTrocoValue(e.target.value)}
            />
          </TrocoAlign>
        </div>
        }
      </RadioWrapp>
      
    </>
  )
}

export default RadioInput