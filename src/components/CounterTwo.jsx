import React from "react";

export default class CounterTwo extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <section>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
                <button onClick={() => this.setState({count: this.state.count - 1})}>-</button>
            </section>
        );
    }
}
