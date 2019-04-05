import { stat } from "fs";

const initialState = {
    counter:0,
    login:false, 
    email: 'yazanjian@outlook.com',
    password: '1234'
};


const reducer = (state = initialState , action ) => {

    switch ( action.type ){
        case 'INCREMENT':{
            console.log(state.login);
            return{
                ...state, counter: state.counter+1
            }
        }
        case 'DECREMENT' : {
            if(state.counter > 0 ){
                return{
                    ...state, counter: state.counter-1
                }
            }
        }
        case 'changeLoginState' :{
            if( (action.emailValue === state.email) && (action.passwordValue === state.password) ){
                return{
                    ...state, login: true
                }
            }else{
                return{...state};
            }
        }
        case 'LogOut' : {
            return{
                ...state, login:!state.login
            }
        }
    }
    return state; 
};

export default reducer;