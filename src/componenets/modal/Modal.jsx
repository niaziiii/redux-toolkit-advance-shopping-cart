import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../features/cart/cartSlice';
import { closeModal } from '../../features/modal/modalSlice';

const Modal = () => {
    const dispatch = useDispatch();
    return (
        <div className='Modal'>
            <div className="Modal__container">
                <h2>Are you sure? you want to clear the shopping cart</h2>
                <div>
                    <button onClick={() => {
                        dispatch(clearCart())
                        dispatch(closeModal())
                    }}>Submit</button>
                    <button onClick={() => dispatch(closeModal())}>Cancel</button>
                </div>
            </div>

        </div>
    )
}

export default Modal
