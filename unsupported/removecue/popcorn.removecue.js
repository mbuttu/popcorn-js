(function( Popcorn ) {
  Popcorn.plugin( "test", function( options ) {
    return {
      _setup: function( options ) {
        console.log( "setting up cue" );
        this.cue( "my-id", 5, Popcorn.nop );
      },
      start: function( options ) {
      },
      end: function( options ) {
      },
      _teardown: function( options ) {
        console.log( "removing cue" );
        this.removeTrackEvent( "my-id" );
      }
    };
  });
})( Popcorn );
