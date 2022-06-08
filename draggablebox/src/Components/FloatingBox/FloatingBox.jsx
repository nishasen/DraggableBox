import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { usePosition } from '../../Context';
import './FloatingBox.css';

const FloatingBox = () => {
    const {border, state, dispatch} = usePosition();
    const positionText = state.position[0].toUpperCase()+state.position.slice(1);
    const [showPosition, setShowPosition] = useState({x: 0, y: 0})
    const trackPos = (data) => {
        dispatch({type: 'OTHER_POSITIONS', payload: 'other', values: { x: data.x, y: data.y }});
     };
    console.log(showPosition) 
  return (
      <>
      <div className="display-box">
            
            </div>
    <div className={`floating ${state.position==="center" ? 'center' : 'bottom-right'}`}>
        <Draggable 
            handle=".handle"
            bounds={{left: -960, top: -315, right: 0, bottom: -73}}
            defaultPosition={showPosition}
            position={state.cordinates}
            onDrag={(e, data) => trackPos(data)}
            onStop={()=>setShowPosition(state.cordinates)}
            >
    <div className={`floating-container handle ${border ? 'apply-border' : ''}`}>
        <div className="drag-text">Drag me around...</div> 
        <div className="position-text">{state.position==='center' || state.position==='bottom-right' ? positionText : 'Floating...'}</div> 
    </div>
    </Draggable>
    </div>
    </>
  )
}



export {FloatingBox};