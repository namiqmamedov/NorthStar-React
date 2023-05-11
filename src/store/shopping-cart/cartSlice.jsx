
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount:0
} 

const cartSlice =  createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem(state,action){
            const newItem = action.payload
            const exisitingItem = state.cartItems.find(item => item.id === newItem.id)
            state.totalQuantity++

            if(!exisitingItem){
                    state.cartItems.push({
                        id: newItem.id,
                        title:newItem.title,
                        image: newItem.image,
                        price: newItem.price,
                        quantity: 1,
                        totalPrice: newItem.price
                    })
            }
            else{
                exisitingItem.quantity++
                exisitingItem.totalPrice = Number(exisitingItem.totalPrice) + Number(newItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total,item) => (
                total + Number(item.price) * Number(item.quantity)
            ))
        },
    },
})

export const cartActions = cartSlice.actions;
export default cartSlice;   