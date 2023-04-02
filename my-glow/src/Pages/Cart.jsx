import { useDispatch, useSelector } from 'react-redux';
import { Scrollbars } from "react-custom-scrollbars-2";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./cart.css";
import {
  Box,
  Center
} from '@chakra-ui/react';



import { removeFromCart,incrementQuantity,decrementQuantity } from '../Redux/cartReducer/action';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => (store.cartReducer));
  console.log('cartItems:', cartItems.length)


  let total = 0;
  for(let i=0;i<cartItems.length;i++){
    total+=(+cartItems[i].price)*(cartItems[i].quantity)
   

  }


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
   
    <Box mt={'5%'} >
     
    
      <section style={{height:'25' }} className="main-cart-section">
     
        <h1 style={{marginLeft:'43%',marginTop:'7%'}}>shopping Cart</h1>
        <p style={{marginLeft:'40%'}} className="total-items">
          you have <span className="total-items-count">{cartItems.length} </span> items
          in shopping cart
        </p>
       
        

        <div style={{height:'500px',width:'90%'}} className="cart-items">
          <div style={{width:'100%',height:'80%' }} className="cart-items-container">
            <Scrollbars >
              {cartItems.map((curItem) => {
                console.log(curItem)
                
                


                return (<>
                   <div className="items-info">
                    <div className="product-img">
                      <img src={curItem.image1} alt="iamge" />
                    </div>
            
                    <div className="title">
                      <h2 style={{fontSize:'25px'}}>{curItem.title}</h2>
                      <p style={{fontSize:'10px'}}>{curItem.description}</p>
                    </div>
            
                    <div className="add-minus-quantity">
                      <i className="fas fa-minus minus" onClick={() => dispatch(decrementQuantity(curItem.id))}>-</i>
                      <input type="text" placeholder={curItem.quantity} disabled />
                      <i className="fas fa-plus add" onClick={() => dispatch(incrementQuantity(curItem.id))}>+</i>
                    </div>
            
                    <div className="price">
                      <h3>₹{(+curItem.price)*(curItem.quantity)}</h3>
                    </div>
            
                    <div className="remove-item">
                     
                        <button  onClick={() => dispatch(removeFromCart(curItem.id))} style={{border:'none',background:'pink',padding:'10px',fontSize:'16px',borderRadius:'12px'}}>Remove</button>
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
            Cart Total : <span>₹{total}</span>
          </h3>
        


          <button >
                 <Link to="/address">checkout</Link> 
                </button>
         
        </div>
      </section>
      
      
    </Box>
    
  );




};

export default Cart;