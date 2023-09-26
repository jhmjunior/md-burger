import './App.css';
import React, {useState} from 'react'
import Logo from '../src/assets/logo_sf.png'
import Carrinho from '../src/assets/carrinho.png'
import Cards from './components/cards/Cards';
import { Modal } from "./components/modal/Modal";
import ChartButton from './components/Buttons/ChartButton';


function App() {

  const [showChartModal, setShowChartModal] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const [carrinho, setCarrinho] = useState([]);

  const handleShowChartModal = () => {
    setShowChartModal(prev =>!prev);
    setShowButton(prev => !prev)
  }

  const handleShowButton = () => {
    setShowButton(prev => !prev)

  }

  return (
    <>
      <Modal showChartModal={showChartModal} setShowChartModal={handleShowChartModal} />
      <header>
        <img src={Logo} id='logo'></img>
        <div id='h_description1'>
          MD' Burger
        </div>
        <div id='h_description2'>
          Rua Renato Azeredo, 173, Felixlândia/MG
        </div>
      </header>
      
      <div className='sub-menus'>Lanches</div>
      <Cards setShowButton={handleShowButton} setCarrinho={setCarrinho}/>
      <ChartButton showButton={showButton} onClick={handleShowChartModal}>
        <img className='carrinho-img' src={Carrinho}></img>Ver carrinho
      </ChartButton>
    </>
  )
}

export default App;
