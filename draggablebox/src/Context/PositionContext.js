import { createContext, useContext, useState, useReducer } from 'react';
import { Reducer } from './Reducer';

const PositionContext = createContext();
const usePosition = () => useContext(PositionContext);
const PositionProvider = ({children}) => {
    const [border, setBorder] = useState(false);
    const [state, dispatch] = useReducer(Reducer, {
        position: 'center', 
        cordinates: { x: 0, y: 0}
    })
    return (
        <PositionContext.Provider value={{state, dispatch, border, setBorder}}>
            {children}
        </PositionContext.Provider>
    );
}

export {usePosition, PositionProvider};