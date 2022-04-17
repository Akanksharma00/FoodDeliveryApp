import React,{useContext, useRef, useState} from 'react';

import style from './MealItemForm.module.css';

import Input from '../../UI/Input';
import CartContext from '../../../store/cart-context';

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const cartCtx = useContext(CartContext);
    const amountInputRef = useRef();

    // const addItemToCartHandler = (e) => {
    //     e.preventDefault();
    //     const quantity = document.getElementById('amount_'+props.id).value;
    //     cartCtx.addItem({...props.item, quantity:quantity} );
    //     console.log('after addItemToCart: ',cartCtx);
    // }

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length ===0 || enteredAmountNumber<1 || enteredAmountNumber>5){
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }

    return(
        <form className={style.form} onSubmit={submitHandler}>
            {/* {console.log(cartCtx.items)} */}
            <Input 
                ref = {amountInputRef}
                label='Amount' 
                input={{
                    id:'amount_'+props.id,
                    type:'number', 
                    min:'1',
                    max:'5',
                    step:'1',
                    defaultValue:'1'
                }}/>
            <button type='submit'>+Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    );
};

export default MealItemForm;
