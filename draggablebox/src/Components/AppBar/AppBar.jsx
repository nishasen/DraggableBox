import React, { useState } from 'react';
import { Clock } from '..';
import { usePosition } from '../../Context';
import './AppBar.css';
import { FaBars } from 'react-icons/fa';

const AppBar = () => {
    const {state, dispatch} = usePosition();
    const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="appbar">
        <div className="header-bar header-resize">
            <span className="header">Position</span>
            <div className="header-bar positioning">
                <div>
                    <input type="radio" name="position" id="center" value="center" checked={state.position==='center'} onChange={(e)=>dispatch({type: "CENTER", payload: e.target.value})}/>
                    <label htmlFor="center">Center</label>
                </div>
                <div>
                    <input type="radio" name="position" id="bottom-right" value="bottom-right" checked={state.position==='bottom-right'} onChange={(e)=>dispatch({type: "BOTTOM_RIGHT", payload: e.target.value})}/>
                    <label htmlFor="bottom-right">Bottom Right</label>        
                </div>
            </div>
        </div>
        <div className="header-bar tooptip-container">
            <div className="keyboard-actions">
                <span>Press escape key to hide the window || Enter to show it again</span>
            </div>
            <FaBars className="bars" onClick={()=>setShowTooltip(!showTooltip)}/>
            {showTooltip && <span className="tooltip">
                Press escape key to hide the window || Enter to show it again
            </span>}
            <div>
                <Clock />
            </div>
        </div>
    </div>
  )
}

export {AppBar};