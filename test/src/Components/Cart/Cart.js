import React from 'react';
import s from './cart.module.scss'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addWins } from '../../redux/winsSlice';

const Cart = () => {
    const itemsChoise = useSelector(state => state.choise.value)
    const itemsRate = useSelector(state => state.rate.value)
    const dispatch = useDispatch()
    let navigate = useNavigate();
const [sum, setSum] = React.useState('');


const hendleClick = (s) => {
    let winSum =itemsChoise.map((item)=>item.kof*s).join(' ')
    navigate('/')
    
    
    dispatch(addWins(`Ставка прията! Возможный выигрышь:${winSum}`));
  };
 
    return (
        <div className={s.Cart}>
            {itemsRate.map((item) => (
                <div>
                    <p>{item.A}-{item.B}</p>

                </div>))}
            {itemsChoise.map((item) => (
                <div>
                    <p>Выбранная ставка{item.rate}</p>
                    <p> Ваш коффициент{item.kof}</p>
                </div>))}
<div>
    <input onChange={(e) => setSum(e.target.value)} value={sum}></input>
    <button  onClick={() => hendleClick(sum)}>add</button>
</div>
        </div>
    );
}

export default Cart;
