import styled from 'styled-components'
import React from 'react'
import Carrinho from '../../assets/carrinho.png'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 351px;
  height: 74px;
  background-color: #FBBF24;
  color: #27272A;
  border-radius: 12px;
  font-family: "Inter", Helvetica;
  font-size: 14px;
  cursor: pointer;
  border: none;
  font-weight: bold;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 24px;
  position: sticky;
  bottom: 12px;
`

function ChartButton({onClick, showButton}) {
  return (
    <>
      {showButton ? (
        <ButtonDiv>
          <Button onClick={onClick}>
            <img className='carrinho-img' src={Carrinho} />Ver carrinho
          </Button>
        </ButtonDiv>

      ) : null}
    </>
  )
}

export default ChartButton;