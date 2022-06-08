export const Reducer = (state, action) => {
    switch(action.type) {
        case 'CENTER' : return {...state, position: action.payload, cordinates:{x: 0, y: 0}}
        case 'BOTTOM_RIGHT' : return {...state, position: action.payload, cordinates: {x: 0, y: 0}}
        case 'OTHER_POSITIONS' : return {...state, position: action.payload, cordinates: action.values}
        default: return state; 
    }
}