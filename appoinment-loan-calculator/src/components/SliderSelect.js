
import React from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = ({data, setData}) => {
  console.log("Data are:", data)
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
        onChange={(e, value) => setData({
          ...data,
          homeValue: value,
          downPayment: value * 0.2,
          loanAmount: value * 0.8
        })}
      />

      <SliderComponent
        amount={data.downPayment}
        unit="$"
        defaultValue={data.downPayment}
        value={data.downPayment}
        min={0}
        max={data.homeValue}
        step={100}
        label={"Down payment"}
        onChange={(e, value) => setData({
          ...data,
          downPayment: value,
          loanAmount: data.homeValue - value
        })}
      />

      <SliderComponent
        amount={data.loanAmount}
        unit="$"
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        min={0}
        max={data.homeValue}
        step={100}
        label={"Loan amount"}
        onChange={(e, value) => setData({
          ...data,
          loanAmount: value,
          downPayment: data.homeValue - value
        })}
      />

      <SliderComponent
        amount={data.interestRate}
        unit="%"
        defaultValue={data.interestRate}
        value={data.interestRate}
        min={2}
        max={18}
        step={.5}
        label={"Interest rate"}
        onChange={(e, value) => setData({
          ...data,
          interestRate: value
        })}
      />
    </div>
  )
}

export default SliderSelect