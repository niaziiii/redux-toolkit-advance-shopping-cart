import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const state = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true
}
const url = 'https://course-api.com/react-useReducer-cart-project'
export const getCartItems = createAsyncThunk('cart/getCartItems', async (name, thunkAPi) => {
    try {
        const res = await fetch(url)
        return await res.json()
    } catch (err) {
        return thunkAPi.rejectWithValue('Something went wrong! data isnt accessible')
    }
})


const cartSlice = createSlice({
    name: 'cart',
    initialState: state,
    reducers: {
        clearCart: (store) => {
            // muteting the state of object using toolkit immer
            store.cartItems = []
            store.amount = 0
            store.total = 0
        },
        removeItem: (state, actions) => {
            const id = actions.payload;
            state.cartItems = state.cartItems.filter(el => el.id !== id)
        },
        incrementAmount: (state, actions) => {
            const id = actions.payload;
            const cartItem = state.cartItems.find(el => el.id === id)
            cartItem.amount += 1;
        },
        decrementAmount: (state, actions) => {
            const id = actions.payload;
            const cartItem = state.cartItems.find(el => el.id === id)
            cartItem.amount -= 1;
            if (cartItem.amount < 1) state.cartItems = state.cartItems.filter(el => el.id !== id)
        },
        calAmount_total: (state) => {
            let amount = 0
            let total = 0
            state.cartItems.forEach(el => {
                amount = (Number(amount) + Number(el.price) * Number(el.amount))
                total += el.amount
                return el;
            })
            state.total = total;
            state.amount = amount;
        }
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true
        },
        [getCartItems.fulfilled]: (state, actions) => {
            state.isLoading = false
            const data = actions.payload
            if (data) state.cartItems = [...data]
        },
        [getCartItems.rejected]: (state, actions) => {
            console.log(actions);
            state.isLoading = true
        },
    }
})

export const { clearCart, removeItem, incrementAmount, decrementAmount, calAmount_total } = cartSlice.actions
export default cartSlice.reducer;