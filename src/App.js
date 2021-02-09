import React, {Component} from 'react'
import { connect } from 'react-redux'
import { setMousePosition, setNewColor, addCircle } from './actions'
import Circle from './Circle';


const bgStyle = {
    backgroundColor: 'pink', 
    width: '100vw', 
    height: '100vh', 
    position: 'relative'
};


class App extends Component {
    
    state = {
        x: 0,
        y: 0,
        color: 'green',
    }


    componentDidMount(){
        window.addEventListener('mousemove', this.onMouseMove)
        const { x, y, color, circles } = this.props;
        console.log(x);
        this.setState({ x, y, color, circles });

        // store.subscribe(() => {
        //     const state = store.getState();
             
        // })
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove', this.onMouseMove)
    }


    createCircle = (x, y, color) => {
        
        const newCircle = {
            id: new Date().getMilliseconds(),
            x,
            y,
            color
        }
        return newCircle
    }


    onMouseMove = (e) => {
        const { setMousePosition, setNewColor } = this.props;
        const randomColor = `#${Math.floor(Math.random()* 16777215).toString(16)}`;
        //store.dispatch(setNewColor(randomColor));
        setNewColor(randomColor);
        setMousePosition(e.clientX - 25, e.clientY -25 )
    }

    update = () => {
        
        console.log('firing');
        const { x, y, color, addCircle } = this.props;
        const newCircle = this.createCircle(x, y, color);
        addCircle(newCircle);
        
    }

    render(){
        
        const { x, y, color, circles } = this.props;
        console.log(circles);
        
        return (
            <div style={bgStyle}  onClick={this.update}  > 

                {circles.length > 0 && circles.map(circle => <Circle key={circle.id} x={circle.x} y={circle.y} color={circle.color} />)}
                <Circle x={x} y={y} color={color} />
            </div>
        )
    }

}  






const mapStateToProps = state => {
  return {
      
    x: state.x,
    y: state.y,
    color: state.color,
    circles: state.circles,
    }
}

const mapDispatchToProps = dispatch => ({
    setMousePosition : (x, y) => dispatch(setMousePosition(x, y)),
    setNewColor : color => dispatch(setNewColor(color)),
    addCircle : circle => dispatch(addCircle(circle)),
})


export default connect(mapStateToProps, mapDispatchToProps)(App)

//export default App





//const connect = ({ an object } , { another object } ) => (App) => {
    //will return the connection between our app and the store
//} 