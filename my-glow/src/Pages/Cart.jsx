import React from 'react'

const Cart = () => {
  return (
    <div>Prashant</div>
  )
}

export default Cart



// import React, { createContext, useReducer, useEffect } from "react";
// import "./cart.css";
// // import { products } from "./products";
// import ContextCart from "./ContextCart";
// import { reducer } from "./reducer";

// export const CartContext = createContext();

// let products = [
//   {
//     id: 1,
//     title: "Samsung S21",
//     description: "black in color",
//     price: "2500",
//     img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     quantity: 1,
//   },
//   {
//     id: 2,
//     title: "Samsung M21",
//     description: "white in color",
//     price: "2300",
//     img: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     quantity: 1,
//   },
//   {
//     id: 3,
//     title: "Redmi 9",
//     description: "black in color",
//     price: "3500",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
//     quantity: 1,
//   },
//   {
//     id: 4,
//     title: "Iphone 12",
//     description: "Best mobile ever",
//     price: "90500",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
//     quantity: 1,
//   },
//   {
//     id: 5,
//     title: "Samsung S21",
//     description: "black in color",
//     price: "2500",
//     img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     quantity: 1,
//   },
//   {
//     id: 6,
//     title: "Redmi 9",
//     description: "black in color",
//     price: "3500",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
//     quantity: 1,
//   },
//   {
//     id: 7,
//     title: "Samsung S21",
//     description: "black in color",
//     price: "2500",
//     img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     quantity: 1,
//   },
//   {
//     id: 8,
//     title: "Iphone 12",
//     description: "Best mobile ever",
//     price: "90500",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
//     quantity: 1,
//   },
//   {
//     id: 9,
//     title: "Samsung S21",
//     description: "black in color",
//     price: "2500",
//     img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     quantity: 1,
//   },
// ];


// const initialState = {
//   item: products,
//   totalAmount: 0,
//   totalItem: 0,
// };
// // console.log(products)

// const Cart = () => {
//   // const [item, setItem] = useState(products);
//   const [state, dispatch] = useReducer(reducer, initialState);

//   // to delete the indv. elements from an Item Cart
//   const removeItem = (id) => {
//     return dispatch({
//       type: "REMOVE_ITEM",
//       payload: id,
//     });
//   };

//   // clear the cart
//   const clearCart = () => {
//     return dispatch({ type: "CLEAR_CART" });
//   };

//   // increment the item
//   const increment = (id) => {
//     return dispatch({
//       type: "INCREMENT",
//       payload: id,
//     });
//   };

//   // decrement the item
//   const decrement = (id) => {
//     return dispatch({
//       type: "DECREMENT",
//       payload: id,
//     });
//   };

//   // we will use the useEffect to update the data
//   useEffect(() => {
//     dispatch({ type: "GET_TOTAL" });
//     // console.log("Awesome");
//   }, [state.item]);

//   return (
//     <CartContext.Provider
//       value={{ ...state, removeItem, clearCart, increment, decrement }}>
//       <ContextCart />
//     </CartContext.Provider>
//   );
// };

// export default Cart;
