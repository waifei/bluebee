var bb = SC.Application.create({
	store: SC.Store.create({commitRecordsAutomatically: YES}).from('bb.DataSource')
//	store: SC.Store.create({commitRecordsAutomatically: YES}).from('SC.FIXTURES')
});

user = null;

SC.$(document).ready(function() {//I had to use this one, instead of BB.ready.. because frameworks were not loaded
	user = bb.store.createRecord( bb.User, { name: "bar" } );
});

bb.debug = true;

bb.Index = SC.View.extend({
	mouseDown: function() {
		bb.log( "ah, clicki is working" );
		user.set( "name", "blarg" );
	},
});

bb.log = function log( content, type ){
	if( type == "error" ){
		console.log( "ERROR:" );
		console.log( content );
	} else if( bb.debug ){
		console.log( content )
	}
};
