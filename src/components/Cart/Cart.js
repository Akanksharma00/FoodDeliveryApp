import React,{useContext} from 'react';

import style from './Cart.module.css';

import CartItem from './CartItem';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';

const Cart = (props)=> {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
      cartCtx.addItem({...item, amount:1});  
    };

    console.log('cartCtx: ',cartCtx);
    const cartItems = (<ul className={style['cart-items']}>
                        {cartCtx.items && cartCtx.items.map((i) => {
                            return <CartItem 
                                        key={i.id} 
                                        name={i.name} 
                                        amount={i.amount} 
                                        price={i.price} 
                                        onRemove={cartItemRemoveHandler.bind(null, i.id)} 
                                        onAdd={cartItemAddHandler.bind(null,i)}
                                    />
                        })}
                    </ul>);

    return(
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={style.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={style.actions}>
                <button className={style['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={style.order}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;