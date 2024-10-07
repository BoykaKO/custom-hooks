export const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload]
        case "DELETE":
            return state.filter(s=>s.id !==action.payload)
        case "MODIFY":
            return state.map(s=>{
                if (s.id===action.payload){
                    return {...s, done:!s.done}
                }
                return s
            })
        default:
            return state;
    }

}