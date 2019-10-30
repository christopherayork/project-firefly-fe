import React, { useState } from 'react';
import { CarouselDiv } from '../styles/styled-components/styles';

const Carousel = (props) => {
  const [images, setImages] = useState(props.images || []);
  const [selected, setSelected] = useState(0);

  const moveLeft = e => {
    if(selected <= 0) setSelected(images.length - 1);
    else setSelected(selected - 1);
  };

  const moveRight = e => {
    if(selected >= images.length - 1) setSelected(0);
    else setSelected(selected + 1);
  };

  return (
    <CarouselDiv className='carousel' style={ props.styles ? props.styles : {} }>
      <div className='left-arrow' onClick={moveLeft}>{'<'}</div>
      {images.map((i, index) => {
        return <img className={index === selected ? 'carousel-img selected' : 'carousel-img'} src={i} alt='Carousel' />;
      })}
      <div className='right-arrow' onClick={moveRight}>{'>'}</div>
    </CarouselDiv>
  );
};

export default Carousel;
