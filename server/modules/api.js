/*   { fetch: { bucket: '', conditions: '', returnData: {} }} 
   { createRecord: { bucket: '', record: {}, returnData: {} }}
   { updateRecord: { bucket: '', key: '', record: {}, returnData: {} }}
   { deleteRecord: { bucket: '', key: '', returnData: {} }}
*/
exports.module = function(){
	this.main = function( cb ){
		cb();
	}

	this.on( "api", function( req ){
		if( req.data && req.data.api ){
			try{
				var api = JSON.parse( req.data.api );
			} catch( err ) {
				bb.log( "Parsing JSON went wrong", "error" );
	                	req.write( "invalid request!" );
				return;
			}
                	req.write( "take this!" );
		} else {
			bb.log( "uh, someone wants to use the api :)" );
			var apiDefault = { bluebee: "Oh, hi!", version: bb.version };
                	req.write( JSON.stringify( apiDefault ) );
		}
	});

}
