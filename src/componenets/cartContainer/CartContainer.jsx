import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { clearCart } from '../../features/cart/cartSlice'
import { openModal } from '../../features/modal/modalSlice'
import Modal from '../modal/Modal'
import SingleCart from './SingleCart'


const CartContainer = () => {
    const dispatch = useDispatch()
    const { amount, cartItems } = useSelector(store => store.cart)
    const { isOpen } = useSelector(store => store.modal)

    if (amount < 1) return (
        <section>
            <h2>Your cart beg</h2>
            <h5>is currently empty</h5>
        </section>
    )

    return (
        <section>
            {isOpen && <Modal />}
            <h2>Your cart beg</h2>
            <div className="single-cart-container">
                {cartItems.map(el => <SingleCart key={el.id} {...el} />)}
            </div>
            <footer>
                <div>
                    <b>Totals</b>
                    <b>{amount.toFixed(2)} $</b>
                </div>
                <button className='btn-clear' onClick={() => dispatch(openModal())}>Clear Cart</button>
            </footer>
        </section>
    )
}

export default CartContainer
