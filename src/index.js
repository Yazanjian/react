import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

//to save the state of the app
    const saveToLocalStorage = (state) => {
        try{
            const serializedstate =  JSON.stringify(state);
            localStorage.setItem('state', serializedstate);
        }catch(e){
            console.log(e);
        }
    }
    const loadFromLocalStorage = () => {
        try{
            const serializedstate= localStorage.getItem('state');
            if(serializedstate === null ) return undefined
            return JSON.parse(serializedstate)
        }catch(e){
            console.log(e);
        }
    }

const persistedState = loadFromLocalStorage(); 

const store = createStore(reducer , persistedState);
const persistor = persistStore(store);


store.subscribe(() => saveToLocalStorage(store.getState()));



ReactDOM.render(<Provider store={store}>
   <App/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

