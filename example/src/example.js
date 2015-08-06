var React = require('react');
var Nomnoml = require('react-nomnoml');

var App = React.createClass({
	render () {
		return (
			<div>
				<Nomnoml source="


[Pirate
|eyeCount: Int
|raid();pillage()
|
|[beard]--[parrot] 
|[beard]-:>[foul mouth]
];
[<abstract>Marauder]<:--[Pirate]
[<start>MarauderT]->[Pirate]
[<instance> Marauder2]->[Pirate]
[<note> Marauder3]->[Pirate]
[<package> Marauder4]->[Pirate]
[<frame> Marauder5]->[Pirate]
[<database> Marauder6]->[Pirate]
[<start> Marauder7]->[Pirate]
[<end> Marauder8]->[Pirate]
[<state> Marauder9]->[Pirate]
[<choice> Marauder10]->[Pirate]
[<input> Marauder11]->[Pirate]
[<sender> Marauder12]->[Pirate]
[<receiver> Marauder13]->[Pirate]
[<actor> Marauder14]->[Pirate]
[<usecase> Marauder15]->[Pirate]
[<hidden> Marauder16]->[Pirate]
[Pirate]* - 0..7[mischief]
[jollyness]+-+[Pirate]
[jollyness]--[rum]
[jollyness]->[singing]
[Pirate]-> *[rum|tastiness: Int|swig()]
[Pirate]->[singing]
[singing]<->[rum]
[<start>st]->[<state>plunder]
[plunder]->[<choice>more loot]
[more loot]->[st]
[more loot] no ->[<end>e]
[<actor>Sailor] - [<usecase>shiver me;timbers]


				"/>
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
