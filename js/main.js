/* Author:

*/

// execute function when the page is ready
Zepto(function($){

  $( window ).on( 'resize', function () {
    $( '.container').height( $(window).height() );
  } ).trigger('resize');

});