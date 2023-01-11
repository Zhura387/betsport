import React from 'react';
import s from './cart.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addWins } from '../../redux/winsSlice';

const Cart = () => {
    const itemsChoise = useSelector(state => state.choise.value)
    const itemsRate = useSelector(state => state.rate.value)
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const [sum, setSum] = React.useState('');

    const hendleClick = (s) => {
        let winSums = itemsChoise.map((item) => item.kof * s).join(' ')
        let winSum = (Math.floor(winSums * 100) / 100)
        navigate('/')
        dispatch(addWins(`Ставка прията! Возможный выигрышь: ${winSum} BYN`));
    };

    return (
        <div className={s.content}>
            <div>
                {itemsRate.map((item) => (
                    <div key={item.P} className={s.cart}>
                        <p className={s.player}>{item.A}-{item.B}</p>

                    </div>))}
                {itemsChoise.map((item) => (
                    <div key={item.kof} className={s.cart}>
                        <p>Выбранная ставка {item.rate}</p>
                        <p> Ваш коффициент {item.kof}</p>
                        <div>
                            <input min="1"  type='number' placeholder='введите сумму' onChange={(e) => setSum(e.target.value)} value={sum}></input>
                            <button onClick={() => hendleClick(sum)}>подтвердить</button>
                        </div>
                    </div>))}


                <div><p>Вам необходимо выбрать ставку и подтвердить сумму</p>
                </div>
            </div>
        </div>
    );
}

export default Cart;
