
 const INITIAL_STATE = {
    x: 500,
    y: 20,
    color: 'purple',
}

export const myReducer = (state = INITIAL_STATE, action) => {
   switch(action.type){
       case 'SET_NEW_POSITION':
           return {...state, x: action.payload.x, y: action.payload.y} 
       case 'SET_NEW_COLOR' :
           return { ...state, color: action.payload.color}
       default: return state
   }

}
