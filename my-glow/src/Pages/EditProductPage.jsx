import { Button, ButtonGroup, Heading, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { patchProduct } from '../Redux/productReducer/action'
import { useNavigate } from 'react-router-dom'

const initialState = {
    id:"",
    brand:"",
    category:"",
    discount:"",
    image1:"",
    image2:"",
    image3: "",
    price:"",
    rating:"",
    title:"",
}

const EditProductPage = () => {

    const dispatch = useDispatch()



 const store = useSelector((store)=>store.productReducer.singleproduct)

 console.log(store)
 const [state,setState] = useState({})
 const navigate = useNavigate()

  const handleChange = (e) =>
  {
     setState({...state,[e.target.name]:e.target.value})
  }

const handleClick = ()=>{
    dispatch(patchProduct(store.id,state)).then(()=>{
       navigate(`/delete`)
    })
}




  return (
    <div> 
        <h1>EditProductPage </h1>
        <Heading as = {"h3"}>Title</Heading>
        <Input type = "text" defaultValue = {store.title} onChange={(e)=>handleChange(e)} name="title"></Input>
        <Heading as = {"h3"}>Id</Heading>
        <Input type = "number" value = {store.id} onChange={(e)=>handleChange(e)} name ="id"></Input>
        <Heading as = {"h3"}>Brand</Heading>
        <Input type = "text" defaultValue = {store.brand} onChange={(e)=>handleChange(e)} name ="brand"></Input>
        <Heading as = {"h3"}>Category</Heading>
        <Input type = "text" defaultValue = {store.category} onChange={(e)=>handleChange(e)} name="category"></Input>
        <Heading as = {"h3"}>Discount</Heading>
        <Input type = "number" defaultValue = {store.discount} onChange={(e)=>handleChange(e)} name="discount"></Input>
        <Heading as = {"h3"}>Image1</Heading>
        <Input type = "text" defaultValue = {store.image1} onChange={(e)=>handleChange(e)} name='image1'></Input>
        <Heading as = {"h3"}>Image2</Heading>
        <Input type = "text" defaultValue = {store.image2} onChange={(e)=>handleChange(e)} name='image2'></Input>
        <Heading as = {"h3"}>Image3</Heading>
        <Input type = "text" defaultValue = {store.image3} onChange={(e)=>handleChange(e)} name='image3'></Input>
        <Heading as = {"h3"}>Price</Heading>
        <Input type = "text" defaultValue = {store.price} onChange={(e)=>handleChange(e)} name='price'></Input>
        <Heading as = {"h3"}>Ratings</Heading>
        <Input type = "number" defaultValue= {store.rating}onChange={(e)=>handleChange(e)} name='rating'></Input>
        <Button onClick = {handleClick}>Edit Product</Button>
    
    
    </div>
  )
}

export default EditProductPage