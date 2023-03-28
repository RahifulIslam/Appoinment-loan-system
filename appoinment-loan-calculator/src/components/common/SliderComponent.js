import React from 'react';
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';


const SliderComponent = ({ defaultValue, min, max, amount, label, unit, step, value, onChange }) => {
  return (
    <Stack my={1}>
      <Stack gap={2}>
        <Typography variant='subtitle2'>{label}</Typography>
        <Typography variant='h5'>{unit} {amount}</Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        value={value}
        marks
        step={step}
        onChange= {onChange}
      />
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='caption' color='text.secondary'>{unit} {min}</Typography>
        <Typography variant='caption' color='text.secondary'>{unit} {max}</Typography>
      </Stack>
    </Stack>
  );
}

export default SliderComponent