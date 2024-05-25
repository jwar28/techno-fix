import React, { useState, useEffect } from 'react';

export default function HeroComponent(props) {
  return (
    <div className='flex flex-row justify-evenly'>
      <img
        src={props.image}
        className='max-md:hidden fixed left-0 bottom-0 h-screen rounded brightness-90'
      />
      <div class='flex flex-col gap-5 p-5 sm:w-1/2 fixed right-0 top-1/3'>
        <p class='text-white text-5xl text-center sm:text-left'>
          {props.header}
        </p>
        <p class='text-secondary text-xl text-pretty text-center sm:text-left'>
          {props.description}
        </p>
        <div class='flex justify-center sm:justify-start'>
          <a
            href='/services'
            class='py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700'>
            Servicios
          </a>
          <a
            href='/contact'
            class='py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700'>
            Contactanos
          </a>
        </div>
      </div>
    </div>
  );
}
