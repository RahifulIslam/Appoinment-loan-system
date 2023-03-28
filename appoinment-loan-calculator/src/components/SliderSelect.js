
import React from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = ({data}) => {
  return (
    <div>
      <SliderComponent
        amount={data.homeValue}
        unit="$"
        defaultValue={data.homeValue}
        value={data.homeValue}
        min={1000}
        max={10000}
        step={100}
        label={"Home value"}
        onChange={(e) => console.log(e.target.value)}
      />

      <SliderComponent
        amount={3500}
        unit="$"
        defaultValue={3000}
        min={1000}
        max={10000}
        step={100}
        label={"Down payment"}
        onChange={(e) => console.log(e.target.value)}
      />

      <SliderComponent
        amount={3500}
        unit="$"
        defaultValue={3000}
        min={1000}
        max={10000}
        step={100}
        label={"Loan amount"}
        onChange={(e) => console.log(e.target.value)}
      />

      <SliderComponent
        amount={2}
        unit="%"
        defaultValue={2}
        min={2}
        max={18}
        step={.5}
        label={"Interest rate"}
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  )
}

export default SliderSelect