import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const {total} = useSelector(store => store.cart)
    return (
        <nav>
            <div>Redux-toolKit</div>
            <div>{total}</div>
        </nav>
    )
}

export default Navbar
