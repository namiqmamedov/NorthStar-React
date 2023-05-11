
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

        // add item

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

        // remove item

        removeItem(state,action){
            const id = action.payload
            const existingItem = state.cartItems.find(item=> item.id === id)
            state.totalQuantity--

            if(existingItem === 1){
                state.cartItems = state.cartItems.filter(item=> item.id === id)
            }
            else{
                existingItem.quantity--
                existingItem.totalPrice = Number(existingItem.totalPrice)
            }

            
        }    
    },
})

export const cartActions = cartSlice.actions;
export default cartSlice;   