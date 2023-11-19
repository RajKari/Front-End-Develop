import React,{ useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breedcrums from '../Components/Breedcrums/Breedcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox'
import RelatedProduct from '../Components/RelatedProducts/RelatedProduct'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((event) => event.id === Number(productId))
  return (
    <div>
      <Breedcrums product={product} />
      <ProductDisplay  product={product}/>
      <DescriptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Product
