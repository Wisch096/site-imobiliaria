import styled from 'styled-components';
import { useState, useEffect } from 'react';

const images = [
  { id: 1, src: 'carrossel1.jpg', alt: 'Image 1' },
  { id: 2, src: 'carrossel2.jpg', alt: 'Image 2' },
  { id: 3, src: 'carrossel4.jpg', alt: 'Image 3' },
];

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CarouselIndicatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const CarouselIndicator = ({ active, onClick }) => (
  <div
    style={{
      width: '48px',
      height: '8px',
      margin: '0 5px',
      backgroundColor: '#fff',
      opacity: active ? '1' : '0.5',
      cursor: 'pointer'
    }}
    onClick={onClick}
  />
);

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleIndicatorClick = (index) => {
    setCurrentImage(index);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <CarouselContainer>
      <CarouselImage src={images[currentImage].src} alt={images[currentImage].alt} />
      <CarouselIndicatorContainer>
        {images.map((image, index) => (
          <CarouselIndicator
            key={image.id}
            active={index === currentImage}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </CarouselIndicatorContainer>
    </CarouselContainer>
  );
};

export default Carousel;
