import { Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import Tenure from "./components/Tenure";
import Result from "./components/Result";

function App() {
  //
  //
  return (
    <div className="App">
      <Navbar/>
      <Grid container spacing={5}>
        <Grid item>
          <SliderSelect/>
          <Tenure/>
        </Grid>
        <Grid item>
          <Result/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
