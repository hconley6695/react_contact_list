import React, {Component} from 'react';
import {Route, Router, hashHistory, Link } from 'react-router';

export default class Home extends Component {
	render() {
		return (
			<div className="home_paragraph">
				<h2>Welcome to all things magical...</h2>
				<br/>
				<p>Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak
				 three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! 
				 Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. 
				 Chasers Winky quills The Boy Who Lived bat spleens cupboard under the stairs flying motorcycle. 
				 Sirius Black Holyhead Harpies, you’ve got dirt on your nose. Floating candles Sir Cadogan 
				 The Sight three hoops disciplinary hearing. Grindlewald pig’s tail Sorcerer's Stone biting 
				 teacup. Side-along dragon-scale suits Filch 20 points, Mr. Potter.</p>
			</div>

		);
	}
}

