import { Box } from '@chakra-ui/react'
import React from 'react'
import "../../styles/Slider.css"

function SliderCard({img, title, rate, price}) {
  return (
    <Box className='slider_card_container'>
      <Box className='slider_card_parent'>
        <Box>
            <img src={img} alt="iphone" />
        </Box>
        <Box>
            <p>{title}</p>
        </Box>
        <Box>
            <p>{rate}</p>
            <p>₹{price}</p>
        </Box>
      </Box>
    </Box>
  )
}

export default SliderCard
