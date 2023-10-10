import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AllProducts from './Cards'

function Products() {

const [Oneproduct, setOneProduct] = useState()
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(res => 
     setOneProduct(res))
  }, [])
 
  const params = useParams()
  const id= params.id
 
  if (!Oneproduct) {
    return 
  }

return ( 

  <div>
    {<img src={Oneproduct[id].image } width='100' />}  <div>{  Oneproduct[id].title } <div>{Oneproduct[id].price} </div></div> 
   
</div>
 
)}
export default Products;