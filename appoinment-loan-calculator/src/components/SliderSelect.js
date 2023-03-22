
import React from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = () => {
  return (
    <div>
      <SliderComponent amount={3500} unit="$" defaultValue ={3000} min={1000} max={10000} label={"Hello everyone"}/>
    </div>
  )
}

export default SliderSelect