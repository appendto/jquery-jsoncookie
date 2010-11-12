/*!
 * jQuery JSON Cookie
 * 
 * Version: @VERSION
 * Released: @DATE
 * Source: http://github.com/appendto/jquery-jsoncookie
 * 
 * Copyright 2010 appendTo LLC. (http://appendto.com/team)
 * Dual licensed under the MIT or GPL licenses.
 * http://appendto.com/open-source-licenses
 */
(function( $ ) {

function now() {
	return (new Date()).getTime();
}

$.cookie = function( key, value, options ) {
	options = $.extend( {}, options );
	var expires = options.expires;

	if ( arguments.length === 1 ) {
		var result = new RegExp( "(?:^|; )" + key + "=([^;]*)").exec( document.cookie );
		return result && JSON.parse( result[ 1 ] );
	} else {
		if ( value === null ) {
			expires = -1;
		}
		if ( typeof expires === "number" ) {
			expires = new Date( now() + ( expires * 864e5 ) );
		}

		document.cookie = [
			key, "=", JSON.stringify( value ),
			expires ? "; expires=" + expires.toUTCString() : "",
			options.path ? "; path=" + options.path : "",
			options.domain ? "; domain=" + options.domain : "",
			options.secure ? "; secure" : ""
		].join( "" );
	}
};

// support test
var test = "jsoncookie" + now();
$.cookie( test, test );
$.support.cookie = $.cookie( test ) === test;
$.cookie( test, null );

})( jQuery );
