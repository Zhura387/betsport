import React from 'react';
import Tomorrw from '../Sport/Tomorrow'
import Life from '../Life/Life';
import { useSelector } from 'react-redux';

const All = () => {
    const [Visible, setVisible] = React.useState(true);
    const items = useSelector(state => state.wins.value)

    const x = (c) => {
        if (c) { setTimeout(() => setVisible(false), 3000); }
    }
    x(items)
    return (
        <div>
            <div>{Visible ? <div><p style={{ color: '#178505' }}>{items}</p></div> : <></>}</div>
            <div><Life /></div>
            <div><Tomorrw /></div>
        </div>
    );
}

export default All;
