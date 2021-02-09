
export const setMousePosition = (x, y) => {
    console.log(x);
    return {
        type: 'SET_MOUSE_POSITION',
        payload: {
            x, 
            y
        }
    }
}

export const setNewColor = (color) => {
  
    return {
        type: 'SET_NEW_COLOR',
        payload: {
            color
        }
    }
}

export const addCircle = (circle) => {
     console.log(circle);
    return {
        type: 'ADD_CIRCLE',
        payload : {
            circle
        }
    }
}
