import React, {Component} from 'react';
import {Route, Router, hashHistory, Link } from 'react-router';

export default class AdditionalInfo extends Component {
	render() {
		return (
		  <div className="nonsense">
			<div className="hogwarts_history">
				<h2>Hogwarts School of Witchcraft and Wizardry</h2>
				<br/>
				<p>Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak
				 three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! 
				 Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. 
				 Chasers Winky quills The Boy Who Lived bat spleens cupboard under the stairs flying motorcycle. 
				 Sirius Black Holyhead Harpies, you’ve got dirt on your nose. Floating candles Sir Cadogan 
				 The Sight three hoops disciplinary hearing. Grindlewald pig’s tail Sorcerer's Stone biting 
				 teacup. Side-along dragon-scale suits Filch 20 points, Mr. Potter.</p>
			</div>
			<div className="ministry_of_magic">
				<h2>Ministry Of Magic</h2>
				<br/>
				<p>Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow 
				Ludo Bagman. Beaters gobbledegook N.E.W.T., Honeydukes eriseD inferi Wormtail. Mistletoe
				dungeons Parseltongue Eeylops Owl Emporium expecto patronum floo powder duel. Gillyweed 
				portkey, keeper Godric’s Hollow telescope, splinched fire-whisky silver Leprechaun O.W.L.
				stroke the spine. Chalice Hungarian Horntail, catherine wheels Essence of Dittany Gringotts 
				Harry Potter. Prophecies Yaxley green eyes Remembrall horcrux hand of the servant. Devil’s 
				snare love potion Ravenclaw, Professor Sinistra time-turner steak and kidney pie. Cabbage 
				Daily Prophet letters from no one Dervish and Banges leg.
				</p>
			</div>
		  </div>
		);
	}
}