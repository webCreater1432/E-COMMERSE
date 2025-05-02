import React from 'react'
import "./Product.css"
import { useDispatch } from 'react-redux';
import { addItem } from '../../Redux/CartSlice';
const Product = ({name,image,price,id}) => {
  let dispatch = useDispatch();
  return (
    <div className='product' key={id}>
        <img src={image} alt="" />
        <div className="productDetails">
            <h3>{name}</h3>
            <p>{price}</p>
            <button onClick={()=>{
              dispatch(addItem(
                {
                  id: id,
                  name: name,
                  image: image,
                  price: price,
                  quantity: 1
                }
              ))
            }}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product