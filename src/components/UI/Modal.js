import React from 'react';
import ReactDOM from 'react-dom';

import style from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={style.backdrop} onClick={props.onHideCart}/>
}

const ModalOverlay = (props) => {
    return(
        <div className={style.modal}>
            <div className={style.content}>{props.children}</div>
        </div>
    );
}

const Modal = (props) => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onHideCart={props.onHideCart}/>,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
};

export default Modal;