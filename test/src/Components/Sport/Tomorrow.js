import React from 'react';
import s from './sport.module.scss'
import { useSelector } from 'react-redux';
const Sport = () => {
    const items = useSelector(state => state.tomorrow.value)
    return (
        <div Sport={s.Sport}>
            {items.map((item)=>(
  <div key={item.id } className={s.list}>
    <div>
    <p>Футбол</p>
    <div>
     {item.A.map((item)=>item.A.map((item)=>(<p key={item.P}>{item.A} - {item.B} </p>)))}
     {item.A.map((item)=>item.A.map((item)=>(<p key={item.P}>счет:{item.C} тайм:{item.P} время:{item.T} </p>)))}
     {item.A.map((item)=>item.A.map((item)=>(<p key={item.P}><button>П1{item.P1}</button><button>X{item.X}</button><button>П2{item.P2}</button></p> )))}
     </div>
     <div>
     {item.A.map((item)=>item.B.map((item)=>(<p key={item.P}>{item.A} - {item.B} </p>)))}
     {item.A.map((item)=>item.B.map((item)=>(<p key={item.P}>счет:{item.C} тайм:{item.P} время:{item.T} </p>)))}
     {item.A.map((item)=>item.B.map((item)=>(<p key={item.P}><button>П1{item.P1}</button><button>X{item.X}</button><button>П2{item.P2}</button></p> )))}
     </div>
     </div>
     <div>
     <p>Волейбол</p>
     <div>
     {item.B.map((item)=>item.A.map((item)=>(<p key={item.P}>{item.A} - {item.B} </p>)))}
     {item.B.map((item)=>item.A.map((item)=>(<p key={item.P}>счет:{item.C} период:{item.P} время:{item.T} </p>)))}
     {item.B.map((item)=>item.A.map((item)=>(<p key={item.P}><button>П1{item.P1}</button><button>П2{item.P2}</button></p> )))}
     </div>
     </div>
     <div>
     <p>Баскетбол</p>
     <div>
     {item.C.map((item)=>item.A.map((item)=>(<p key={item.P}>{item.A} - {item.B} </p>)))}
     {item.C.map((item)=>item.A.map((item)=>(<p key={item.P}>счет:{item.C} период:{item.P} время:{item.T} </p>)))}
     {item.C.map((item)=>item.A.map((item)=>(<p key={item.P}><button>П1{item.P1}</button><button>П2{item.P2}</button></p> )))}
     </div>
     </div>
     <div>
     <p>Хоккей</p>
     {item.D.map((item)=>item.A.map((item)=>(<p key={item.P}>{item.A} - {item.B} </p>)))}
     {item.D.map((item)=>item.A.map((item)=>(<p key={item.P}>счет:{item.C} период:{item.P} время:{item.T} </p>)))}
     {item.D.map((item)=>item.A.map((item)=>(<p key={item.P}><button>П1{item.P1}</button><button>X{item.X}</button><button>П2{item.P2}</button></p> )))}
     </div>
   </div>
     ))}
        </div>
    );
}

export default Sport;