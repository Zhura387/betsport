import React from 'react';
import Life from '../Life/Life'
import Tomorrow from '../Sport/Tomorrow'
import Cart from '../Cart/Cart';
import { Routes, Route } from 'react-router-dom'
import s from './main.module.scss'
const Main = () => {
    return (
        <div className={s.Main}>
                  <Routes>
        <Route path='/' element={<Life />} />
        <Route path='/tomorrow' element={<Tomorrow />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
        </div>
    );
}

export default Main;
