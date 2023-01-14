import { Component } from "react";

class Tick extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(), 1000
            ); 
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return <h1>It is {this.state.date.toLocaleTimeString()} o'lock</h1>
    }
}

export default Tick;