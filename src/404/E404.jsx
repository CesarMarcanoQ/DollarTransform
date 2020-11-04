import { Component } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
  } from "@material-ui/core";

export default class E404 extends Component {
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
                <div className="centered">
                    <Typography variant="h4">Error 404 No existe la página que estás buscando.</Typography>
                </div>
            </main>
        )
    }
}