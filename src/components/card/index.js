import React, { useState } from "react";
import { Modal } from "../modal/Modal";
import './styles.css';

function Card({ setShowButton, title, description, item_value, path_img, pedido, setPedido }) {

  const [showModal, setShowModal] = useState(false);


  const handleShowModal = () => {
    setShowModal(prev => !prev);
    setShowButton();
  }

  return (
    <>
      <Modal showModal={showModal} setShowModal={handleShowModal} title={title} description={description} itemImg={path_img} itemValue={item_value} setPedido={setPedido} pedido={pedido} />

      <div className="card-lanche" onClick={() => {
        handleShowModal();
      }}>
        <div className="lanche-details">
          <div className='nome-lanche'>
            {title}
          </div>
          <div className="lanche-description">
            {description}
          </div>
          <div className='valor-lanche'>R${item_value}</div>
        </div>
        <img className='cards-img' src={path_img}></img>
      </div>
    </>
  )
}

export default Card