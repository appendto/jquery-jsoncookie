var lifecycle = {
	setup: function() {
		var expires = new Date( 0 ).toUTCString();
		$.each( document.cookie.split( "; " ), function( i, cookie ) {
			if ( !cookie ) {
				return;
			}
			var key = cookie.split( "=" )[ 0 ];
			document.cookie = key + "=; expires=" + expires;
		});
	}
};

module( "cookie", lifecycle );

test( "miss", function() {
	expect( 1 );
	equal( $.cookie( "test" ), null );
});

test( "string", function() {
	expect( 2 );
	$.cookie( "test", "hello" );
	equal( document.cookie, "test=%22hello%22", "stored" )
	strictEqual( $.cookie( "test" ), "hello", "retrieved" );
});

test( "number", function() {
	expect( 2 );
	$.cookie( "test", 5 );
	equal( document.cookie, "test=5", "stored" )
	strictEqual( $.cookie( "test" ), 5, "retrieved" );
});

test( "boolean", function() {
	expect( 2 );
	$.cookie( "test", true );
	equal( document.cookie, "test=true", "stored" )
	strictEqual( $.cookie( "test" ), true, "retrieved" );
});

test( "array", function() {
	expect( 2 );
	$.cookie( "test", [ "a", 2 ] );
	equal( document.cookie, "test=%5B%22a%22%2C2%5D", "stored" )
	deepEqual( $.cookie( "test" ), [ "a", 2 ], "retrieved" );
});

test( "object", function() {
	expect( 2 );
	$.cookie( "test", { it: "works" } );
	equal( document.cookie, "test=%7B%22it%22%3A%22works%22%7D", "stored" )
	deepEqual( $.cookie( "test" ), { it: "works" }, "retrieved" );
});

test( "delete", function() {
	expect( 2 );
	$.cookie( "test", "val" );
	equal( $.cookie( "test" ), "val", "stored" );
	$.cookie( "test", null );
	equal( $.cookie( "test" ), null, "cleared" );
});

test( "get all", function() {
	expect( 1 );
	$.cookie( "foo", "bar" );
	$.cookie( "baz", [ "qux" ] );
	deepEqual( $.cookie(), {
		foo: "bar",
		baz: [ "qux" ]
	});
});
