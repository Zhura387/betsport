import React from 'react';
import s from './sport.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addChoise } from '../../redux/choiseSlice'
import { addRate } from '../../redux/rateSlice'


const Sport = () => {
  const items = useSelector(state => state.tomorrow.value)

  let navigate = useNavigate();
  const dispatch = useDispatch()
  console.log(items)

  const choise = (a, b) => {
    navigate('/cart')
    dispatch(addRate(b))
    dispatch(addChoise(a))
  }
  return (
        <>
      {items.map((item) => (
        <div key={item.id} className={s.list}>
          <div className={s.gamePlace}>
            <p className={s.game}>Футбол</p>

            {item.A.map((item) => item.A.map((item) => (
              <div className={s.play}>
                <p className={s.players} key={item.P}>{item.A} - {item.B} </p>
                <p>счет:{item.C} тайм:{item.P} время:{item.T} </p>
                <p><button onClick={() => choise([{ 'rate': 'П1', 'kof': item.P1 }], [item])}>П1{item.P1}</button><button onClick={() => choise([{ 'rate': 'X', 'kof': item.X }], [item])}>X{item.X}</button><button onClick={() => choise([{ 'rate': 'П2', 'kof': item.P2 }], [item])}>П2{item.P2}</button></p>
              </div>)))}
            
              {item.A.map((item) => item.B.map((item) => (
                <div className={s.play}>
                  <p className={s.players} key={item.P}>{item.A} - {item.B} </p>
                  <p>счет:{item.C} тайм:{item.P} время:{item.T} </p>
                  <p><button onClick={() => choise([{ 'rate': 'П1', 'kof': item.P1 }], [item])}>П1{item.P1}</button><button onClick={() => choise([{ 'rate': 'X', 'kof': item.X }], [item])}>X{item.X}</button><button onClick={() => choise([{ 'rate': 'П2', 'kof': item.P2 }], [item])}>П2{item.P2}</button></p>
                </div>)))}
                </div>
              <div className={s.gamePlace}>
                <p className={s.game}>Волейбол</p>

                {item.B.map((item) => item.A.map((item) => (
                  <div className={s.play}>
                    <p className={s.players} key={item.P}>{item.A} - {item.B} </p>
                    <p >счет:{item.C} период:{item.P} время:{item.T} </p>
                    <p ><button onClick={() => choise([{ 'rate': 'П1', 'kof': item.P1 }], [item])}>П1{item.P1}</button><button onClick={() => choise([{ 'rate': 'П2', 'kof': item.P2 }], [item])}>П2{item.P2}</button></p>
                  </div>)))}
                  </div>
                <div className={s.gamePlace}>
                  <p className={s.game}>Баскетбол</p>

                  {item.C.map((item) => item.A.map((item) => (
                    <div className={s.play}>
                      <p className={s.players} key={item.P}>{item.A} - {item.B} </p>
                      <p >счет:{item.C} период:{item.CH} время:{item.T} </p>
                      <p ><button onClick={() => choise([{ 'rate': 'П1', 'kof': item.P1 }], [item])}>П1{item.P1}</button><button onClick={() => choise([{ 'rate': 'П2', 'kof': item.P2 }], [item])}>П2{item.P2}</button></p>
                    </div>)))}
                    </div>
                  <div className={s.gamePlace}>
                    <p className={s.game}>Хоккей</p>
                    {item.D.map((item) => item.A.map((item) => (
                      <div className={s.play}>
                        <p className={s.players} key={item.P}>{item.A} - {item.B} </p>
                        <p>счет:{item.C} период:{item.P} время:{item.T} </p>
                        <p ><button onClick={() => choise([{ 'rate': 'П1', 'kof': item.P1 }], [item])}>П1{item.P1}</button><button onClick={() => choise([{ 'rate': 'ПX', 'kof': item.PX }], [item])}>X{item.X}</button><button onClick={() => choise([{ 'rate': 'П2', 'kof': item.P2 }], [item])}>П2{item.P2}</button></p>
                      </div>)))}
                  </div>
                </div>
     ))}
              </>
              );
}

              export default Sport;