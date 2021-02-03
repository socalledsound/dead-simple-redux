
export const setMousePosition = ({ x, y }) => {
    return ({
        type: 'SET_NEW_POSITION',
        payload: {
            x, y
        }
    })
}

export const setNewColor = (color) => {
    console.log(color);
    return ({
        type: 'SET_NEW_COLOR',
        payload: {
            color
        }
    })
}
