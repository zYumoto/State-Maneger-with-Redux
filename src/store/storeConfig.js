import {createStore, combineReducers} from 'redux'

const reducers = combineReducers({
    numeros: function(state,action){
        switch(action.type){
            case 'NUM_MIN_ALTERADO':
                return{
                    ...state,
                    min: state.payload
                }
                case 'NUM_MAX_ALTERADO':
                    return{
                        ...state,
                        max: state.payload
                    }
                default:
                    return {
                        min:7,
                        max: 31
                    }       
                 }
        
    },
    nomes: function(state,action){
        return[
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})

function storeConfig(){
    return createStore(reducers)
}
export default storeConfig 
