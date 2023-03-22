import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import Tenure from "./components/Tenure";
import Result from "./components/Result";

function App() {
<<<<<<< HEAD
  ///
  ///
=======
  //
  //
>>>>>>> 725f0c5dd6f957414d5640c46347b8d90523a80f
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth={"xl"}>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <SliderSelect />
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
