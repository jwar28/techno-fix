import React, { useState, useEffect } from 'react';
import HeroComponent from './HeroComponent';

const generateRandomNumber = () => {
  const number = Math.floor(Math.random() * 2) + 1;
  return number % 2 === 0;
};

export default function HeroManager({}) {
  const [isEven, setIsEven] = useState(false);

  useEffect(() => {
    setIsEven(generateRandomNumber());
  }, []);

  if (isEven) {
    return (
      <HeroComponent
        image='/img1.png'
        header='Tus dispositivos en las mejores manos'
        description='Realizamos mantenimiento profesional y de calidad para sus
            dispositivos electronicos a domicilio.'
      />
    );
  }

  return (
    <HeroComponent
      image='/img5.png'
      header='¡Bienvenid@ de nuevo!'
      description='¿Que podemos hacer por tus dispositivos hoy?'
    />
  );
}
