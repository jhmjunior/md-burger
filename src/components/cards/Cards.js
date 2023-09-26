import React from "react";
import './styles.css';
import data from '../../assets/banners.json'
import Card from "../card";

function Cards({setShowButton, setCarrinho}) {

  return (
    <div className='lanches-container'>
      <div className='cards-content'>
        {data.map((item) => {
          return(<Card
            setCarrinho={setCarrinho}
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


export default Cards