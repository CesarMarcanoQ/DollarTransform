import { Component } from 'react'

export default class Main extends Component {

    constructor() {
        super()
        this.state = {
            usd: 0
        }

        fetch("https://s3.amazonaws.com/dolartoday/data.json")
            .then(response => response.json())
            .then(data => {
                this.setState({usd: data.USD.promedio, bs: null, result: null})
            });
    }

    handleBS = e => {
        const bsType = e.target.value

        this.setState({bs: bsType})
    }

    transform = e => {
        e.preventDefault()
        this.setState({result: (this.state.usd * this.state.bs)})
    }

    render() {
        return (
            <main>
                <h1>Precio del dólar: {new Intl.NumberFormat("de-DE").format(this.state.usd)}BS</h1>
                <form action="" onSubmit={this.transform}>
                    <input type="number" value={this.state.bs} onChange={this.handleBS} placeholder="Dolares" name="bolivar" id="bolivar"/>
                    <button type="submit">Transformar a bolívares</button>
                    <br/>
                    {new Intl.NumberFormat("de-DE").format(this.state.result)}BS
                </form>
            </main>
        )
    }
}