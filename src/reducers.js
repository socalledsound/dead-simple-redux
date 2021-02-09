
 const INITIAL_STATE = {
    x: 500,
    y: 20,
    color: 'purple',
    circles : [{id: 101, x: 100, y: 200, color: 'red'}],
}

export const myReducer = (state = INITIAL_STATE, action) => {
    console.log(action.type);
    switch(action.type){
      
       case 'SET_MOUSE_POSITION':
           console.log(action.payload.x);
           return {...state, x: action.payload.x, y: action.payload.y} 
       case 'SET_NEW_COLOR' :
        console.log(action.payload.color);
           return { ...state, color: action.payload.color}
      
       case 'ADD_CIRCLE' :
           const newCircles = [...state.circles].concat([action.payload.circle]);
           console.log(newCircles);
           return { ...state, circles: newCircles}
        default :
            return {
                ...state
            }
                
   }

}
