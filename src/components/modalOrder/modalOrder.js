import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import PhoneInputMask from '../MaskedInputs/PhoneInputMask';
import RadioInput from '../RadioInput/radioInput';

const SubMenuDiv = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #FBBF24;
  font-size: 20px;
  justify-content: center;
  font-family: "Inter", Helvetica;
  font-weight: bold;
  color: #27272A;
  margin-top: 16px;

  @media(max-width:480px){
    margin-top: 8px;
  }
`
const MainContent = styled.div`
  width: 99%;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-self: center;

  @media(max-width:480px){
    width: 90%;
  }
`

const InputName = styled.div`
  font-family: "Inter", Helvetica;
  font-size: 20px;
  padding-left: 8px;

  @media(max-width:480px){
    padding-left: 0;
  }
`

const GeneralInput = styled.input`
  display: flex;
  width: 99%;
  border-radius: 12px;
  align-self: center;
  height: 36px;
  background-color: white;
  font-family: "Inter", Helvetica;
  font-size: 20px;
`
const AddressWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const AddressAlign = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  
`

const AddressDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  
  @media(max-width:480px){
    width: 99%;
  }
`
const NumberDiv = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media(max-width:480px){
    width: 20%;
  }
`
const DistDiv = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  @media(max-width:480px){
    width: 60%;
  }
`

const ComplDiv = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  
  @media(max-width:480px){
    width: 55%;
  }
`


const PhoneDiv = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  
  @media(max-width:480px){
    width: 40%;
  }
`

function ModalOrder() {

  

  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  

  return (
    <>
      <SubMenuDiv>
        Endereço de entrega:
      </SubMenuDiv>
      <MainContent>
        <InputName>Nome:</InputName>
        <GeneralInput
          type='text'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <AddressWrapper>
          <AddressAlign>
            <AddressDiv>
              <InputName>Endereço:</InputName>
              <GeneralInput
                type='text'
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </AddressDiv>
            <NumberDiv>
              <InputName>Número:</InputName>
              <GeneralInput />
            </NumberDiv>
            <DistDiv>
              <InputName>Bairro:</InputName>
              <GeneralInput
                type='text'
              />
            </DistDiv>

            <ComplDiv>
              <InputName>Complemento:</InputName>
              <GeneralInput
                type='text'
              />
            </ComplDiv>
            <PhoneDiv>
              <InputName>Telefone:</InputName>
              <PhoneInputMask
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </PhoneDiv>

          </AddressAlign>
        </AddressWrapper>
      </MainContent>
      <SubMenuDiv>
        Forma de Pagamento
      </SubMenuDiv>

      <RadioInput />
    </>
  )

}



export default ModalOrder