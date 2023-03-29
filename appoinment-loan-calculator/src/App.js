import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import Tenure from "./components/Tenure";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTern: 5,
    interestRate: 5
  })

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth={"xl"}>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <SliderSelect data={data} setData={setData}/>
            <Tenure />
          </Grid>
          <Grid item md={6}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
