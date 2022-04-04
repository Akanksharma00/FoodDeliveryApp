import React from 'react';

import style from './Header.module.css';

import mealsImg from '../../assets/meals.jpg';

import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={style.header}>
                <h1 className={style.headerH1}>{props.children}</h1>
                <HeaderCartButton />
            </header>
            <div className={style['main-image']}>
                <img src={mealsImg} alt='Meals image'/>
            </div>
        </React.Fragment>
    );
};

export default Header;