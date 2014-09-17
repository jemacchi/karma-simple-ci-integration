QUnit.config.autostart = false;

test("sqrt - should compute the square root of 4 as 2", function() {
	ok( 2 == My.sqrt(4), "Passed!" );
});

test("sqrt - should compute the square root of 16 as 4", function() {
	ok( 4 == My.sqrt(16), "Passed!" );
});
