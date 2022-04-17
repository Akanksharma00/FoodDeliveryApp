import React,{useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import style from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    let quantity = 0;
    cartCtx.items && cartCtx.items.forEach(i =>{
        quantity = quantity + Number(i.amount);
    } )

    // const numberOfCartItems = cartCtx.items && cartCtx.items.reduce((currNumber, i)=>{
    //     return currNumber + i.amount;
    // },0);

    return(
        <button className={style.button} onClick={props.onShowCart}>
            <span className={style.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={style.badge}>{quantity}</span>
        </button>
    );
};

export default HeaderCartButton;