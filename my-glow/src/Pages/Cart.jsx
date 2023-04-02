import { useDispatch, useSelector } from 'react-redux';
import { Scrollbars } from "react-custom-scrollbars-2";
import "./cart.css";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
  Button,
  Image,
  CloseButton,
  Center,
} from '@chakra-ui/react';



import { removeFromCart,incrementQuantity,decrementQuantity } from '../Redux/cartReducer/action';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => (store.cartReducer));
  console.log('cartItems:', cartItems.length)


  let total = 0;
  for(let i=0;i<cartItems.length;i++){
    total+=(+cartItems[i].price)*(cartItems[i].quantity)
   

  }
  // console.log(+cartItems.price*cartItems.quanity)

  if (cartItems.length === 0) {
    return (
      <Box mt={'7%'}>
    <Center>
        <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{cartItems.length} </span>{" "}
            items in shopping cart
          </p>
          <div className="Empty">Cart is Empty !</div>
        </section>
        </Center>
      </Box>
    );
  }

  return (
    <Box mt={'7%'}>
     
    
      <section className="main-cart-section">
      
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{cartItems.length} </span> items
          in shopping cart
        </p>
        

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {cartItems.map((curItem) => {
                console.log(curItem)
                
                // return   <Items key={curItem.id} {...curItem} />;


                return (<>
                   <div className="items-info">
                    <div className="product-img">
                      <img src={curItem.image1} alt="iamge" />
                    </div>
            
                    <div className="title">
                      <h2>{curItem.title}</h2>
                      <p>{curItem.description}</p>
                    </div>
            
                    <div className="add-minus-quantity">
                      <i className="fas fa-minus minus" onClick={() => dispatch(decrementQuantity(curItem.id))}>-</i>
                      <input type="text" placeholder={curItem.quantity} disabled />
                      <i className="fas fa-plus add" onClick={() => dispatch(incrementQuantity(curItem.id))}>+</i>
                    </div>
            
                    <div className="price">
                      <h3>{(+curItem.price)*(curItem.quantity)}₹</h3>
                    </div>
            
                    <div className="remove-item">
                      {/* <i
                        className="fas fa-trash-alt remove"
                        onClick={() => dispatch(removeFromCart(curItem.id))}></i> */}
                        <Button  onClick={() => dispatch(removeFromCart(curItem.id))} >Remove</Button>
                    </div>
                  </div>
            
                  <hr />
                </>) 
                
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>{total}₹</span>
          </h3>
          <button>checkout</button>
         
        </div>
      </section>
      
    </Box>
  );




};

export default Cart;