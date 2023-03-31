import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
  Button,
  Image,
  CloseButton,
} from '@chakra-ui/react';



import { removeFromCart,incrementQuantity,decrementQuantity } from '../Redux/cartReducer/action';

const Cart = () => {
  const dispatch = useDispatch();
  const  cartItems  = useSelector((store) =>{
    console.log(store)
    return store.cartReducer;
  });
  console.log('cartItems:', cartItems)

  // const total = cartItems.reduce(
  //   (acc, item) => acc + +item.price * item.quantity,
  //   0
  // );
  // console.log(total)

  return (
    <Box p={4}>
      <Heading as="h1" size="lg" mb={4}>
        Your Cart
      </Heading>

      {cartItems?.length > 0 ? (
        <>
          {cartItems?.map((item) => (
            <Flex key={item.id} alignItems="center" mb={4}>
              <Image src={item.image1} alt={item.name} boxSize="150px" />

              <Box ml={4} flex={1}>
                <Text fontSize="xl" fontWeight="bold">
                  {item.category}
                </Text>
                <Text fontSize="md" color="gray.500">
                  {item.price} R
                </Text>

                <Flex alignItems="center" mt={2}>
                  <Button
                    size="sm"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  >
                    -
                  </Button>
                  <Text mx={2}>{item.quantity}</Text>
                  <Button
                    size="sm"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                  >
                    +
                  </Button>

                  <Spacer />

                  <CloseButton
                    onClick={() => dispatch(removeFromCart(item.id))}
                  />
                </Flex>
              </Box>
            </Flex>
          ))}

          <Flex justifyContent="flex-end" mt={8}>
            <Box>
              <Text fontWeight="bold">Total:</Text>
              {/* <Text fontSize="xl">{total} USD</Text> */}
            </Box>
          </Flex>
        </>
      ) : (
        <Text>Your cart is empty</Text>
      )}
    </Box>
  );
};

export default Cart;