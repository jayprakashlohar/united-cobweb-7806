import { Box } from '@chakra-ui/react'
import React from 'react'
import "../../styles/Slider.css"

function ProductSliderCard({img, title, rate,style}) {
  return (
    <Box className='slider_card_container'>
      <Box className='slider_card_parent'>
        <Box>
            <img src={img} alt={title} />
        </Box>
        <Box>
            <p className={`text-center ${style}`}>{title}</p>
        </Box>
        <Box>
            <p className='text-center '>{rate}</p>
            
        </Box>
      </Box>
    </Box>
  )
}

export default ProductSliderCard
