import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { removeItem, incrementAmount, decrementAmount } from '../../features/cart/cartSlice'

const SingleCart = ({ amount, img, id, title, price }) => {
    const dispatch = useDispatch()
    return (
        <div className='single-cart'>
            <article>
                <img src={img} alt={title} />
                <div className='description'>
                    <h2>{title}</h2>
                    <h4 className="price">{price}$</h4>
                    <h4 className="remove" onClick={() => dispatch(removeItem(id))}>remove item</h4>
                </div>
                <div className="total">
                    <button onClick={() => dispatch(incrementAmount(id))}><AiOutlineArrowUp /></button>
                    <b >{amount}</b>
                    <button onClick={() => {
                        dispatch(decrementAmount(id))
                    }}><AiOutlineArrowDown /></button>
                </div>
            </article>
        </div>
    )
}

export default SingleCart
