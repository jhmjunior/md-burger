import React from "react";
import './styles.css';
import data from '../../assets/Acompanhamentos.json'
import Card from "../card";

function ExtraItems({setShowButton, pedido, setPedido, obsInfo, setObsInfo}) {

  return (
    <div className='lanches-container'>
      <div className='cards-content'>
        {data.map((item) => {
          return(<Card
            pedido={pedido}
            setPedido={setPedido}
            obsInfo={obsInfo}
            setObsInfo={setObsInfo}
            key={item.title}
            title={item.title}
            description={item.description}
            item_value={parseInt(item.value).toFixed(2)}
            path_img={item.path_img}
            setShowButton={setShowButton}
          />)
        })}
        
      </div>
    </div>
  )
}


export default ExtraItems