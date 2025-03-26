import React, { useState, useRef, useEffect } from 'react';
import ClothesCart from '../ClothesCard/ClothesCard';
import ArrowNextCard from '../ArrowNextCard/ArrowNextCard';
import './ProductSlider.css';

const ProductSlider = () => {

  const [imageList, setlist] = useState([
    <ClothesCart src="/assets/shirt1.svg" />,
    <ClothesCart src="/assets/shirt2.svg" />,
    <ClothesCart src="/assets/shirt3.svg" />,
    <ClothesCart src="/assets/shirt4.svg" />
  ])
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

    const nextItem = () => {
        const newItem = <ClothesCart src={`/assets/shirt${index+1}.svg`} />; // Создаем новый элемент
        setlist((prevList) => [...prevList, newItem]);
        setIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    };

  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      const width = trackRef.current.offsetWidth;
      setTrackWidth(width);
    }
  }, []);

  return (
    <div className="splide">
      <div className="splide__track" ref={trackRef}>
        <ul
          className="splide__list"
          style={{
            transition: 'transform 0.3s ease',
            transform: `translateX(-${index * (218 + (trackWidth - 1090) / 4)}px)` // Используем trackWidth
          }}
        >
          {imageList.map((item, idx) => (
            <li key={idx} className="splide__slide" style={{ flex: '0 0 218px' }}>
              {item}
            </li>
          ))}
        </ul>
        <ArrowNextCard onClick={nextItem} />
      </div>
    </div>
  );
};

export default ProductSlider;
