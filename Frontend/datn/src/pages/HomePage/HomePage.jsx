import React from 'react';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slider1 from '../../assets/images/slider1.jpg';
import slider2 from '../../assets/images/slider2.jpg';
import slider3 from '../../assets/images/slider3.jpg';
import { WrapperTypeProduct } from './style';
import CardComponent from '../../components/CardComponent/CardComponent';

const HomePage = () => {
  const arr = ['TV', 'Tủ Lạnh', 'Laptop'];

  return (
   <>
    <div style={{ padding: '0 120px' }}>
      <WrapperTypeProduct>
      
        {arr.map((item, index) => (
          <TypeProduct key={index} name={item} />
        ))}
      
      </WrapperTypeProduct>
      <div id='container' style={{backgroundColor: '#efefef', padding: '0 120px'}}>

      </div>
      <SliderComponent arrImages={[slider1, slider2, slider3]} />
      <div style={{marginTop: '20px', display:'flex', alignItems:'center', gap:'20px'}}>
        <CardComponent/>
      </div>
    </div>
   </>
  );
};

export default HomePage;

