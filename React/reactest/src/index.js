import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

var testDiv = document.createElement('div');
testDiv.id = 'testDiv';
document.getElementById('root').appendChild(testDiv);

const element = React.createElement(
    'h1',
    {id : 'hello',
     className : 'greeting'},
    'hello, world!'
);

ReactDOM.render(
    element,
    document.getElementById('testDiv')
);

// function tick(){
//     const elementWithTick = (
//         <div id='elementWithTick' className='Timer'>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()} now.</h2>
//         </div>
//     );
    
//     ReactDOM.render(
//         elementWithTick,
//         document.getElementById('testDiv')
//     );
// }

// setInterval(()=>tick(),1000);

// function Welcome(props){
//     return <h1>Hello, {props.name}!</h1>;
// }

// const elementWelcome = <Welcome name='xuzhe' />;
// ReactDOM.render(
//     elementWelcome,
//     document.getElementById('testDiv')
// );

// function App1(){
//     return (
//         <div>
//             <Welcome name='xuzhe' />
//             <Welcome name='xuzhe951024' />
//         </div>
//     );
// }

// ReactDOM.render(
//     <App1 />,
//     document.getElementById('testDiv')
// );


class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        return(
            <div>
                <h1>Well Hello again~</h1>
                <h2>TIME:{this.state.date.toLocaleTimeString()}!</h2>
            </div>
        );
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('testDiv')
);