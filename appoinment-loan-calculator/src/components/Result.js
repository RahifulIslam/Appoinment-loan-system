import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Stack, Typography } from '@mui/material';
ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({data}) => {
  const {homeValue, downPayment, loanAmount, loanTerm, interestRate} = data;

  const totalLoanMonths = loanTerm * 12;
  const interestPermonth = interestRate / 100 / 12;

  const monthlyPayment = (loanAmount * interestPermonth * 
    (1+interestPermonth) ** totalLoanMonths) /
    ((1 + interestPermonth) ** totalLoanMonths - 1)

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

   const pieChartData = {
    labels: ['Principal', 'Interest'],
    datasets: [
      {
        label: 'Ratio of principal and interest',
        data: [homeValue, totalInterestGenerated],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return (
    <Stack gap={3}>
      <Typography variant='h5' textAlign="center">
        Monthly payment: $ {monthlyPayment.toFixed(2)}
      </Typography>
      <Stack direction='row' justifyContent="center">
    <div>
      <Pie data={pieChartData} />
    </div>
    </Stack>
    </Stack>
  )
}

export default Result