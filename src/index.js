import React, { Component } from 'react'
import ReactDOM from 'react-dom'
 import { createStore } from 'redux'
 import { Provider } from 'react-redux'

 const INITIAL_STATE = {
     x: 500,
     y: 20,
     color: 'purple',
 }

const myReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_NEW_POSITION':
            return {...state, x: action.payload.x, y: action.payload.y} 
        case 'SET_NEW_COLOR' :
            return { ...state, color: action.payload.color}
        default: return state
    }

}


const store = createStore(myReducer)


const setMousePosition = ({ x, y }) => {
    return ({
        type: 'SET_NEW_POSITION',
        payload: {
            x, y
        }
    })
}

const setNewColor = (color) => {
    console.log(color);
    return ({
        type: 'SET_NEW_COLOR',
        payload: {
            color
        }
    })
}


const bgStyle = {
    backgroundColor: 'pink', 
    width: '100vw', 
    height: '100vh', 
    position: 'relative'
};

const circleStyle = {
    width: '50px', 
    height: '50px', 
    borderRadius: '25px', 
    position: 'absolute' 
};
class App extends Component {
    
    state = {
        x: 0,
        y: 0,
        color: 'pink',
    }


    componentDidMount(){
        window.addEventListener('mousemove', this.onMouseMove)

        store.subscribe(() => {
            const state = store.getState();
            this.setState({x : state.x, y: state.y, color: state.color });
        })
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove', this.onMouseMove)
    }


    changeColor = () => {
        const randomColor = `#${Math.floor(Math.random()* 16777215).toString(16)}`;
        store.dispatch(setNewColor(randomColor));
    }

    onMouseMove = (e) => {
        //this.setState({ x: e.clientX - 25, y: e.clientY -25 });
        store.dispatch(setMousePosition({ x: e.clientX - 25, y: e.clientY -25 }))
   
    }


    render(){
        const { x, y, color } = this.state;
        console.log(color);
        return (
            <div style={bgStyle}> 
            <div style={
                    {
                    ...circleStyle, 
                    left : `${x}px`,
                    top: `${y}px`,
                    backgroundColor : color, 
                    }
                }
                
                onClick={this.changeColor}    
                >

            </div>
        </div>
        )
    }

}  




ReactDOM.render(
    
    <Provider store={store} >
        <App />
    </Provider>
    ,
    document.getElementById('root')
)