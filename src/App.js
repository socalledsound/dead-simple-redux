import React, {Component} from 'react'
import { connect } from 'react-redux'
import { store } from './store'
import { setMousePosition, setNewColor } from './actions'



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
        color: 'green',
    }


    componentDidMount(){
        window.addEventListener('mousemove', this.onMouseMove)
        console.log(this.props.x);
       

        store.subscribe(() => {
            const state = store.getState();
            this.setState({x : state.x, y: state.y, color: state.color });
        })
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove', this.onMouseMove)
    }


    changeColor = () => {
        const {setNewColor } = this.props;
        const randomColor = `#${Math.floor(Math.random()* 16777215).toString(16)}`;
        //store.dispatch(setNewColor(randomColor));
        setNewColor(randomColor);
    }

    onMouseMove = (e) => {
        console.log(this.props);
       // const { setMousePosition } = this.props;
        //this.setState({ x: e.clientX - 25, y: e.clientY -25 });
       // store.dispatch(setMousePosition({ x: e.clientX - 25, y: e.clientY -25 }))
        setMousePosition({ x: e.clientX - 25, y: e.clientY -25 })
    }


    render(){
        const { x, y, color } = this.props;
        console.log(x, y, color);
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






const mapStateToProps = state => {
  return {
      
    x: state.x,
    y: state.y,
    color: state.color,
    }
}

const mapDispatchToProps = dispatch => ({
    setMousePosition: location => dispatch(setMousePosition(location)),
    setNewColor: color => dispatch(setNewColor(color)),
})


export default connect(mapStateToProps, mapDispatchToProps)(App)

//export default App





//const connect = ({ an object } , { another object } ) => (App) => {
    //will return the connection between our app and the store
//} 