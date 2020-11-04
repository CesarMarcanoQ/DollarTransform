import { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Grid,
  Paper,
  Button,
} from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons";
import "./Main.css";
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      usd: 0,
      bs2: null,
      s: null,
      result: null,
    };

    setInterval(() => {
      fetch("https://s3.amazonaws.com/dolartoday/data.json")
        .then((response) => response.json())
        .then((data) => {
          this.setState({ usd: data.USD.promedio });
        });
    }, 1000);
  }

  handleS = (e) => {
    const bsType = e.target.value;

    this.setState({ s: bsType });
  };
  handleBS = (e) => {
    const bsType = e.target.value;

    this.setState({ bs2: bsType });
  };

  transformBS = (e) => {
    e.preventDefault();
    this.setState({ result2: this.state.bs2 / this.state.usd });
  };
  transformS = (e) => {
    e.preventDefault();
    this.setState({ result: this.state.usd * this.state.s });
  };

  render() {
    return (
      <main>
        <AppBar
          position="fixed"
          color="default"
          style={{ background: "rgb(0, 83, 35)", color: "white" }}
          className="appbar"
        >
          <Toolbar>
            <Typography variant="h5">DollarTransform</Typography>
          </Toolbar>
        </AppBar>
        <br />
        <br />
        <br />
        <Typography variant="h4 " color="initial">
          Precio del dólar:{" "}
          {new Intl.NumberFormat("de-DE").format(this.state.usd)}BS
        </Typography>

        <Grid container spacing={0}>
          <Grid item xs={12} sm={5}>
            <Paper
              elevation={3}
              style={{
                background: "rgb(206, 255, 211)",
                margin: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <form action="" onSubmit={this.transformS}>
                <TextField
                  id="dollars"
                  label="Monto en Dólares"
                  style={{ color: "black" }}
                  type="number"
                  value={this.state.s}
                  onChange={this.handleS}
                />
                <br />
                <br />
                <Button
                  type="submit"
                  variant="filled"
                  style={{ background: "rgb(0, 95, 51)", color: "white" }}
                >
                  Transformar a bolívares
                </Button>
                <br />
                <Typography variant="body1" color="initial">
                  {new Intl.NumberFormat("de-DE").format(this.state.s)}${" "}
                  <ArrowRight />{" "}
                  {new Intl.NumberFormat("de-DE").format(this.state.result)}BS
                </Typography>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={12} sm={5}>
            <Paper
              elevation={3}
              style={{
                background: "rgb(206, 225, 255)",
                margin: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <form action="" onSubmit={this.transformBS}>
                <TextField
                  id="dollars"
                  label="Monto en Bolívares"
                  style={{ color: "black" }}
                  type="number"
                  value={this.state.bs2}
                  onChange={this.handleBS}
                />
                <br />
                <br />
                <Button
                  type="submit"
                  variant="filled"
                  style={{ background: "rgb(0, 95, 51)", color: "white" }}
                >
                  Transformar a dólares
                </Button>
                <br />
                <Typography variant="body1" color="initial">
                  {new Intl.NumberFormat("de-DE").format(this.state.bs2 || 0)}BS{" "}
                  <ArrowRight />{" "}
                  {new Intl.NumberFormat("de-DE").format(
                    this.state.result2 || 0
                  )}
                  $
                </Typography>
              </form>
            </Paper>
          </Grid>
        </Grid>
        <div style={{ padding: "1rem" }}>
          <Typography
            variant="body1"
            color="initial"
            style={{ textAlign: "justify" }}
          >
            DolarTransform está constantemente actualizando el precio del dolar
            a través de los servicios de la API de DolarToday. No hace falta
            obtener el precio del dólar a través de una entrada de texto para
            realizar las transformaciónes.
          </Typography>
          <br />
          <Typography
            variant="body1"
            color="initial"
            style={{ textAlign: "justify" }}
          >
            No olvídes revisar mi cuenta de GitHub y darle una estrella a{" "}
            <a
              href="https://github.com/CesarMarcanoQ/DollarTransform"
              target="blank"
            >
              mi proyecto
            </a>
            .
          </Typography>
        </div>
      </main>
    );
  }
}
