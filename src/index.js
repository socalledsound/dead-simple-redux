import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'




const bgStyle = {
    backgroundColor: 'pink', 
    width: '100vw', 
    height: '100vh', 
    position: 'relative'
};

const circleStyle = {
    backgroundColor : 'blue', 
    width: '50px', 
    height: '50px', 
    borderRadius: '25px', 
    position: 'absolute' 
};
class App extends Component {
    
    state = {
        x: 500,
        y: 250,
    }


    render(){
        const { x, y } = this.state;
        return (
            <div style={bgStyle}> 
            <div style={
                    {
                    ...circleStyle, 
                    left : `${x}px`,
                    top: `${y}px`,
                    }
                }>

            </div>
        </div>
        )
    }

}  




ReactDOM.render(
    <App />,
    document.getElementById('root')
)