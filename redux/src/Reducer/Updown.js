const initionalstate = 0
const changeNumber = (state = initionalstate , action) =>{
    switch(action.type){
        case "INCRIMENT" :return state + 5
        case "DICRIMENT" : return state - 5
        default : return state
    }
}
export default changeNumber