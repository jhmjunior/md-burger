import React, { useState } from 'react'
import styled from 'styled-components';
import PhoneInputMask from '../MaskedInputs/PhoneInputMask';
import RadioInput from '../RadioInput/radioInput';
import WhatsappBtn from '../Buttons/WhatsappBtn';
import DisabledWABtn from '../Buttons/DisabledWABtn'

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

const AppLink = styled.a`
  &:link{
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
`

function ModalOrder({pedido, isDeliveryIncluded}) {


  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [endNum, setEndNum] = useState('');
  const [telefone, setTelefone] = useState('');
  const [bairro, setBairro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [dinheiro, setDinheiro] = useState(false)
  const [isTroco, setIsTroco] = useState(false)
  const [trocoValue, setTrocoValue] = useState('')
  const [cartao, setCartao] = useState(false)
  const [pix, setPix] = useState(false)


  let pedidoFinal = ''
  for (let i = 0; i < pedido.length; i++) {
    const item = pedido[i]
    

    pedidoFinal += `*Item:* ${item.burgerName}%0A`
    for (let a = 0; a < item.adicionais.length; a++) {
      if (item.adicionais[a].quantidade > 0) {
        pedidoFinal += `*Adicionais:*%0A${item.adicionais[a].quantidade}X ${item.adicionais[a].adicional.name}%0A`
      }
    }
    {item.observacoes? pedidoFinal += `*Possui alguma observação?* ${item.observacoes}%0A%0A`: 
    
    pedidoFinal += `Valor: R$ ${item.burgerValue.toFixed(2)}%0A%0A`}
  }
  let somador = 0
    for (let si = 0; si < pedido.length; si++) {
      somador += pedido[si].burgerValue;
    }

  

  let MainUrl = "https://wa.me/5538997467203"
  let delivery = `${MainUrl}?text=*Tipo:* Delivery %0A*Nome:* ${nome}%0A*Endereço:* ${endereco}, *N:* ${endNum}%0A*Bairro:* ${bairro}%0A*Complemento:* ${complemento}%0A*Telefone:* ${telefone}
  %0A%0A*Pedido:*%0A${pedidoFinal}*Total: R$${(somador+5).toFixed(2)}*
  %0A*Forma de pagamento:* ${dinheiro ? `Dinheiro.%0A*Precisa de troco?* ${dinheiro && isTroco ? `SIm%0A${dinheiro && trocoValue ? `*Para quanto?* ` : null}${trocoValue}` : `Não`}` :
      `${cartao ? `Cartão de Débito/Crédito` : `${pix ? `Pix` : `Opção de pagamento não informada`}`}`}
  `
  let pickUp = `${MainUrl}?text=*Tipo:* Retirada %0A*Nome:* ${nome}
  %0A%0A*Pedido:*%0A${pedidoFinal}*Total: R$${(somador).toFixed(2)}*
  %0A*Forma de pagamento:* ${dinheiro ? `Dinheiro.%0A*Precisa de troco?* ${dinheiro && isTroco ? `SIm%0A${dinheiro && trocoValue ? `*Para quanto?* ` : null}${trocoValue}` : `Não`}` :
      `${cartao ? `Cartão de Débito/Crédito` : `${pix ? `Pix` : `Opção de pagamento não informada`}`}`}
  `

  return (
    <>
      <SubMenuDiv>
        {!isDeliveryIncluded ? "Seus Dados" : "Endereço para entrega"}
      </SubMenuDiv>
      <MainContent>
        <InputName>Nome:</InputName>
        <GeneralInput
          type='text'
          value={nome}
          placeholder='Joao'
          onChange={(e) => setNome(e.target.value)}
        />
        {!isDeliveryIncluded ? null:
        
        <AddressWrapper>
          <AddressAlign>
            <AddressDiv>
              <InputName>Endereço:</InputName>
              <GeneralInput
                type='text'
                placeholder='Rua X'
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </AddressDiv>
            <NumberDiv>
              <InputName>Número:</InputName>
              <GeneralInput
                type='number'
                placeholder='123'
                value={endNum}
                onChange={(e) => setEndNum(e.target.value)}
              />
            </NumberDiv>
            <DistDiv>
              <InputName>Bairro:</InputName>
              <GeneralInput
                type='text'
                placeholder='Centro'
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              />
            </DistDiv>

            <ComplDiv>
              <InputName>Complemento:</InputName>
              <GeneralInput
                type='text'
                placeholder='Ex: Primeiro Andar'
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
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
        }
      </MainContent>
      <SubMenuDiv>
        Forma de Pagamento
      </SubMenuDiv>
      <RadioInput
        dinheiro={dinheiro}
        setDinheiro={setDinheiro}
        isTroco={isTroco}
        setIsTroco={setIsTroco}
        trocoValue={trocoValue}
        setTrocoValue={setTrocoValue}
        setCartao={setCartao}
        setPix={setPix}
      />
      
      {nome.length > 1  ?
        
        <AppLink
          href={isDeliveryIncluded ? delivery : pickUp }
          target="_blank"
          rel="noopener noreferrer" >
          <WhatsappBtn />
        </AppLink>
        :
        <DisabledWABtn

        />
      }


    </>
  )

}



export default ModalOrder
