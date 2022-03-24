import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchmessage } from '../redux/message/api';

const Greeting = () => {
    const message = useSelector((state) => state.messageReducer.message);
    // console.log('message => ', message);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(fetchmessage());
        console.log('hi there');
    };

    return ( <
        div >
        <
        div >
        Greeting: { ' ' } { message } <
        /div> <
        button type = "button"
        onClick = { handleClick } > Greeting < /button> < /
        div >
    );
};

export default Greeting;