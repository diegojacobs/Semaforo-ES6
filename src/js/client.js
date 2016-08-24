import Immutable from 'immutable';
import expect from "expect";
import { createStore } from "redux"
import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/styles.scss';

const TrafficLight = ({state}) =>(
	<div>
		<div class="traffic-light">
			<div class={(state === 2 ? "green light on": "green light")}></div>
			<div class={(state === 1 ? "yellow light on": "yellow light")}></div>
			<div class={(state === 0 ? "red light on": "red light")}></div>
		</div>
		<button onClick={ () => store.dispatch({ type:'NEXT_STATE'})}>next</button>
	</div>
);

const ChangeColor = (state = 0,action)=>{
	if(action.type === 'NEXT_STATE') {
		switch (state) {
			case 0:
				return 2;
			case 1:
				return 0;
			case 2:
				return 1;
			default:
				return state;
		}
	}
	return state;
}

const store = createStore(ChangeColor);

const render = () => {
	ReactDOM.render(
		<TrafficLight state={ store.getState() }/>,
		document.getElementById("viewport")
	);
}

store.subscribe(render);
render();
