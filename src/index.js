import React from 'react';
import ReactDOM, { createPortal, render } from 'react-dom';
import './index.css';




class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => (
            {
                isToggleOn: !prevState.isToggleOn
            }
        ))
    }

    render(){
        return <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'On': 'OFF'}
        </button>
    }
}

function tick() {
    const date = new Date();
    ReactDOM.render(
        <Toggle />,
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