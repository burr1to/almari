import React from 'react'
import Image from './Image'
import Button from "./Button"
import styled from 'styled-components'


const Title = styled.h6`
text-align= "center" ,
`
function RandomItems({item}) {
  return (
    <div className="random-container">
      <Image src = {item.img} className = "main_image random-img"/>
      <div className="random-info">
        <Title>{item.title}</Title>
        <Button version = "tertiary">Shop Now</Button>
        
      </div>

      
    </div>
  )
}

export default RandomItems