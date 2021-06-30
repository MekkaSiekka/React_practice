import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import './index.css';




class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    tick() {
        this.setState(
            {
                date: new Date()
            }
        )
    }
    componentDidMount() {
        // ()=> this.tick() means tit is a callback, given nothing and returns a function object
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    };

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


function tick() {
    const date = new Date();
    ReactDOM.render(
        <Clock >
        </Clock>,
        document.getElementById('root')
    )
}



// function tick() {
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('root')
//     );
// }



setInterval(tick, 1000)