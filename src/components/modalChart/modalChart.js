import React, { useState } from 'react';
import styled from 'styled-components';
import ModalOrder from '../modalOrder/modalOrder';
import { Modal } from '../modal/Modal';

const SubMenuDiv = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #FBBF24;
  font-size: 20px;
  justify-content: center;
  font-family: 'Inter', Helvetica;
  font-weight: bold;
  color: #27272A;
`;

const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 95vh;
`;

const ChoiceDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 99%;
  height: auto;
  margin-top: 16px;
  font-family: 'Inter', Helvetica;
  border: solid 1px;
  border-radius: 10px;
  background-color: #fff;
  color: #27272A;
`;

const ChoiceItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 8px;
  width: 98%;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Inter', Helvetica;
  color: #27272A;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const ChoicePrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 200px;

  @media (max-width: 480px) {
    width: 100px;
  }
`;

const ChoiceAdds = styled.div`
  padding-left: 24px;
  font-family: 'Inter', Helvetica;
  color: #27272A;
  width: 80%;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  justify-self: center;
  flex-direction: row;
  width: 99%;
  height: 60px;
`;

const RemoveItemBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  background-color: #FBBF24;
  color: #27272A;
  border-radius: 12px;
  font-family: 'Inter', Helvetica;
  font-size: 14px;
  cursor: pointer;
  border: none;
  font-weight: bold;

  &:hover {
    background-color: #ff0000;
    color: white;
  }

  @media (max-width: 480px) {
    width: 100px;
  }
`;

const OrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 351px;
  height: 74px;
  background-color: #FBBF24;
  color: #27272A;
  border-radius: 12px;
  font-family: 'Inter', Helvetica;
  font-size: 14px;
  cursor: pointer;
  border: none;
  font-weight: bold;

  &:hover {
    background-color: #0E873A;
    color: white;
  }

  @media (max-width: 480px) {
    width: 300px;
  }
`;

const OrderButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 99%;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  margin-bottom: 8px;
`;

const DeliveryTax = styled.div`
  display: flex;
  align-items: center;
  width: 99%;
  height: 50px;
  font-family: 'Inter', Helvetica;
  color: #27272A;
  font-size: 18px;
  justify-content: flex-end;
`;

const OrderTotal = styled.div`
  font-family: 'Inter', Helvetica;
  color: #27272A;
  font-size: 32px;
  font-weight: bold;
`;

const EmptyChart = styled.div`
  display: flex;
  width: 99%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;



const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
`;

const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
  font-family: 'Inter', Helvetica;
  font-size: 18px;
  color: #0E873A;
  cursor: pointer;
`;

const RadioButtonInput = styled.input`
  appearance: none;
  // background-color: #fff;
  border: 2px solid #0E873A;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:checked {
    border-color: #0E873A;
  }

  &:checked::before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #0E873A;
  }
`;

function ModalChart({ pedido, setPedido }) {
  const [showOrder, setShowOrder] = useState(false);
  const [isDeliveryIncluded, setIsDeliveryIncluded] = useState(true);

  let somador = 0;
  for (let si = 0; si < pedido.length; si++) {
    somador += pedido[si].burgerValue;
  }

  const removeItem = (index) => {
    const newPedido = pedido.filter((_, i) => i !== index);
    setPedido(newPedido);
  };

  const handleDeliveryOptionChange = (e) => {
    setIsDeliveryIncluded(e.target.value === 'delivery');
  };

  return (
    <>
      <Modal pedido={pedido} isDeliveryIncluded={isDeliveryIncluded} showOrder={showOrder} setShowOrder={setShowOrder} />

      {pedido.length > 0 ? (
        <>
          <SubMenuDiv>Carrinho</SubMenuDiv>
          <ChoiceContainer>
            {pedido.map((item, index) => (
              <ChoiceDetailsContainer key={index}>
                <ChoiceItems>
                  {item.burgerName}{' '}
                  <ChoicePrice>Total: R${item.burgerValue.toFixed(2)}</ChoicePrice>
                </ChoiceItems>
                {item.adicionais.map((adicional, index) =>
                  adicional.quantidade > 0 ? (
                    <ChoiceAdds key={index}>
                      {adicional.quantidade}X {adicional.adicional.name}
                    </ChoiceAdds>
                  ) : null
                )}
                <ButtonContainer>
                  <RemoveItemBtn onClick={() => removeItem(index)}>Remover</RemoveItemBtn>
                </ButtonContainer>
              </ChoiceDetailsContainer>
            ))}
            
            {!isDeliveryIncluded && <DeliveryTax>Taxa de entrega: R$ 5,00</DeliveryTax>}
          </ChoiceContainer>
          
          <RadioButtonContainer>
            <RadioButtonInput
              type="radio"
              id="deliveryOption"
              name="deliveryOption"
              value="delivery"
              checked={!isDeliveryIncluded}
              onChange={handleDeliveryOptionChange}
            />
            <RadioButtonLabel htmlFor="deliveryOption">Entrega</RadioButtonLabel>
            
            <RadioButtonInput
              type="radio"
              id="pickupOption"
              name="deliveryOption"
              value="pickup"
              checked={isDeliveryIncluded}
              onChange={handleDeliveryOptionChange}
              style={{ marginLeft: '16px' }}
            />
            <RadioButtonLabel htmlFor="pickupOption">Vou Retirar</RadioButtonLabel>
          </RadioButtonContainer>

          <OrderButtonDiv>
            <OrderTotal>
              Total: R$
              {pedido.length > 0
                ? !isDeliveryIncluded
                  ? (somador + 5).toFixed(2)
                  : somador.toFixed(2)
                : null}
            </OrderTotal>
            <OrderButton onClick={() => setShowOrder(true)}>Confirmar pedido!</OrderButton>
          </OrderButtonDiv>
        </>
      ) : (
        <EmptyChart>
          <h1>Seu carrinho está Vazio!</h1>
        </EmptyChart>
      )}
    </>
  );
}

export default ModalChart;