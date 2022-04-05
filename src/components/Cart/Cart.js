import React,{useState} from 'react';

import style from './Cart.module.css';

import Modal from '../UI/Modal';

const Cart = (props)=> {
    console.log(props);
    return(
        <Modal onHideCart={props.onHideCart}>
            <div className={style.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={style.actions}>
                <button className={style['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={style.order}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;