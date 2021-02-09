import React from 'react'


const circleStyle = {
    width: '50px', 
    height: '50px', 
    borderRadius: '25px', 
    position: 'absolute' 
};

const Circle = ({x,y, color}) => {
    return ( 
        <div style={
            {
            ...circleStyle, 
            left : `${x}px`,
            top: `${y}px`,
            backgroundColor : color, 
            }
        }
        
         
        >

    </div>
     );
}
 
export default Circle;
