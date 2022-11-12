import React from 'react'
import Image from './Image'
import Button from "./Button"
import styled from 'styled-components'


const Title = styled.p`
`
function RandomItems({item}) {
  return (
    <div className="random-container">
      <Image src = {item.img} className = "main_image ok"/>
      <div className="random-info">
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
        
      </div>

      
    </div>
  )
}

export default RandomItems