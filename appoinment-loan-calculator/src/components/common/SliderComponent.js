import React from 'react';
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';


const SliderComponent = ({defaultValue, min, max, amount, label, unit}) => {
  return (
    <>
    <Stack>
    <Stack>

    </Stack>
    <Slider 
    defaultValue={defaultValue} 
    min={min} 
    max={max} 
    aria-label="Default" 
    valueLabelDisplay="auto" 
    />
    </Stack>
    </>
    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
  )
}

export default SliderComponent