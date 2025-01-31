import React from 'react'

const ProductDetails = ({params}) => {
    const id = params.id
  return (
    <div>{id}</div>
  )
}

export default ProductDetails