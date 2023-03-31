import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "./actionType";

const initialState = {
  cartItems: [
    {
        "id": 31,
        "image1": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-drop-the-base-serum-foundation-10-latte-light-warm-undertone-10959780806739.jpg?v=1619107905",
        "image2": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-drop-the-base-serum-foundation-10-latte-light-warm-undertone-10965228388435.jpg?v=1619107903",
        "image3": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-drop-the-base-serum-foundation-10-latte-light-warm-undertone-10959780937811.jpg?v=1619107907",
        "title": "Drop The Base Serum Foundation",
        "price": "765",
        "brand": "lakme",
        "category": "foundation",
        "rating": "3.7",
        "discount": "15"
      },
      {
        "id": 32,
        "image1": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_84779037-e1a3-4f01-bf38-38e727208de4.jpg?v=1678725233",
        "image2": "https://cdn.shopify.com/s/files/1/0906/2558/products/3_358339fb-c09f-4deb-9d60-1cc5a2b70707.jpg?v=1678725238",
        "image3": "https://cdn.shopify.com/s/files/1/0906/2558/products/4_4c91e8d7-551e-4e59-81db-5a9f01d1f8c7.jpg?v=1678725240",
        "title": "Goddess Of Flawless BB Serum",
        "price": "699",
        "brand": "lakme",
        "category": "serum",
        "rating": "4.5",
        "discount": "21"
      },
      {
        "id": 33,
        "image1": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_4d1e084b-e775-4009-a8cc-0aa6a0d2f3be.jpg?v=1678725254",
        "image2": "https://cdn.shopify.com/s/files/1/0906/2558/products/2_9bc4c9c3-966c-4385-a209-794cb1ffda16.jpg?v=1678725256",
        "image3": "https://cdn.shopify.com/s/files/1/0906/2558/products/4_e850db68-95ee-45c2-9547-1eb3d3cb1003.jpg?v=1678725260",
        "title": "MamaEarth Goddess Of Flawless BB Serum",
        "price": "789",
        "brand": "mamaearth",
        "category": "serum",
        "rating": "4.0",
        "discount": "7"
      }
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        const newCartItems = [...state.cartItems];
        newCartItems[itemIndex].quantity += 1;
        return {
          ...state,
          cartItems: newCartItems,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case INCREMENT_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case DECREMENT_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };

    default:
      return state;
  }
};

// export const reducer = (state=initialState,{type,payload}) => {
//     switch(type){
//         default:{
//             return state;
//         }
//     }
// }


