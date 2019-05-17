jQuery(document).ready( function( $ ) {

$(window).load(function(){
            
    $(".twentytwenty-container[data-orientation!=\'vertical\']").twentytwenty({
      default_offset_pct:0.5,
      no_overlay:false,
      before_label:2005,
      after_label:2006 });
    $(".twentytwenty-before-label").html("");
    $(".twentytwenty-after-label").html("");
 });
} );

//D3
d3.selectAll(".page-header").append("div")