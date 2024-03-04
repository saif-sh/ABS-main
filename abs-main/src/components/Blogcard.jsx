import React from 'react';
import { data } from '../constants';

function App() {

  return (
      <div className='relative flex items-center w-full'>
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide overflow-y-hidden'
        >
          {data.map((item) => (
            <img
              className='w-[358px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='Not'
            />

          ))}
        </div>
      </div>
  );
}

export default App;