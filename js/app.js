const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const { createStore } = Redux;
// var createStore = Redux.createStore;
// import { createStore } from 'redux';

const store = createStore(counter);

console.log(store.getState());

//store.dispatch({type: 'INCREMENT'});

//console.log(store.getState());

const render = () => {
	document.body.innerText = store.getState();
}

store.subscribe(render);
render();

document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
});
